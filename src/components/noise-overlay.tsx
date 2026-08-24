'use client'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function NoiseOverlay() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: 0.028,
        backgroundImage: `url(${BASE}/hero-grain.png)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '180px 180px',
        mixBlendMode: 'overlay',
        contain: 'strict',
      }}
    />
  )
}
