'use client'
/* eslint-disable */
// @ts-ignore -- R3F JSX intrinsics not resolved by Next.js tsc plugin; works fine at runtime

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNodes() {
  const groupRef = useRef<THREE.Group>(null)

  const positions = useMemo(() => {
    const pts: [number, number, number][] = []
    for (let i = 0; i < 50; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 3 + Math.random() * 2
      pts.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ])
    }
    return pts
  }, [])

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.05
  })

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#7c6fff' : '#00d4ff'} />
        </mesh>
      ))}
    </group>
  )
}

export function NeuralNetworkCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <color attach="background" args={['#050810']} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
      <NeuralNodes />
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c6fff" />
    </Canvas>
  )
}
