import type { SVGProps } from 'react'

/* ── 1. Componentes SVG de Folhas e Pétalas ── */

export function LeafPointed({
  fillColor = '#DF5623',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 54 50" fill="none" aria-hidden="true" {...props}>
      <path
        d="M27 4 C32 12 40 10 49 14 C43 24 48 34 40 40 C34 38 31 46 27 46 C23 46 20 38 14 40 C6 34 11 24 5 14 C14 10 22 12 27 4 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M27 12 C27 24 27 36 27 44" stroke={strokeColor} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M27 24 C33 20 39 21 42 23" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M27 24 C21 20 15 21 12 23" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M27 34 C32 32 37 34 39 36" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M27 34 C22 32 17 34 15 36" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

export function LeafCurled({
  fillColor = '#F29864',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 42 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4 C24 8 36 20 34 34 C32 44 22 46 16 42 C10 38 8 28 10 18 C11 12 11 8 12 4 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 10 C18 20 22 32 20 40" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M18 22 C24 23 28 26 30 28" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

export function LeafFluter({
  fillColor = '#FFFFFF',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 38 34" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 18 C10 8 24 4 32 10 C34 18 28 28 18 28 C10 28 6 22 6 18 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 17 C16 16 24 16 30 13" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function PetalGently({
  fillColor = '#F7B8CC',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 28 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 2 C22 8 26 18 20 26 C15 32 7 30 4 24 C1 18 6 8 14 2 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M14 10 C15 16 14 22 12 26" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

export function SparkleStar({
  color = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2 C13 7 17 11 22 12 C17 13 13 17 12 22 C11 17 7 13 2 12 C7 11 11 7 12 2 Z"
        fill={color}
      />
    </svg>
  )
}

/* 4. Folha de Ginkgo em leque com recorte central */
export function LeafGinkgo({
  fillColor = '#F6A378',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 46 44" fill="none" aria-hidden="true" {...props}>
      <path
        d="M23 42 C23 35 22 28 20 22 C12 20 4 16 6 8 C14 2 20 8 23 14 C26 8 32 2 40 8 C42 16 34 20 26 22 C24 28 23 35 23 42 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Nervuras em leque radiante */}
      <path d="M22 22 C17 16 12 12 8 10" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M22 22 C20 15 18 10 16 6" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M24 22 C26 15 28 10 30 6" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M24 22 C29 16 34 12 38 10" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

/* 5. Folha Oval/Lanceolada clássica com nervuras detalhadas */
export function LeafOvalNerved({
  fillColor = '#DF5623',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 36 50" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 4 C28 12 32 26 28 38 C24 46 18 48 18 48 C18 48 12 46 8 38 C4 26 8 12 18 4 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Nervura central */}
      <path d="M18 6 L18 46" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      {/* Nervuras laterais alternadas */}
      <path d="M18 16 C23 13 26 14 28 16" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M18 20 C13 17 10 18 8 20" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M18 28 C23 25 26 27 27 29" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M18 32 C13 29 10 31 9 33" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

/* 6. Folha de Salgueiro esguia e ondulada pelo vento */
export function LeafWillow({
  fillColor = '#E8698F',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 26 56" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 2 C19 12 24 26 20 40 C17 50 13 54 13 54 C13 54 9 50 6 40 C2 26 7 12 13 2 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 4 C15 18 15 36 13 52" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M14 18 C17 16 19 17 20 18" stroke={strokeColor} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M13 26 C9 24 7 25 6 26" stroke={strokeColor} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M14 34 C17 32 18 33 19 34" stroke={strokeColor} strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  )
}

/* 7. Folha Cordiforme delicada (formato de coração) */
export function LeafHeart({
  fillColor = '#F28DA7',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 38 42" fill="none" aria-hidden="true" {...props}>
      <path
        d="M19 40 C19 40 4 28 4 15 C4 7 11 3 19 10 C27 3 34 7 34 15 C34 28 19 40 19 40 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19 12 L19 38" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19 20 C13 18 9 20 7 22" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M19 22 C25 20 29 22 31 24" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

/* 8. Ramo botânico com folhinhas delicadas */
export function LeafBranch({
  fillColor = '#FCD6C4',
  strokeColor = '#321721',
  ...props
}: SVGProps<SVGSVGElement> & { fillColor?: string; strokeColor?: string }) {
  return (
    <svg viewBox="0 0 40 52" fill="none" aria-hidden="true" {...props}>
      {/* Haste central curva */}
      <path d="M20 50 C18 35 22 18 20 4" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
      {/* Folíolos ao longo da haste */}
      <ellipse cx="12" cy="14" rx="7" ry="4" transform="rotate(-30 12 14)" fill={fillColor} stroke={strokeColor} strokeWidth="1.3" />
      <ellipse cx="28" cy="18" rx="7" ry="4" transform="rotate(25 28 18)" fill={fillColor} stroke={strokeColor} strokeWidth="1.3" />
      <ellipse cx="11" cy="26" rx="8" ry="4.5" transform="rotate(-25 11 26)" fill={fillColor} stroke={strokeColor} strokeWidth="1.3" />
      <ellipse cx="29" cy="30" rx="8" ry="4.5" transform="rotate(20 29 30)" fill={fillColor} stroke={strokeColor} strokeWidth="1.3" />
      <ellipse cx="12" cy="38" rx="7" ry="4" transform="rotate(-20 12 38)" fill={fillColor} stroke={strokeColor} strokeWidth="1.3" />
      <ellipse cx="28" cy="42" rx="7" ry="4" transform="rotate(15 28 42)" fill={fillColor} stroke={strokeColor} strokeWidth="1.3" />
      <ellipse cx="20" cy="5" rx="5" ry="3" transform="rotate(-90 20 5)" fill={fillColor} stroke={strokeColor} strokeWidth="1.3" />
    </svg>
  )
}

/* ── 2. Distribuição Orgânica de Folhas Caindo por Seção ── */

export function FolhinhasDecor({
  variant = 'hero',
  className = '',
}: {
  variant?: 'hero' | 'escuta' | 'encontro' | 'processo' | 'temas' | 'duvidas' | 'cta' | 'sutil'
  className?: string
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {variant === 'hero' && <HeroLeaves />}
      {variant === 'escuta' && <EscutaLeaves />}
      {variant === 'encontro' && <EncontroLeaves />}
      {variant === 'processo' && <ProcessoLeaves />}
      {variant === 'temas' && <TemasLeaves />}
      {variant === 'duvidas' && <DuvidasLeaves />}
      {variant === 'cta' && <CtaLeaves />}
      {variant === 'sutil' && <SutilLeaves />}
    </div>
  )
}

/* Hero: O vento sopra no topo e espalha folhas em ambos os lados e pelo centro */
function HeroLeaves() {
  return (
    <>
      {/* ── Lateral Esquerda (alturas e profundidades variadas) ── */}
      {/* Folha grande em primeiro plano, cortando a margem esquerda superior */}
      <LeafPointed
        fillColor="#DF5623"
        className="absolute -left-6 top-8 hidden h-16 w-16 rotate-[28deg] opacity-85 drop-shadow-sm sm:block"
      />
      {/* Folhinha média em damasco flutuando para baixo */}
      <LeafCurled
        fillColor="#F6A378"
        className="absolute left-10 top-36 hidden h-10 w-9 rotate-[-22deg] opacity-70 drop-shadow-sm md:block"
      />
      {/* Pétala delicada branca/translúcida distante */}
      <PetalGently
        fillColor="#FFFDFB"
        className="absolute left-24 top-20 hidden h-7 w-6 rotate-[40deg] opacity-45 lg:block"
      />
      {/* Sparkle dourado/terracota */}
      <SparkleStar
        color="#DF5623"
        className="absolute left-20 top-12 hidden h-4 w-4 rotate-12 md:block"
      />
      {/* Folha ao fundo no terço inferior esquerdo */}
      <LeafFluter
        fillColor="#FCD6C4"
        className="absolute left-4 bottom-28 hidden h-11 w-12 rotate-[15deg] opacity-55 lg:block"
      />
      <PetalGently
        fillColor="#F7B8CC"
        className="absolute left-16 bottom-16 hidden h-6 w-5 rotate-[-35deg] opacity-50 md:block"
      />

      {/* ── Centro / Fundo (profundidade suave atrás do conteúdo) ── */}
      <LeafCurled
        fillColor="#FFFDFB"
        className="absolute left-[45%] top-14 hidden h-8 w-7 rotate-[18deg] opacity-35 md:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute left-[52%] top-28 hidden h-3.5 w-3.5 rotate-45 opacity-40 md:block"
      />
      <PetalGently
        fillColor="#FCD6C4"
        className="absolute left-[48%] bottom-32 hidden h-7 w-6 rotate-[-15deg] opacity-30 lg:block"
      />

      {/* ── Lateral Direita (cascata orgânica em torno da foto) ── */}
      {/* Folha no topo direito cortando a borda */}
      <LeafPointed
        fillColor="#E36A38"
        className="absolute -right-4 top-10 hidden h-14 w-15 rotate-[-18deg] opacity-80 drop-shadow-sm md:block"
      />
      <SparkleStar
        color="#DF5623"
        className="absolute right-16 top-6 hidden h-3.5 w-3.5 rotate-12 md:block"
      />
      {/* Folha branca pura em destaque poético */}
      <LeafFluter
        fillColor="#FFFFFF"
        className="absolute right-24 top-24 hidden h-10 w-11 rotate-[35deg] opacity-75 drop-shadow-sm lg:block"
      />
      {/* Folha média curvada descendo em direção à polaroid */}
      <LeafCurled
        fillColor="#F6AFC1"
        className="absolute -right-3 top-56 hidden h-11 w-10 rotate-[24deg] opacity-70 drop-shadow-sm md:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute right-12 top-48 hidden h-4 w-4 rotate-45 md:block"
      />
      {/* Transição inferior para a próxima seção em rosa e damasco */}
      <LeafPointed
        fillColor="#F28DA7"
        className="absolute right-6 bottom-24 hidden h-12 w-13 rotate-[-30deg] opacity-65 drop-shadow-sm lg:block"
      />
      <PetalGently
        fillColor="#FCD6C4"
        className="absolute right-20 bottom-12 hidden h-7 w-6 rotate-[15deg] opacity-60 md:block"
      />
    </>
  )
}

/* Escuta: Folhas caindo entre os blocos de texto e a polaroid */
function EscutaLeaves() {
  return (
    <>
      {/* Esquerda: folhas ao fundo que acompanham a leitura */}
      <LeafPointed
        fillColor="#F6A378"
        className="absolute -left-5 top-12 hidden h-14 w-15 rotate-[32deg] opacity-65 md:block"
      />
      <SparkleStar
        color="#DF5623"
        className="absolute left-12 top-8 hidden h-3.5 w-3.5 rotate-12 md:block"
      />
      <PetalGently
        fillColor="#FFFDFB"
        className="absolute left-6 top-48 hidden h-8 w-7 rotate-[-20deg] opacity-40 lg:block"
      />
      <LeafFluter
        fillColor="#F7B8CC"
        className="absolute left-2 bottom-16 hidden h-10 w-11 rotate-[18deg] opacity-55 md:block"
      />

      {/* Centro / Fundo */}
      <PetalGently
        fillColor="#FCD6C4"
        className="absolute left-[42%] top-20 hidden h-7 w-6 rotate-[45deg] opacity-25 lg:block"
      />

      {/* Direita: moldando a foto da xícara/mãos */}
      <LeafCurled
        fillColor="#C83F69"
        className="absolute -right-4 top-14 hidden h-13 w-12 rotate-[-28deg] opacity-75 drop-shadow-sm md:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute right-14 top-10 hidden h-3.5 w-3.5 rotate-45 md:block"
      />
      <LeafFluter
        fillColor="#FFFFFF"
        className="absolute right-20 top-40 hidden h-9 w-10 rotate-[22deg] opacity-60 lg:block"
      />
      <LeafPointed
        fillColor="#EA5D85"
        className="absolute -right-3 bottom-12 hidden h-12 w-13 rotate-[-12deg] opacity-70 md:block"
      />
      <PetalGently
        fillColor="#F6AFC1"
        className="absolute right-16 bottom-6 hidden h-7 w-6 rotate-[30deg] opacity-50 md:block"
      />
    </>
  )
}

/* Encontro: Folhas flutuando suavemente entre os 4 cartões de atendimento */
function EncontroLeaves() {
  return (
    <>
      <LeafPointed
        fillColor="#DF5623"
        className="absolute -left-4 top-8 hidden h-13 w-14 rotate-[15deg] opacity-70 md:block"
      />
      <SparkleStar
        color="#DF5623"
        className="absolute left-12 top-6 hidden h-3.5 w-3.5 rotate-12 md:block"
      />
      <LeafCurled
        fillColor="#F6A378"
        className="absolute left-8 bottom-12 hidden h-10 w-9 rotate-[-35deg] opacity-55 lg:block"
      />
      <PetalGently
        fillColor="#FFFDFB"
        className="absolute left-20 bottom-8 hidden h-7 w-6 rotate-[25deg] opacity-45 md:block"
      />

      {/* Fundo intermediário */}
      <LeafFluter
        fillColor="#FCD6C4"
        className="absolute left-[35%] top-4 hidden h-8 w-9 rotate-[-10deg] opacity-30 lg:block"
      />
      <PetalGently
        fillColor="#F7B8CC"
        className="absolute left-[65%] bottom-6 hidden h-6 w-5 rotate-[40deg] opacity-35 lg:block"
      />

      {/* Direita */}
      <LeafCurled
        fillColor="#F28DA7"
        className="absolute -right-3 top-12 hidden h-11 w-10 rotate-[-20deg] opacity-65 md:block"
      />
      <LeafFluter
        fillColor="#FFFFFF"
        className="absolute right-12 top-28 hidden h-9 w-10 rotate-[30deg] opacity-55 lg:block"
      />
      <LeafPointed
        fillColor="#C83F69"
        className="absolute -right-4 bottom-10 hidden h-12 w-13 rotate-[20deg] opacity-60 md:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute right-14 bottom-20 hidden h-3.5 w-3.5 rotate-45 md:block"
      />
    </>
  )
}

/* Processo: Folhas etéreas e translúcidas sobre o fundo rosa framboesa */
function ProcessoLeaves() {
  return (
    <>
      <LeafPointed
        fillColor="#FFFFFF"
        strokeColor="rgba(50,23,33,0.35)"
        className="absolute -left-4 top-10 hidden h-14 w-15 rotate-[25deg] opacity-40 drop-shadow-sm md:block"
      />
      <SparkleStar
        color="#DF5623"
        className="absolute left-14 top-8 hidden h-4 w-4 rotate-12 opacity-60 md:block"
      />
      <LeafCurled
        fillColor="#FCD6C4"
        strokeColor="rgba(50,23,33,0.3)"
        className="absolute left-10 bottom-14 hidden h-10 w-9 rotate-[-30deg] opacity-35 lg:block"
      />

      {/* Centro */}
      <PetalGently
        fillColor="#FFFDFB"
        strokeColor="rgba(50,23,33,0.2)"
        className="absolute left-[50%] top-6 hidden h-7 w-6 rotate-[15deg] opacity-25 lg:block"
      />

      {/* Direita */}
      <LeafFluter
        fillColor="#FFFFFF"
        strokeColor="rgba(50,23,33,0.35)"
        className="absolute -right-3 top-14 hidden h-11 w-12 rotate-[-22deg] opacity-45 drop-shadow-sm md:block"
      />
      <LeafPointed
        fillColor="#F7B8CC"
        strokeColor="rgba(50,23,33,0.3)"
        className="absolute -right-4 bottom-12 hidden h-13 w-14 rotate-[18deg] opacity-40 md:block"
      />
      <SparkleStar
        color="#FFFFFF"
        className="absolute right-14 bottom-24 hidden h-4 w-4 rotate-45 opacity-60 md:block"
      />
    </>
  )
}

/* Temas: Folhas espalhadas ao redor dos post-its, criando atmosfera de mural botânico */
function TemasLeaves() {
  return (
    <>
      {/* Margem esquerda */}
      <LeafPointed
        fillColor="#DF5623"
        className="absolute -left-5 top-16 hidden h-14 w-15 rotate-[28deg] opacity-65 md:block"
      />
      <SparkleStar
        color="#DF5623"
        className="absolute left-12 top-10 hidden h-3.5 w-3.5 rotate-12 md:block"
      />
      <LeafCurled
        fillColor="#F6A378"
        className="absolute left-6 top-[38%] hidden h-10 w-9 rotate-[-15deg] opacity-50 lg:block"
      />
      <PetalGently
        fillColor="#FFFDFB"
        className="absolute left-2 top-[65%] hidden h-8 w-7 rotate-[40deg] opacity-45 md:block"
      />
      <LeafFluter
        fillColor="#F7B8CC"
        className="absolute -left-2 bottom-16 hidden h-11 w-12 rotate-[-25deg] opacity-60 md:block"
      />

      {/* Fundo intermediário entre os post-its */}
      <PetalGently
        fillColor="#FCD6C4"
        className="absolute left-[28%] top-12 hidden h-7 w-6 rotate-[15deg] opacity-25 lg:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute left-[54%] top-[45%] hidden h-3.5 w-3.5 rotate-45 opacity-30 lg:block"
      />
      <PetalGently
        fillColor="#FFFDFB"
        className="absolute left-[72%] top-[60%] hidden h-7 w-6 rotate-[-20deg] opacity-25 lg:block"
      />

      {/* Margem direita */}
      <LeafCurled
        fillColor="#C83F69"
        className="absolute -right-4 top-20 hidden h-12 w-11 rotate-[-30deg] opacity-65 drop-shadow-sm md:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute right-12 top-14 hidden h-4 w-4 rotate-45 md:block"
      />
      <LeafFluter
        fillColor="#FFFFFF"
        className="absolute right-4 top-[42%] hidden h-10 w-11 rotate-[20deg] opacity-55 lg:block"
      />
      <LeafPointed
        fillColor="#EA5D85"
        className="absolute -right-4 bottom-24 hidden h-13 w-14 rotate-[15deg] opacity-60 md:block"
      />
      <PetalGently
        fillColor="#FCD6C4"
        className="absolute right-10 bottom-10 hidden h-8 w-7 rotate-[-35deg] opacity-50 md:block"
      />
    </>
  )
}

/* Dúvidas: Folhas suaves e repousantes nas laterais do FAQ */
function DuvidasLeaves() {
  return (
    <>
      <LeafCurled
        fillColor="#F6A378"
        className="absolute -left-3 top-16 hidden h-11 w-10 rotate-[22deg] opacity-60 md:block"
      />
      <SparkleStar
        color="#DF5623"
        className="absolute left-10 top-10 hidden h-3.5 w-3.5 rotate-12 md:block"
      />
      <PetalGently
        fillColor="#FFFDFB"
        className="absolute left-6 bottom-20 hidden h-7 w-6 rotate-[-15deg] opacity-45 lg:block"
      />

      {/* Direita */}
      <LeafPointed
        fillColor="#C83F69"
        className="absolute -right-4 top-20 hidden h-13 w-14 rotate-[-25deg] opacity-60 md:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute right-12 top-14 hidden h-3.5 w-3.5 rotate-45 md:block"
      />
      <LeafFluter
        fillColor="#F7B8CC"
        className="absolute right-6 bottom-14 hidden h-10 w-11 rotate-[20deg] opacity-55 md:block"
      />
    </>
  )
}

/* CTA: Folhas finais celebrando o fechamento da página e transição para o rodapé */
function CtaLeaves() {
  return (
    <>
      {/* Esquerda */}
      <LeafPointed
        fillColor="#DF5623"
        className="absolute -left-4 top-8 hidden h-14 w-15 rotate-[20deg] opacity-75 drop-shadow-sm md:block"
      />
      <SparkleStar
        color="#DF5623"
        className="absolute left-14 top-6 hidden h-4 w-4 rotate-12 md:block"
      />
      <LeafCurled
        fillColor="#F6A378"
        className="absolute left-6 bottom-10 hidden h-11 w-10 rotate-[-25deg] opacity-60 md:block"
      />
      <PetalGently
        fillColor="#FFFDFB"
        className="absolute left-16 bottom-24 hidden h-8 w-7 rotate-[35deg] opacity-50 lg:block"
      />

      {/* Direita */}
      <LeafPointed
        fillColor="#C83F69"
        className="absolute -right-4 top-10 hidden h-14 w-15 rotate-[-15deg] opacity-75 drop-shadow-sm md:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute right-14 top-8 hidden h-4 w-4 rotate-45 md:block"
      />
      <LeafFluter
        fillColor="#FFFFFF"
        className="absolute right-8 bottom-16 hidden h-10 w-11 rotate-[28deg] opacity-65 drop-shadow-sm md:block"
      />
      <LeafCurled
        fillColor="#F7B8CC"
        className="absolute -right-3 bottom-6 hidden h-10 w-9 rotate-[-30deg] opacity-55 md:block"
      />
    </>
  )
}

function SutilLeaves() {
  return (
    <>
      <LeafCurled
        fillColor="#F7B8CC"
        className="absolute right-6 top-8 hidden h-9 w-8 rotate-[35deg] opacity-50 md:block"
      />
      <SparkleStar
        color="#C83F69"
        className="absolute right-4 top-20 hidden h-3 w-3 rotate-12 md:block"
      />
    </>
  )
}
