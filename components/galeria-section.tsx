'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'
import { DoodleStar } from '@/components/doodles'
import { Lightbox } from '@/components/ui/lightbox'
import { WashiTape } from '@/components/ui/washi-tape'
import { FOTOS } from '@/data/galeria'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'



export function GaleriaSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Lightbox state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Pause marquee if hovered OR modal is open
  const isPaused = isHovered || selectedIndex !== null

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.style.animationPlayState = isPaused ? 'paused' : 'running'
  }, [isPaused])

  // Handle Lightbox navigation
  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    if (selectedIndex === null) return
    
    if (direction === 'next') {
      setSelectedIndex((prev) => (prev !== null && prev < FOTOS.length - 1 ? prev + 1 : 0))
    } else {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : FOTOS.length - 1))
    }
  }, [selectedIndex])

  // Keyboard support for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') navigateLightbox('next')
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, navigateLightbox])

  return (
    <section id="fragmentos" className="relative overflow-hidden bg-transparent py-16 md:py-24">
      {/* Background com gradiente e listras únicas para a galeria */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #FBECF3 0%, #FFF5EE 50%, #FDE9DE 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-50 bg-stripes-galeria" />
      </div>

      <div className="relative z-10">
        {/* Título da seção */}
        <ScrollReveal delay={100} className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2">
              <DoodleStar className="h-5 w-5 text-terracotta/70" />
              <span className="washi-tape washi-tape-peach inline-block rotate-[-1deg] px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
                Fragmentos
              </span>
              <DoodleStar className="h-4 w-4 text-rose/60" />
            </div>
            <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-ink text-balance md:text-[2.8rem]">
              Pequenos recortes do
              <br />
              espaço que construímos
            </h2>
            <p className="mx-auto mt-4 max-w-md font-hand text-[1.35rem] text-terracotta/80">
              detalhes que fazem parte da escuta
            </p>
          </div>
        </ScrollReveal>

        {/* Marquee de polaroids — borda a borda */}
        <ScrollReveal delay={300} direction="none">
          <div
            className="group relative w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradientes de fade nas bordas */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#FBECF3] to-transparent md:w-24" />
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#FDE9DE] to-transparent md:w-24" />

            {/* Track do marquee */}
            <div
              ref={trackRef}
              className="marquee-track flex w-max gap-8 md:gap-12"
            >
              {/* Renderiza o set duas vezes para loop infinito */}
              {[...FOTOS, ...FOTOS].map((foto, index) => {
                const isClone = index >= FOTOS.length
                const realIndex = isClone ? index - FOTOS.length : index
                
                return (
                  <button
                    key={`${foto.caption}-${index}`}
                    onClick={() => setSelectedIndex(realIndex)}
                    className={`${foto.rotate} group/card relative w-56 shrink-0 rounded-sm bg-card p-2.5 pb-5 shadow-polaroid transition-all duration-500 hover:rotate-0 hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(50,23,33,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta md:w-72 md:p-3 md:pb-6 text-left cursor-zoom-in`}
                    aria-label={`Ampliar foto: ${foto.caption}`}
                  >
                    {/* Washi tape */}
                    <span
                      className={`washi-tape ${foto.tape} pointer-events-none absolute z-20 h-6 w-16 ${foto.tapePos}`}
                    />

                    {/* Imagem flexível com limite máximo para manter o ritmo */}
                    <div className="relative w-full overflow-hidden rounded-[2px] bg-muted h-64 md:h-80">
                      <Image
                        src={foto.src}
                        alt={foto.alt}
                        fill
                        sizes="(max-width: 768px) 224px, 288px"
                        priority={index < 4}
                        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-ink/5 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
                    </div>

                    {/* Legenda manuscrita */}
                    <p className="mt-3 text-center font-hand text-[1.15rem] tracking-wide text-ink/70 md:mt-4 md:text-[1.25rem]">
                      {foto.caption}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>

            {/* Lightbox Modal */}
      <Lightbox images={FOTOS} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} variant="photo" />
    </section>
  )
}