import Image from 'next/image'
import { DoodleArrowCurve, DoodleStar } from '@/components/doodles'
import { ScrollReveal } from '@/components/scroll-reveal'

const WHATSAPP_URL =
  'https://wa.me/558192669829?text=Oi%2C%20Flora!%20Gostaria%20de%20agendar%20um%20atendimento.'

export function CtaSection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-transparent py-16 md:py-24">
      {/* Camada de Background e Papel de Parede Listrado (Nível Base z-0) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #FFF4EE 0%, #FDE9DE 50%, #FCE4EE 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-45 bg-stripes-hero" />
      </div>

      {/* Blob orgânico de luz e profundidade atrás do card */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #F7B8CC 0%, #FCD6C4 55%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8">
        <ScrollReveal delay={150} direction="up"
          className="relative rounded-sm px-6 py-14 text-center text-[#FFFDFB] shadow-polaroid md:px-16 md:py-20"
          style={{
            background: 'linear-gradient(135deg, #DF5623 0%, #C83F69 55%, #901C42 100%)',
          }}
        >
          <DoodleStar className="pointer-events-none absolute left-6 top-8 h-6 w-6 text-[#FFFDFB]/60" />
          <DoodleStar className="pointer-events-none absolute right-12 top-12 h-5 w-5 text-[#FFFDFB]/40" />

          {/* Mini polaroid com flores secas e washi tape */}
          <div className="absolute -right-3 -top-7 hidden w-32 rotate-6 rounded-sm bg-card p-2.5 shadow-polaroid transition-transform hover:rotate-0 md:block">
            <span className="washi-tape washi-tape-white pointer-events-none absolute -left-2 -top-2.5 z-20 h-6 w-14 -rotate-12" />
            <div className="relative aspect-square w-full overflow-hidden rounded-[2px] bg-muted">
              <Image
                src="/Portifolio-/images/collage-flowers.png"
                alt="Flores secas sobre papel"
                fill
                sizes="130px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-4 inline-flex items-center gap-2">
            <span className="washi-tape washi-tape-white inline-block rotate-[-1deg] px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
              Talvez seja hora de começar a falar
            </span>
          </div>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-[2rem] font-medium leading-[1.1] text-balance sm:text-4xl md:text-5xl lg:text-[3.8rem]">
            O que você tem
            <br />
            tentado carregar sozinho?
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[1.1rem] leading-[1.75] text-[#FFFDFB]/90">
            Um espaço de escuta acolhedor pode começar justamente por aquilo que, até agora,
            você não conseguiu colocar em palavras.
          </p>

          <div className="mt-10 flex flex-col items-center">
            <div className="flex items-end gap-1 pr-6 md:pr-10">
              <span className="font-hand text-[1.6rem] leading-none text-[#FFFDFB]/90">
                é só chamar no WhatsApp
              </span>
              <DoodleArrowCurve className="pointer-events-none h-10 w-14 -scale-x-100 text-[#FFFDFB]/75" />
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-10 mt-4 inline-flex items-center gap-2.5 rounded-full bg-ink px-9 py-4 text-[15px] tracking-wide font-medium text-paper shadow-paper transition-all duration-300 hover:-translate-y-1 hover:bg-ink/90 hover:shadow-[0_8px_20px_rgba(50,23,33,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Agendar atendimento
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
