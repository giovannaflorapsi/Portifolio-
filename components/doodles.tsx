import type { SVGProps } from 'react'

/* Small hand-drawn decorative marks — intentionally rough, drawn as simple strokes. */

export function DoodleStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        className="animate-draw"
        d="M12 2.5c.6 4.3 2.3 6.6 6.5 7.3-4.2.9-5.9 3.2-6.5 7.4-.6-4.2-2.3-6.5-6.5-7.4 4.2-.7 5.9-3 6.5-7.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DoodleArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 90" fill="none" aria-hidden="true" {...props}>
      <path
        className="animate-draw"
        d="M22 4C14 22 30 34 18 52c-9 13 4 22 2 30"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        className="animate-draw"
        d="M12 74c3 4 6 8 8 12 3-4 6-7 10-10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DoodleArrowCurve(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 60" fill="none" aria-hidden="true" {...props}>
      <path
        className="animate-draw"
        d="M6 42C30 8 78 6 112 26"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        className="animate-draw"
        d="M98 12c8 4 12 8 14 14-7 1-12 3-17 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DoodleUnderline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 20" fill="none" aria-hidden="true" {...props}>
      <path
        className="animate-draw"
        d="M4 12C50 4 150 4 196 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DoodleCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 100" fill="none" aria-hidden="true" {...props}>
      <path
        className="animate-draw"
        d="M112 8C48 4 14 24 12 50c-2 28 44 44 104 42 52-2 92-20 92-46 0-24-40-40-96-38"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DoodleSquiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 24" fill="none" aria-hidden="true" {...props}>
      <path
        className="animate-draw"
        d="M4 14c8-12 16 12 24 0s16 12 24 0 16 12 24 0 16 12 24 0"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
