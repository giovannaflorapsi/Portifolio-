'use client'

import type { CSSProperties } from 'react'
import {
  LeafPointed,
  LeafCurled,
  LeafFluter,
  PetalGently,
  SparkleStar,
  LeafGinkgo,
  LeafOvalNerved,
  LeafWillow,
  LeafHeart,
  LeafBranch,
} from '@/components/folhinhas-decor'

type LeafKind =
  | 'pointed'
  | 'curled'
  | 'fluter'
  | 'petal'
  | 'sparkle'
  | 'ginkgo'
  | 'oval'
  | 'willow'
  | 'heart'
  | 'branch'

interface ContinuousLeaf {
  id: string
  kind: LeafKind
  topPercent: number // 0% a 97% da extensão da página
  leftPercent: number // 2% a 94% da largura
  scale: number // 0.55 a 1.30
  opacity: number // 0.20 a 0.85
  fillColor: string
  strokeColor?: string
  windClass: 'leaf-wind-1' | 'leaf-wind-2' | 'leaf-wind-3' | 'leaf-wind-4'
  duration: number // 20s a 42s
  delay: number // negativo para loop assíncrono instantâneo
  initialRotate: number // rotação inicial
  hideOnMobile?: boolean
}

/* ── Ecossistema Botânico Rico e Equilibrado (~50 folhas distribuídas) ── */
const CONTINUOUS_LEAVES: ContinuousLeaf[] = [
  /* ── Faixa 1: Topo / Hero (0% a 14%) ── */
  {
    id: 'l-01',
    kind: 'pointed',
    topPercent: 1.0,
    leftPercent: 3,
    scale: 1.25,
    opacity: 0.82,
    fillColor: '#DF5623', // Laranja terracota
    windClass: 'leaf-wind-1',
    duration: 24,
    delay: -6,
    initialRotate: 24,
  },
  {
    id: 'l-02',
    kind: 'ginkgo',
    topPercent: 2.5,
    leftPercent: 88,
    scale: 1.15,
    opacity: 0.78,
    fillColor: '#ED723E', // Laranja médio
    windClass: 'leaf-wind-2',
    duration: 27,
    delay: -14,
    initialRotate: -18,
  },
  {
    id: 'l-03',
    kind: 'petal',
    topPercent: 3.8,
    leftPercent: 44,
    scale: 0.65,
    opacity: 0.28,
    fillColor: '#FFFDFB', // Branco marfim suave
    windClass: 'leaf-wind-3',
    duration: 38,
    delay: -22,
    initialRotate: 35,
    hideOnMobile: true,
  },
  {
    id: 'l-04',
    kind: 'willow',
    topPercent: 5.5,
    leftPercent: 93,
    scale: 1.10,
    opacity: 0.74,
    fillColor: '#EA5D85', // Rosa médio
    windClass: 'leaf-wind-4',
    duration: 25,
    delay: -3,
    initialRotate: 15,
  },
  {
    id: 'l-05',
    kind: 'curled',
    topPercent: 7.2,
    leftPercent: 14,
    scale: 0.90,
    opacity: 0.60,
    fillColor: '#F8B088', // Damasco suave
    windClass: 'leaf-wind-1',
    duration: 29,
    delay: -11,
    initialRotate: -22,
  },
  {
    id: 'l-06',
    kind: 'oval',
    topPercent: 9.0,
    leftPercent: 82,
    scale: 1.05,
    opacity: 0.72,
    fillColor: '#C83F69', // Rosa framboesa
    windClass: 'leaf-wind-2',
    duration: 26,
    delay: -18,
    initialRotate: 28,
  },
  {
    id: 'l-07',
    kind: 'sparkle',
    topPercent: 10.5,
    leftPercent: 22,
    scale: 0.85,
    opacity: 0.65,
    fillColor: '#DF5623',
    windClass: 'leaf-wind-3',
    duration: 34,
    delay: -15,
    initialRotate: 45,
  },
  {
    id: 'l-08',
    kind: 'heart',
    topPercent: 12.0,
    leftPercent: 6,
    scale: 0.92,
    opacity: 0.58,
    fillColor: '#F28DA7', // Rosa pétala
    windClass: 'leaf-wind-4',
    duration: 30,
    delay: -8,
    initialRotate: -15,
  },
  {
    id: 'l-09',
    kind: 'fluter',
    topPercent: 13.5,
    leftPercent: 92,
    scale: 0.80,
    opacity: 0.45,
    fillColor: '#FFF2F6', // Branco levemente rosado
    windClass: 'leaf-wind-1',
    duration: 36,
    delay: -25,
    initialRotate: 30,
    hideOnMobile: true,
  },

  /* ── Faixa 2: A Escuta (15% a 29%) ── */
  {
    id: 'l-10',
    kind: 'branch',
    topPercent: 15.5,
    leftPercent: 89,
    scale: 1.12,
    opacity: 0.75,
    fillColor: '#FCD6C4', // Pêssego quente
    windClass: 'leaf-wind-2',
    duration: 26,
    delay: -5,
    initialRotate: -20,
  },
  {
    id: 'l-11',
    kind: 'pointed',
    topPercent: 17.0,
    leftPercent: 5,
    scale: 1.18,
    opacity: 0.80,
    fillColor: '#C83F69', // Framboesa
    windClass: 'leaf-wind-1',
    duration: 24,
    delay: -12,
    initialRotate: 25,
  },
  {
    id: 'l-12',
    kind: 'oval',
    topPercent: 19.0,
    leftPercent: 94,
    scale: 0.95,
    opacity: 0.65,
    fillColor: '#E76229', // Laranja médio
    windClass: 'leaf-wind-4',
    duration: 28,
    delay: -19,
    initialRotate: 18,
  },
  {
    id: 'l-13',
    kind: 'petal',
    topPercent: 20.8,
    leftPercent: 50,
    scale: 0.60,
    opacity: 0.25,
    fillColor: '#F6AFC1', // Rosa suave
    windClass: 'leaf-wind-3',
    duration: 39,
    delay: -28,
    initialRotate: -32,
    hideOnMobile: true,
  },
  {
    id: 'l-14',
    kind: 'ginkgo',
    topPercent: 22.5,
    leftPercent: 10,
    scale: 1.05,
    opacity: 0.68,
    fillColor: '#F59E72', // Âmbar damasco
    windClass: 'leaf-wind-2',
    duration: 31,
    delay: -7,
    initialRotate: -12,
  },
  {
    id: 'l-15',
    kind: 'willow',
    topPercent: 24.5,
    leftPercent: 86,
    scale: 0.90,
    opacity: 0.55,
    fillColor: '#E8698F', // Rosa pétala
    windClass: 'leaf-wind-1',
    duration: 33,
    delay: -16,
    initialRotate: 22,
  },
  {
    id: 'l-16',
    kind: 'fluter',
    topPercent: 26.5,
    leftPercent: 3,
    scale: 1.00,
    opacity: 0.62,
    fillColor: '#FFFDFB', // Branco marfim
    windClass: 'leaf-wind-4',
    duration: 27,
    delay: -9,
    initialRotate: -10,
  },
  {
    id: 'l-17',
    kind: 'sparkle',
    topPercent: 28.5,
    leftPercent: 91,
    scale: 0.85,
    opacity: 0.60,
    fillColor: '#C83F69',
    windClass: 'leaf-wind-3',
    duration: 35,
    delay: -23,
    initialRotate: 12,
  },

  /* ── Faixa 3: O Encontro (30% a 44%) ── */
  {
    id: 'l-18',
    kind: 'curled',
    topPercent: 30.5,
    leftPercent: 8,
    scale: 1.20,
    opacity: 0.78,
    fillColor: '#DF5623', // Laranja terracota
    windClass: 'leaf-wind-1',
    duration: 25,
    delay: -4,
    initialRotate: 30,
  },
  {
    id: 'l-19',
    kind: 'heart',
    topPercent: 32.5,
    leftPercent: 92,
    scale: 1.10,
    opacity: 0.70,
    fillColor: '#EA5D85', // Rosa médio
    windClass: 'leaf-wind-2',
    duration: 28,
    delay: -15,
    initialRotate: -25,
  },
  {
    id: 'l-20',
    kind: 'oval',
    topPercent: 34.8,
    leftPercent: 46,
    scale: 0.70,
    opacity: 0.32,
    fillColor: '#FCD6C4', // Pêssego translúcido
    windClass: 'leaf-wind-3',
    duration: 38,
    delay: -26,
    initialRotate: 14,
    hideOnMobile: true,
  },
  {
    id: 'l-21',
    kind: 'pointed',
    topPercent: 37.0,
    leftPercent: 4,
    scale: 1.05,
    opacity: 0.65,
    fillColor: '#ED723E', // Laranja médio
    windClass: 'leaf-wind-4',
    duration: 29,
    delay: -10,
    initialRotate: -18,
  },
  {
    id: 'l-22',
    kind: 'branch',
    topPercent: 39.2,
    leftPercent: 87,
    scale: 1.15,
    opacity: 0.72,
    fillColor: '#F7B8CC', // Rosa blush
    windClass: 'leaf-wind-1',
    duration: 26,
    delay: -21,
    initialRotate: 20,
  },
  {
    id: 'l-23',
    kind: 'ginkgo',
    topPercent: 41.5,
    leftPercent: 12,
    scale: 0.92,
    opacity: 0.58,
    fillColor: '#F8B088', // Damasco
    windClass: 'leaf-wind-2',
    duration: 32,
    delay: -13,
    initialRotate: -15,
  },
  {
    id: 'l-24',
    kind: 'petal',
    topPercent: 43.5,
    leftPercent: 94,
    scale: 0.85,
    opacity: 0.50,
    fillColor: '#FFF6F0', // Branco damasco
    windClass: 'leaf-wind-3',
    duration: 35,
    delay: -2,
    initialRotate: 28,
  },

  /* ── Faixa 4: Processo (45% a 59%) ── */
  {
    id: 'l-25',
    kind: 'pointed',
    topPercent: 45.5,
    leftPercent: 90,
    scale: 1.15,
    opacity: 0.52,
    fillColor: '#FFFDFB', // Branco nítido sobre fundo rosa
    strokeColor: 'rgba(50,23,33,0.35)',
    windClass: 'leaf-wind-1',
    duration: 30,
    delay: -17,
    initialRotate: 15,
  },
  {
    id: 'l-26',
    kind: 'willow',
    topPercent: 47.8,
    leftPercent: 6,
    scale: 1.05,
    opacity: 0.48,
    fillColor: '#FCD6C4',
    strokeColor: 'rgba(50,23,33,0.25)',
    windClass: 'leaf-wind-2',
    duration: 28,
    delay: -6,
    initialRotate: -32,
  },
  {
    id: 'l-27',
    kind: 'sparkle',
    topPercent: 50.0,
    leftPercent: 86,
    scale: 0.90,
    opacity: 0.65,
    fillColor: '#FFFFFF',
    windClass: 'leaf-wind-3',
    duration: 34,
    delay: -24,
    initialRotate: 45,
  },
  {
    id: 'l-28',
    kind: 'curled',
    topPercent: 52.2,
    leftPercent: 14,
    scale: 0.95,
    opacity: 0.42,
    fillColor: '#F7B8CC',
    strokeColor: 'rgba(50,23,33,0.28)',
    windClass: 'leaf-wind-4',
    duration: 31,
    delay: -11,
    initialRotate: 24,
  },
  {
    id: 'l-29',
    kind: 'heart',
    topPercent: 54.5,
    leftPercent: 52,
    scale: 0.68,
    opacity: 0.30,
    fillColor: '#F6AFC1',
    strokeColor: 'rgba(50,23,33,0.22)',
    windClass: 'leaf-wind-1',
    duration: 37,
    delay: -29,
    initialRotate: -18,
    hideOnMobile: true,
  },
  {
    id: 'l-30',
    kind: 'oval',
    topPercent: 56.8,
    leftPercent: 92,
    scale: 1.10,
    opacity: 0.46,
    fillColor: '#DF5623',
    strokeColor: 'rgba(50,23,33,0.30)',
    windClass: 'leaf-wind-2',
    duration: 27,
    delay: -8,
    initialRotate: 22,
  },
  {
    id: 'l-31',
    kind: 'fluter',
    topPercent: 59.0,
    leftPercent: 8,
    scale: 0.88,
    opacity: 0.40,
    fillColor: '#FFFDFB',
    strokeColor: 'rgba(50,23,33,0.25)',
    windClass: 'leaf-wind-3',
    duration: 33,
    delay: -19,
    initialRotate: -14,
  },

  /* ── Faixa 5: Temas (60% a 74%) ── */
  {
    id: 'l-32',
    kind: 'ginkgo',
    topPercent: 61.0,
    leftPercent: 5,
    scale: 1.22,
    opacity: 0.78,
    fillColor: '#DF5623', // Laranja terracota
    windClass: 'leaf-wind-1',
    duration: 25,
    delay: -9,
    initialRotate: 28,
  },
  {
    id: 'l-33',
    kind: 'pointed',
    topPercent: 63.0,
    leftPercent: 93,
    scale: 1.18,
    opacity: 0.74,
    fillColor: '#C83F69', // Framboesa
    windClass: 'leaf-wind-2',
    duration: 27,
    delay: -18,
    initialRotate: -20,
  },
  {
    id: 'l-34',
    kind: 'petal',
    topPercent: 65.2,
    leftPercent: 48,
    scale: 0.65,
    opacity: 0.28,
    fillColor: '#FCD6C4',
    windClass: 'leaf-wind-3',
    duration: 40,
    delay: -30,
    initialRotate: 18,
    hideOnMobile: true,
  },
  {
    id: 'l-35',
    kind: 'willow',
    topPercent: 67.5,
    leftPercent: 8,
    scale: 1.05,
    opacity: 0.65,
    fillColor: '#ED723E', // Laranja médio
    windClass: 'leaf-wind-4',
    duration: 28,
    delay: -12,
    initialRotate: -16,
  },
  {
    id: 'l-36',
    kind: 'branch',
    topPercent: 69.5,
    leftPercent: 88,
    scale: 1.12,
    opacity: 0.70,
    fillColor: '#F28DA7', // Rosa pétala
    windClass: 'leaf-wind-1',
    duration: 26,
    delay: -5,
    initialRotate: 24,
  },
  {
    id: 'l-37',
    kind: 'oval',
    topPercent: 71.8,
    leftPercent: 12,
    scale: 0.95,
    opacity: 0.58,
    fillColor: '#F8B088', // Damasco suave
    windClass: 'leaf-wind-2',
    duration: 31,
    delay: -21,
    initialRotate: -26,
  },
  {
    id: 'l-38',
    kind: 'heart',
    topPercent: 73.8,
    leftPercent: 92,
    scale: 1.00,
    opacity: 0.64,
    fillColor: '#EA5D85', // Rosa médio
    windClass: 'leaf-wind-3',
    duration: 33,
    delay: -14,
    initialRotate: 15,
  },

  /* ── Faixa 6: Dúvidas (75% a 86%) ── */
  {
    id: 'l-39',
    kind: 'curled',
    topPercent: 76.0,
    leftPercent: 6,
    scale: 1.10,
    opacity: 0.70,
    fillColor: '#F6A378', // Damasco
    windClass: 'leaf-wind-2',
    duration: 28,
    delay: -13,
    initialRotate: 20,
  },
  {
    id: 'l-40',
    kind: 'pointed',
    topPercent: 78.5,
    leftPercent: 91,
    scale: 1.20,
    opacity: 0.75,
    fillColor: '#C83F69', // Framboesa
    windClass: 'leaf-wind-1',
    duration: 24,
    delay: -4,
    initialRotate: -24,
  },
  {
    id: 'l-41',
    kind: 'fluter',
    topPercent: 80.8,
    leftPercent: 86,
    scale: 0.90,
    opacity: 0.50,
    fillColor: '#FFF2F6', // Branco rosado suave
    windClass: 'leaf-wind-4',
    duration: 32,
    delay: -17,
    initialRotate: 16,
  },
  {
    id: 'l-42',
    kind: 'ginkgo',
    topPercent: 83.0,
    leftPercent: 9,
    scale: 1.05,
    opacity: 0.65,
    fillColor: '#DF5623', // Laranja terracota
    windClass: 'leaf-wind-2',
    duration: 29,
    delay: -22,
    initialRotate: -18,
  },
  {
    id: 'l-43',
    kind: 'petal',
    topPercent: 85.0,
    leftPercent: 50,
    scale: 0.65,
    opacity: 0.28,
    fillColor: '#F7B8CC', // Rosa suave
    windClass: 'leaf-wind-3',
    duration: 37,
    delay: -8,
    initialRotate: 25,
    hideOnMobile: true,
  },

  /* ── Faixa 7: CTA e Final (87% a 98%) ── */
  {
    id: 'l-44',
    kind: 'pointed',
    topPercent: 87.5,
    leftPercent: 4,
    scale: 1.28,
    opacity: 0.82,
    fillColor: '#DF5623', // Terracota vivo
    windClass: 'leaf-wind-1',
    duration: 23,
    delay: -7,
    initialRotate: 26,
  },
  {
    id: 'l-45',
    kind: 'willow',
    topPercent: 89.8,
    leftPercent: 92,
    scale: 1.15,
    opacity: 0.76,
    fillColor: '#C83F69', // Framboesa
    windClass: 'leaf-wind-2',
    duration: 26,
    delay: -15,
    initialRotate: -20,
  },
  {
    id: 'l-46',
    kind: 'branch',
    topPercent: 92.0,
    leftPercent: 8,
    scale: 1.10,
    opacity: 0.68,
    fillColor: '#FCD6C4', // Pêssego
    windClass: 'leaf-wind-4',
    duration: 30,
    delay: -21,
    initialRotate: 18,
  },
  {
    id: 'l-47',
    kind: 'heart',
    topPercent: 94.0,
    leftPercent: 88,
    scale: 1.05,
    opacity: 0.70,
    fillColor: '#EA5D85', // Rosa pétala
    windClass: 'leaf-wind-1',
    duration: 27,
    delay: -10,
    initialRotate: -15,
  },
  {
    id: 'l-48',
    kind: 'oval',
    topPercent: 96.0,
    leftPercent: 12,
    scale: 0.95,
    opacity: 0.58,
    fillColor: '#F8B088', // Damasco suave
    windClass: 'leaf-wind-3',
    duration: 34,
    delay: -27,
    initialRotate: 22,
  },
  {
    id: 'l-49',
    kind: 'fluter',
    topPercent: 97.5,
    leftPercent: 85,
    scale: 0.88,
    opacity: 0.48,
    fillColor: '#FFFDFB', // Branco marfim
    windClass: 'leaf-wind-4',
    duration: 31,
    delay: -12,
    initialRotate: -28,
  },
]

function renderLeafShape(leaf: ContinuousLeaf) {
  const baseClass = 'w-11 h-11 drop-shadow-xs transition-transform'

  switch (leaf.kind) {
    case 'pointed':
      return (
        <LeafPointed
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className={baseClass}
        />
      )
    case 'curled':
      return (
        <LeafCurled
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className={baseClass}
        />
      )
    case 'fluter':
      return (
        <LeafFluter
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className={baseClass}
        />
      )
    case 'petal':
      return (
        <PetalGently
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className="w-8 h-9 drop-shadow-xs"
        />
      )
    case 'sparkle':
      return <SparkleStar color={leaf.fillColor} className="w-5 h-5" />
    case 'ginkgo':
      return (
        <LeafGinkgo
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className="w-11 h-10 drop-shadow-xs"
        />
      )
    case 'oval':
      return (
        <LeafOvalNerved
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className="w-9 h-12 drop-shadow-xs"
        />
      )
    case 'willow':
      return (
        <LeafWillow
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className="w-7 h-14 drop-shadow-xs"
        />
      )
    case 'heart':
      return (
        <LeafHeart
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className="w-10 h-11 drop-shadow-xs"
        />
      )
    case 'branch':
      return (
        <LeafBranch
          fillColor={leaf.fillColor}
          strokeColor={leaf.strokeColor}
          className="w-10 h-13 drop-shadow-xs"
        />
      )
  }
}

export function ContinuousFallingLeaves() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden select-none"
      aria-hidden="true"
    >
      {CONTINUOUS_LEAVES.map((leaf) => {
        const style: CSSProperties = {
          top: `${leaf.topPercent}%`,
          left: `${leaf.leftPercent}%`,
          transform: `scale(${leaf.scale}) rotate(${leaf.initialRotate}deg)`,
          ['--leaf-opacity' as string]: leaf.opacity,
          ['--leaf-duration' as string]: `${leaf.duration}s`,
          ['--leaf-delay' as string]: `${leaf.delay}s`,
        }

        return (
          <div
            key={leaf.id}
            style={style}
            className={`absolute ${leaf.windClass} ${
              leaf.hideOnMobile ? 'hidden md:block' : ''
            }`}
          >
            {renderLeafShape(leaf)}
          </div>
        )
      })}
    </div>
  )
}
