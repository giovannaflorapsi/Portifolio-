'use client'

import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import { DoodleStar } from '@/components/doodles'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Lightbox } from '@/components/ui/lightbox'
import { CERTIFICADOS } from '@/data/certificados'



export function CertificadosSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    if (selectedIndex === null) return
    if (direction === 'next') {
      setSelectedIndex((prev) => (prev !== null && prev < CERTIFICADOS.length - 1 ? prev + 1 : 0))
    } else {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : CERTIFICADOS.length - 1))
    }
  }, [selectedIndex])

  useEffect(() => {
    if (selectedIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') navigateLightbox('next')
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, navigateLightbox])

  return (
    <section id="formacao" className="relative overflow-hidden bg-paper py-16 md:py-28">
      {/* Background sutil */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal delay={100}>
          <div className="mb-12 text-center md:mb-20">
            <div className="mb-4 inline-flex items-center gap-2">
              <DoodleStar className="h-5 w-5 text-terracotta/70" />
              <span className="washi-tape washi-tape-white inline-block rotate-[1deg] px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
                Formação Profissional
              </span>
            </div>
            <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-ink text-balance md:text-[2.8rem]">
              Trajetória e Credenciais
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.1rem] leading-relaxed text-ink/75">
              O constante aprimoramento teórico e prático é o que sustenta uma escuta psicanalítica responsável. 
              Aqui estão alguns dos percursos e formações que constroem a minha base clínica.
            </p>
          </div>
        </ScrollReveal>

                <ScrollReveal delay={200}>
          <div className={`relative transition-all duration-1000 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[3000px]' : 'max-h-[450px] md:max-h-[600px]'}`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {CERTIFICADOS.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="group relative flex flex-col w-full overflow-hidden rounded-[2px] bg-white border border-ink/5 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta cursor-zoom-in"
                  aria-label={`Ampliar certificado ${index + 1}`}
                >
                  <div className="relative w-full overflow-hidden bg-muted rounded-[1px] aspect-[1.414/1]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-ink/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </button>
              ))}
            </div>

            {/* Gradient Fade Overlay when collapsed */}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-paper via-paper/90 to-transparent flex items-end justify-center pb-4">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium tracking-wide text-paper shadow-paper transition-all duration-300 hover:-translate-y-1 hover:bg-ink/90 hover:shadow-[0_8px_20px_rgba(50,23,33,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                >
                  Visualizar todas as credenciais
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal para Certificados */}
      <Lightbox images={CERTIFICADOS} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} variant="certificate" />
    </section>
  )
}