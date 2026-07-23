'use client'
/* eslint-disable */
// @ts-ignore -- R3F JSX intrinsics; works at runtime

import { useMemo, useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '@/components/theme-provider'

type LatticeColors = {
  node: string
  nodeAlt: string
  line: string
}

function useMediaFlags() {
  const [flags, setFlags] = useState({ mobile: false, reduced: false })
  useEffect(() => {
    const mobileMq = window.matchMedia('(max-width: 768px)')
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () =>
      setFlags({ mobile: mobileMq.matches, reduced: reducedMq.matches })
    update()
    mobileMq.addEventListener('change', update)
    reducedMq.addEventListener('change', update)
    return () => {
      mobileMq.removeEventListener('change', update)
      reducedMq.removeEventListener('change', update)
    }
  }, [])
  return flags
}

function VoltageLattice({
  colors,
  nodeCount,
  reducedMotion,
}: {
  colors: LatticeColors
  nodeCount: number
  reducedMotion: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.InstancedMesh>(null)

  const { matrices, linePositions } = useMemo(() => {
    const pts: THREE.Vector3[] = []
    let s = 42
    const rand = () => {
      s = (s * 16807) % 2147483647
      return (s - 1) / 2147483646
    }

    for (let i = 0; i < nodeCount; i++) {
      const theta = rand() * Math.PI * 2
      const phi = Math.acos(rand() * 2 - 1)
      const r = 2.2 + rand() * 2.6
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.7,
          r * Math.cos(phi)
        )
      )
    }

    const dummy = new THREE.Object3D()
    const mats = new Float32Array(nodeCount * 16)
    pts.forEach((p, i) => {
      const scale = i % 7 === 0 ? 1.55 : 0.9
      dummy.position.copy(p)
      dummy.scale.setScalar(scale)
      dummy.updateMatrix()
      dummy.matrix.toArray(mats, i * 16)
    })

    const maxDist = 2.35
    const segments: number[] = []
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          segments.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z)
        }
      }
    }

    return {
      matrices: mats,
      linePositions: new Float32Array(segments),
    }
  }, [nodeCount])

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    return geo
  }, [linePositions])

  useEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    for (let i = 0; i < nodeCount; i++) {
      const m = new THREE.Matrix4()
      m.fromArray(matrices, i * 16)
      mesh.setMatrixAt(i, m)
      mesh.setColorAt(
        i,
        new THREE.Color(i % 5 === 0 ? colors.nodeAlt : colors.node)
      )
    }
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [matrices, nodeCount, colors.node, colors.nodeAlt])

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return
    // Cap delta to avoid jumps after tab sleep
    const d = Math.min(delta, 0.05)
    groupRef.current.rotation.y += d * 0.06
    groupRef.current.rotation.x = Math.sin(performance.now() * 0.00015) * 0.06
  })

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeo} frustumCulled>
        <lineBasicMaterial color={colors.line} transparent opacity={0.28} />
      </lineSegments>
      <instancedMesh ref={meshRef} args={[undefined, undefined, nodeCount]} frustumCulled>
        <sphereGeometry args={[0.034, 8, 8]} />
        <meshBasicMaterial transparent opacity={0.85} toneMapped={false} />
      </instancedMesh>
    </group>
  )
}

function FallbackBg({ light }: { light: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: light
          ? 'radial-gradient(ellipse at 50% 40%, rgba(107,143,0,0.08) 0%, transparent 60%), #f3f5f0'
          : 'radial-gradient(ellipse at 50% 40%, rgba(200,245,66,0.06) 0%, transparent 55%), #070908',
      }}
    />
  )
}

export function NeuralNetworkCanvas() {
  const { theme } = useTheme()
  const { mobile, reduced } = useMediaFlags()
  const [inView, setInView] = useState(true)
  const wrapRef = useRef<HTMLDivElement>(null)
  const isLight = theme === 'light'

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '80px', threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const colors: LatticeColors = isLight
    ? { node: '#6b8f00', nodeAlt: '#3d7a5a', line: '#6b8f00' }
    : { node: '#c8f542', nodeAlt: '#3dffa8', line: '#c8f542' }

  // Mobile / reduced-motion: static CSS — no WebGL cost while scrolling
  if (reduced || mobile) {
    return (
      <div ref={wrapRef} className="absolute inset-0">
        <FallbackBg light={isLight} />
      </div>
    )
  }

  return (
    <div ref={wrapRef} className="absolute inset-0 pointer-events-none">
      {!inView ? (
        <FallbackBg light={isLight} />
      ) : (
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 42 }}
          dpr={[1, 1.25]}
          frameloop="always"
          gl={{
            antialias: false,
            alpha: isLight,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(isLight ? 0x000000 : 0x070908, isLight ? 0 : 1)
          }}
          style={{ background: 'transparent', pointerEvents: 'none' }}
          fallback={<FallbackBg light={isLight} />}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.35} />
            <VoltageLattice colors={colors} nodeCount={32} reducedMotion={false} />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
