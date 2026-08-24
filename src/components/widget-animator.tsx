'use client'

import { useEffect } from 'react'

/**
 * WidgetAnimator — watches for the Axenza chat widget button to appear in the DOM
 * and adds attention-grabbing animations around it.
 *
 * Strategy:
 *  1. MutationObserver detects when the widget renders (it's async).
 *  2. A pulse ring + blinking dot are overlaid on top of the button via
 *     absolutely-positioned DOM nodes (since the widget is third-party we
 *     can't directly style its internals).
 *  3. A "nudge" shake fires after 4 s, then every 15 s, until the user clicks
 *     the widget — after which all animations are cleaned up.
 */
export function WidgetAnimator() {
  useEffect(() => {
    let pulseRing: HTMLDivElement | null = null
    let dot: HTMLDivElement | null = null
    let nudgeInterval: ReturnType<typeof setInterval> | null = null
    let observer: MutationObserver | null = null
    let cleanedUp = false

    /** Find the widget button — tries common patterns the Axenza widget uses */
    function findWidgetButton(): HTMLElement | null {
      // The widget injects a fixed-position element. Try a few selectors.
      const candidates = [
        document.querySelector<HTMLElement>('[data-widget-id]'),
        document.querySelector<HTMLElement>('#axenza-widget-btn'),
        document.querySelector<HTMLElement>('.axenza-widget-launcher'),
        // Fallback: look for any fixed button in the bottom-right quadrant
        ...(Array.from(document.querySelectorAll<HTMLElement>('button, div[role="button"]')).filter(
          (el) => {
            const s = window.getComputedStyle(el)
            const rect = el.getBoundingClientRect()
            return (
              s.position === 'fixed' &&
              rect.bottom > window.innerHeight * 0.6 &&
              rect.right > window.innerWidth * 0.6 &&
              rect.width > 30 &&
              rect.width < 100
            )
          }
        )),
      ]
      return candidates.find(Boolean) ?? null
    }

    function positionOverlays(btn: HTMLElement) {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const size = Math.max(rect.width, rect.height)

      if (pulseRing) {
        pulseRing.style.width = `${size}px`
        pulseRing.style.height = `${size}px`
        pulseRing.style.left = `${cx - size / 2}px`
        pulseRing.style.top = `${cy - size / 2}px`
      }

      if (dot) {
        dot.style.left = `${rect.right - 12}px`
        dot.style.top = `${rect.top - 2}px`
      }
    }

    function cleanup() {
      if (cleanedUp) return
      cleanedUp = true
      pulseRing?.remove()
      dot?.remove()
      if (nudgeInterval) clearInterval(nudgeInterval)
      observer?.disconnect()
    }

    function startAnimations(btn: HTMLElement) {
      // Pulse ring overlay
      pulseRing = document.createElement('div')
      pulseRing.className = 'axenza-widget-pulse-ring'
      document.body.appendChild(pulseRing)

      // Blinking notification dot
      dot = document.createElement('div')
      dot.className = 'axenza-widget-dot'
      document.body.appendChild(dot)

      positionOverlays(btn)

      // Reposition on resize/scroll
      window.addEventListener('resize', () => positionOverlays(btn), { passive: true })
      window.addEventListener('scroll', () => positionOverlays(btn), { passive: true })

      // Nudge shake: fire after 4 s, then every 15 s
      const triggerNudge = () => {
        btn.classList.add('axenza-widget-nudge')
        btn.addEventListener(
          'animationend',
          () => btn.classList.remove('axenza-widget-nudge'),
          { once: true }
        )
      }

      const firstNudge = setTimeout(triggerNudge, 4000)
      nudgeInterval = setInterval(triggerNudge, 15000)

      // Stop everything on first click
      const handleClick = () => {
        clearTimeout(firstNudge)
        cleanup()
      }
      btn.addEventListener('click', handleClick, { once: true })
      // Also stop if user clicks the overlay region
      pulseRing.addEventListener('click', handleClick, { once: true })
    }

    function tryAttach() {
      const btn = findWidgetButton()
      if (btn) {
        observer?.disconnect()
        startAnimations(btn)
        return true
      }
      return false
    }

    // Watch for DOM mutations — the widget script may inject its button any time
    observer = new MutationObserver(() => {
      if (tryAttach()) observer?.disconnect()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Also try immediately in case it's already there
    tryAttach()

    return cleanup
  }, [])

  return null
}
