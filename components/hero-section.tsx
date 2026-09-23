import Image from 'next/image'
import {
  DoodleStar,
  DoodleCircle,
  DoodleUnderline,
  DoodleSquiggle,
} from '@/components/doodles'

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-transparent">
      {/* Camada de Background e Papel de Parede Listrado (Nível Base z-0) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(165deg, #FDE6DA 0%, #FFF5EF 30%, #FFFFFF 52%, #FCEAF1 80%, #FFF4EE 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-70 bg-stripes-hero" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:px-8 md:pb-24 md:pt-20">
        {/* Left — title and value proposition */}
        <div className="relative z-10 animate-reveal-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="washi-tape washi-tape-peach inline-block rotate-[-1.5deg] px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
              Psicóloga clínica · Psicanalista
            </span>
          </div>

          <h1 className="font-serif text-[2.7rem] font-medium leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl md:text-[3.8rem] animate-reveal-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            Um espaço para
            <br />
            poder falar
            <span className="relative mx-1 inline-block">
              <span className="relative z-10">sem precisar</span>
              <DoodleUnderline className="absolute -bottom-2 left-0 h-3.5 w-full text-terracotta/90" />
            </span>
            <br />
            ter tudo organizado.
          </h1>

          <p className="mt-7 max-w-lg text-[1.1rem] leading-[1.7] text-ink/80 animate-reveal-up" style={{ opacity: 0, animationDelay: '0.3s' }}>
            Psicoterapia online orientada pela Psicanálise para adolescentes e adultos. Um lugar seguro para acolher o que você sente.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5 animate-reveal-up" style={{ opacity: 0, animationDelay: '0.4s' }}>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-[15px] font-medium tracking-wide text-paper shadow-paper transition-all duration-300 hover:-translate-y-1 hover:bg-ink/90 hover:shadow-[0_8px_20px_rgba(50,23,33,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Agendar atendimento
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
            <span className="font-hand text-[1.65rem] text-rose/90">
              psicoterapia online
            </span>
          </div>

          <DoodleStar className="absolute -left-5 -top-5 hidden h-7 w-7 rotate-12 text-terracotta/80 md:block animate-reveal-up" style={{ opacity: 0, animationDelay: '0.8s' }} />
        </div>

        {/* Right — polaroid photo collage */}
        <div className="relative z-10 mx-auto w-full max-w-sm md:max-w-md animate-reveal-up" style={{ opacity: 0, animationDelay: '0.3s' }}>
          <DoodleSquiggle className="absolute -left-8 top-10 hidden h-6 w-24 text-terracotta/80 md:block" />

          <div className="relative rotate-2 rounded-sm bg-card p-3.5 pb-7 shadow-polaroid transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
            <span className="washi-tape washi-tape-rose pointer-events-none absolute -left-4 -top-3.5 z-20 h-8 w-24 -rotate-12" />
            <span className="washi-tape washi-tape-peach pointer-events-none absolute -right-3 bottom-12 z-20 h-8 w-20 rotate-6" />

            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-muted">
              <Image
                src="/images/flora-portrait.png"
                alt="Retrato de Giovanna Flora, psicóloga clínica"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="relative mb-1 mt-5">
              <p className="text-center font-hand text-[1.35rem] tracking-wide text-ink/80">
                oi, eu sou a Flora :)
              </p>
              <DoodleCircle
                preserveAspectRatio="none"
                className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-52 -translate-x-1/2 -translate-y-1/2 text-terracotta/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Intro copy — fundo com gradiente pêssego quente e sutis listras */}
      <div className="relative border-t border-border/40">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(180deg, #FCE9DE 0%, #FFF5EE 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-40 bg-stripes-hero" />
        </div>

        <div className="relative z-10 mx-auto max-w-[42rem] px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-20 animate-reveal-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
          <div className="space-y-7 text-[1.15rem] leading-[1.8] text-ink/85">
            <p>
              Sou Flora, psicóloga, e acredito na importância de um espaço em que você
              possa falar sobre aquilo que nem sempre encontra lugar no cotidiano.
            </p>
            <p className="relative">
              Na clínica,{' '}
              <span className="highlight-mark font-medium text-ink">
                não parto da ideia de que existe uma resposta pronta
              </span>{' '}
              para aquilo que você sente. A partir da escuta, podemos olhar para sua
              história, seus vínculos, seus desejos, seus conflitos e para aquilo que
              insiste em aparecer.
            </p>
            <p>
              Meu trabalho é orientado pela Psicanálise, compreendendo cada pessoa a
              partir da sua singularidade e da história que construiu até aqui.
            </p>
            <p className="font-hand text-[1.75rem] text-terracotta/90 mt-4">
              Atendo adolescentes e adultos, em psicoterapia online.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
