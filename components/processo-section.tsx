import { DoodleArrowDown, DoodleStar } from '@/components/doodles'
import { ScrollReveal } from '@/components/scroll-reveal'

const STEPS = [
  {
    num: '01',
    title: 'FALAR',
    body: 'Tudo começa pela possibilidade de colocar em palavras aquilo que tem atravessado você, sem censura ou julgamento.',
    tape: 'washi-tape-peach',
  },
  {
    num: '02',
    title: 'ESCUTAR',
    body: 'A partir da escuta, podemos perceber sentidos, repetições, conflitos e questões que antes pareciam desconexas.',
    tape: 'washi-tape-rose',
  },
  {
    num: '03',
    title: 'ELABORAR',
    body: 'O processo permite olhar para a própria história por outros ângulos, abrindo caminhos para novas escolhas e possibilidades.',
    tape: 'washi-tape-white',
  },
]

export function ProcessoSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-24">
      {/* Camada de Background e Papel de Parede Listrado (Nível Base z-0) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #FBF0F4 0%, #F5D2DF 50%, #FBECF3 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-70 bg-stripes-processo" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8">
        <ScrollReveal delay={100} className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="washi-tape washi-tape-rose inline-block rotate-[-1deg] px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
              Um processo, não uma fórmula
            </span>
          </div>
          <p className="mx-auto max-w-md font-hand text-[1.65rem] text-terracotta">
            três movimentos que se atravessam
          </p>
        </ScrollReveal>

        <ol className="flex flex-col items-stretch gap-6 md:flex-row md:items-start md:gap-3">
          {STEPS.map((step, i) => (
            <li key={step.num} className="flex flex-1 flex-col items-center md:contents">
              <ScrollReveal delay={200 + i * 150} direction="up" className="relative flex-1 w-full rounded-sm border border-border/70 bg-card p-8 text-center shadow-polaroid transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] md:w-auto">
                {/* Washi tape na borda superior da ficha */}
                <span
                  className={`washi-tape ${step.tape} pointer-events-none absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-1`}
                />
                <span className="font-serif text-[1.1rem] font-semibold text-terracotta/90">
                  {step.num}
                </span>
                <h3 className="mt-1 font-serif text-[1.65rem] font-semibold tracking-wider text-ink">
                  {step.title}
                </h3>
                <p className="mt-5 text-[1.05rem] leading-[1.75] text-ink/80">
                  {step.body}
                </p>
              </ScrollReveal>

              {i < STEPS.length - 1 && (
                <ScrollReveal delay={250 + i * 150} direction="none" className="my-2 flex shrink-0 justify-center md:my-0 md:mt-16">
                  <DoodleArrowDown
                    className="h-14 w-10 text-rose/70 md:h-10 md:w-14 md:-rotate-90"
                    aria-hidden="true"
                  />
                </ScrollReveal>
              )}
            </li>
          ))}
        </ol>

        <ScrollReveal delay={500} direction="up" className="relative mx-auto mt-16 max-w-2xl rounded-sm border border-border/60 bg-card/90 p-8 text-center shadow-paper backdrop-blur-xs">
          <DoodleStar className="absolute -left-2 -top-4 h-6 w-6 text-terracotta/90 md:-left-4" />
          <DoodleStar className="absolute -bottom-3 -right-2 h-5 w-5 text-rose/90 md:-right-3" />
          <p className="font-serif text-[1.4rem] font-medium leading-[1.6] text-ink text-balance md:text-[1.65rem]">
            Cada processo acontece de uma maneira. Não existe um roteiro pronto para
            uma história que é só sua.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
