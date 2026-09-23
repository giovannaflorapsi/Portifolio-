'use client'

import { useState } from 'react'
import { DoodleStar } from '@/components/doodles'
import { ScrollReveal } from '@/components/scroll-reveal'

const DUVIDAS = [
  {
    id: 'duvida-1',
    q: 'Como funciona a primeira sessão?',
    a: 'A primeira sessão é um momento inicial para conversarmos sobre o que trouxe você até a terapia, acolher suas expectativas, conhecer um pouco da sua história e começarmos a construir juntos o espaço de trabalho.',
  },
  {
    id: 'duvida-2',
    q: 'Preciso saber exatamente o que falar?',
    a: 'Não. Você não precisa chegar com tudo organizado ou saber explicar exatamente o que está acontecendo. Na psicanálise, a fala vai encontrando seu próprio ritmo e seus caminhos ao longo dos encontros.',
  },
  {
    id: 'duvida-3',
    q: 'A terapia é somente para quem está passando por um sofrimento agudo?',
    a: 'Não necessariamente. A psicoterapia também é um espaço valioso para compreender padrões que se repetem, escolhas de vida, momentos de transição, desejos, autoconhecimento e novas formas de viver.',
  },
  {
    id: 'duvida-4',
    q: 'Você atende questões relacionadas à identidade de gênero e sexualidade?',
    a: 'Sim. A clínica é um espaço de escuta absolutamente acolhedor, ético e livre de julgamentos para questões de identidade de gênero, sexualidade, afetos e a singularidade de cada pessoa.',
  },
  {
    id: 'duvida-5',
    q: 'As sessões online são sigilosas?',
    a: 'Sim. O sigilo profissional é rigorosamente mantido conforme o Código de Ética Profissional do Psicólogo, realizado por plataformas seguras de videochamada em ambiente reservado.',
  },
  {
    id: 'duvida-6',
    q: 'Quanto tempo dura o processo de terapia?',
    a: 'Cada processo é singular e tem seu próprio tempo. Não há um número fixo de sessões pré-determinado, pois a duração acompanha a evolução das questões que você deseja trabalhar.',
  },
]

export function DuvidasSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="duvidas" className="relative overflow-hidden bg-transparent py-16 md:py-24">
      {/* Camada de Background e Papel de Parede Listrado (Nível Base z-0) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #FFF4EE 0%, #FCE8F0 50%, #FFF4EE 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-60 bg-stripes-duvidas" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-8">
        <ScrollReveal delay={100} className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="washi-tape washi-tape-peach inline-block rotate-1 px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
              Dúvidas frequentes
            </span>
          </div>
          <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-ink text-balance md:text-[2.8rem]">
            Antes de começar,
            <br />
            talvez você queira saber:
          </h2>
        </ScrollReveal>

        <ul className="flex flex-col gap-3.5">
          {DUVIDAS.map((item, i) => {
            const isOpen = openIndex === i
            const contentId = `${item.id}-content`
            const buttonId = `${item.id}-button`

            return (
              <ScrollReveal
                key={item.id}
                delay={150 + i * 100}
                direction="up"
              >
                <li
                  className="overflow-hidden rounded-sm border border-border/70 bg-card shadow-paper transition-colors hover:border-border"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left transition-colors hover:bg-paper-warm/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                    >
                      <span className="flex items-center gap-3 font-serif text-[1.2rem] font-medium text-ink">
                        {isOpen && (
                          <DoodleStar className="h-4 w-4 shrink-0 text-terracotta" />
                        )}
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 font-serif text-2xl text-terracotta transition-transform duration-300 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-border/40 px-6 pb-6 pt-4 text-[1.05rem] leading-[1.65] text-ink/80">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              </ScrollReveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
