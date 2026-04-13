'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

let _lenis: Lenis | null = null

export function scrollTo(target: string) {
  _lenis?.scrollTo(target, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    _lenis = lenis
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => { lenis.destroy(); _lenis = null }
  }, [])
  return <>{children}</>
}
