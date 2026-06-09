'use client'

import { useEffect } from 'react'

export function CustomCursor() {
  useEffect(() => {
    // Only apply on desktop
    if (window.matchMedia('(hover: none)').matches) {
      return
    }

    const cursor = document.querySelector<HTMLElement>('.cursor-dot')
    if (!cursor) return

    const updateCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    document.addEventListener('mousemove', updateCursor)
    return () => document.removeEventListener('mousemove', updateCursor)
  }, [])

  return (
    <div className="cursor-dot" />
  )
}
