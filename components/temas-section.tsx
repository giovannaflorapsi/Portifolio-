import { DoodleSquiggle } from '@/components/doodles'
import { ScrollReveal } from '@/components/scroll-reveal'

const TEMAS = [
  {
    title: 'Ansiedade',
    body: 'Quando a mente não desacelera, o corpo sente e até os momentos de descanso parecem difíceis.',
    tape: 'washi-tape-peach',
    bg: 'bg-card',
    rotate: '-rotate-1',
  },
  {
    title: 'Autoconhecimento',
    body: 'Para além de “se conhecer melhor”: perceber seus desejos, repetições, limites e aquilo que você tem escolhido para si.',
    tape: 'washi-tape-rose',
    bg: 'bg-[#FAF0F3]',
    rotate: 'rotate-0.5',
  },
  {
    title: 'Relacionamentos',
    body: 'Os encontros, desencontros, expectativas, conflitos e formas de se relacionar com quem está ao seu redor.',
    tape: 'washi-tape-white',
    bg: 'bg-[#FDF3ED]',
    rotate: 'rotate-1',
  },
  {
    title: 'Identidade e gênero',
    body: 'Um espaço para pensar sobre quem você é, como se reconhece e as questões que atravessam sua experiência de gênero, sem julgamentos ou respostas prontas.',
    tape: 'washi-tape-rose',
    bg: 'bg-card',
    rotate: '-rotate-0.5',
  },
  {
    title: 'Sexualidade',
    body: 'Desejos, dúvidas, descobertas, conflitos e tudo aquilo que pode aparecer quando falamos sobre nossa própria sexualidade.',
    tape: 'washi-tape-peach',
    bg: 'bg-[#FDF3ED]',
    rotate: 'rotate-1',
  },
  {
    title: 'Autoestima e imagem de si',
    body: 'A maneira como você se percebe, se cobra e se relaciona com a própria história.',
    tape: 'washi-tape-white',
    bg: 'bg-[#FAF0F3]',
    rotate: '-rotate-1',
  },
  {
    title: 'Luto e perdas',
    body: 'Não apenas pelas pessoas que partem, mas também por relações, versões de nós mesmos e futuros que não aconteceram.',
    tape: 'washi-tape-peach',
    bg: 'bg-card',
    rotate: 'rotate-0.5',
  },
  {
    title: 'Questões familiares',
    body: 'Os lugares que ocupamos na família, expectativas, vínculos, conflitos e histórias que continuam reverberando.',
    tape: 'washi-tape-rose',
    bg: 'bg-[#FAF0F3]',
    rotate: '-rotate-0.5',
  },
  {
    title: 'Mudanças e transições',
    body: 'Quando uma fase termina, outra começa e você ainda não sabe muito bem quem está se tornando.',
    tape: 'washi-tape-white',
    bg: 'bg-[#FDF3ED]',
    rotate: 'rotate-1',
  },
  {
    title: 'Cotidiano',
    body: 'Porque nem sempre existe um grande acontecimento. Às vezes, é simplesmente a sensação de não estar conseguindo dar conta de ser quem você precisa ser.',
    tape: 'washi-tape-rose',
    bg: 'bg-card',
    rotate: '-rotate-1',
  },
]

export function TemasSection() {
  return (
    <section id="temas" className="relative overflow-hidden border-b border-border/50 bg-transparent py-16 md:py-24">
      {/* Camada de Background e Papel de Parede Listrado Exclusivo de Temas (Nível Base z-0) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #FFF4EE 0%, #FDE9DE 50%, #FAF0EB 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-65 bg-stripes-temas" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal delay={100} className="mb-14 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="washi-tape washi-tape-rose inline-block rotate-[-1deg] px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
              Temas que podem chegar à terapia
            </span>
            <DoodleSquiggle className="h-4 w-12 text-terracotta/80" />
          </div>
          <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-ink text-balance md:text-[2.8rem]">
            O que pode aparecer quando você começa a falar
          </h2>
        </ScrollReveal>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEMAS.map((tema, i) => (
            <ScrollReveal
              key={tema.title}
              delay={150 + (i % 3) * 100}
              direction="up"
            >
              <li
                className={`${tema.bg} ${tema.rotate} relative h-full rounded-sm border border-border/50 p-7 shadow-paper transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-polaroid group`}
              >
                {/* Washi tape no topo central de cada post-it */}
                <span
                  className={`washi-tape ${tema.tape} pointer-events-none absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-1deg]`}
                />
                <h3 className="font-serif text-[1.4rem] font-semibold text-ink group-hover:text-terracotta transition-colors duration-300">
                  {tema.title}
                </h3>
                <p className="mt-3 text-[1.05rem] leading-[1.65] text-ink/80">
                  {tema.body}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
