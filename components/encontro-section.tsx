import { DoodleUnderline } from '@/components/doodles'
import { ScrollReveal } from '@/components/scroll-reveal'

const CARDS = [
  {
    tag: 'Online',
    body: 'As sessões acontecem por videochamada, em um ambiente reservado e sigiloso, de onde você estiver.',
    rotate: '-rotate-1',
    tape: 'washi-tape-rose',
  },
  {
    tag: 'Duração',
    body: 'Sessões de aproximadamente 50 minutos dedicadas exclusivamente à sua escuta.',
    rotate: 'rotate-1',
    tape: 'washi-tape-peach',
  },
  {
    tag: 'Frequência',
    body: 'A frequência dos encontros é construída em conjunto, de acordo com as necessidades do seu processo.',
    rotate: 'rotate-1.5',
    tape: 'washi-tape-white',
  },
  {
    tag: 'Acolhimento',
    body: 'Para que a psicoterapia faça parte da sua vida com leveza e sem barreiras geográficas.',
    rotate: '-rotate-1.5',
    tape: 'washi-tape-rose',
  },
]

export function EncontroSection() {
  return (
    <section id="encontro" className="relative overflow-hidden border-y border-border/50 bg-transparent py-16 md:py-24">
      {/* Camada de Background e Papel de Parede Listrado (Nível Base z-0) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(145deg, #FDE8DC 0%, #FFF7F2 50%, #FDECDD 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-65 bg-stripes-encontro" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal delay={100} className="mb-14 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="washi-tape washi-tape-peach inline-block -rotate-1 px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
              O encontro
            </span>
          </div>
          <h2 className="relative inline-block font-serif text-3xl font-medium leading-[1.1] tracking-tight text-ink md:text-[2.8rem]">
            Um espaço seu,
            <br />
            no seu tempo.
            <DoodleUnderline className="absolute -bottom-3 left-0 h-3.5 w-44 text-terracotta/80" />
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <ScrollReveal
              key={card.tag}
              delay={150 + i * 150}
              direction="up"
              className="flex"
            >
              <div
                className={`group relative flex-1 ${card.rotate} rounded-sm border border-border/60 bg-card p-6 shadow-paper transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
              >
                {/* Washi tape no topo de cada cartão */}
                <span
                  className={`washi-tape ${card.tape} pointer-events-none absolute -left-2 -top-3 h-6 w-16 -rotate-3`}
                />
                <span className="font-serif text-3xl font-bold text-terracotta/35 transition-colors group-hover:text-terracotta/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-serif text-[1.4rem] font-semibold text-ink">
                  {card.tag}
                </h3>
                <p className="mt-3 text-[1.05rem] leading-[1.65] text-ink/80">
                  {card.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
