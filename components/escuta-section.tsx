import Image from 'next/image'
import { DoodleStar, DoodleArrowCurve } from '@/components/doodles'
import { ScrollReveal } from '@/components/scroll-reveal'

export function EscutaSection() {
  return (
    <section id="escuta" className="relative overflow-hidden bg-transparent py-16 md:py-24">
      {/* Camada de Background e Papel de Parede Listrado (Nível Base z-0) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #FFF4EE 0%, #FDEBF2 50%, #FFF4EE 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-65 bg-stripes-escuta" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <ScrollReveal delay={100} className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="washi-tape washi-tape-rose inline-block rotate-1 px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink">
              A escuta psicanalítica
            </span>
          </div>

          <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-ink text-balance md:text-[2.8rem]">
            Nem tudo precisa ser resolvido.
            <br />
            Algumas coisas precisam
            <br />
            primeiro ser escutadas.
          </h2>
          <DoodleStar className="absolute -left-5 top-14 hidden h-6 w-6 text-terracotta/80 md:block" />

          <div className="mt-8 space-y-6 text-[1.1rem] leading-[1.75] text-ink/80">
            <p>
              A psicanálise parte da ideia de que nem sempre sabemos, de forma
              consciente, por que sentimos, desejamos ou repetimos determinadas
              situações.
            </p>
            <p>
              Na terapia, a fala ganha espaço para que essas questões possam aparecer
              e ser pensadas.
            </p>
            <p>
              Não se trata de receber conselhos ou encontrar respostas prontas, mas de
              construir, através da palavra e da escuta, novas possibilidades de
              compreender a própria história.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up" className="relative z-10 mx-auto w-full max-w-sm">
          <DoodleArrowCurve className="absolute -left-12 -top-10 hidden h-14 w-32 -scale-x-100 text-rose/80 md:block" />

          <div className="group relative -rotate-2 rounded-sm bg-card p-3 pb-5 shadow-polaroid transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
            {/* Washi tapes decorativas com extremidades rasgadas */}
            <span className="washi-tape washi-tape-rose pointer-events-none absolute -right-3 -top-3.5 z-20 h-7 w-20 rotate-12" />
            <span className="washi-tape washi-tape-white pointer-events-none absolute -left-3 bottom-6 z-20 h-7 w-16 -rotate-6" />

            <div className="relative aspect-square w-full overflow-hidden rounded-[2px] bg-muted">
              <Image
                src="/Portifolio-/images/collage-hands.png"
                alt="Mãos segurando uma xícara junto à janela"
                fill
                sizes="(max-width: 768px) 90vw, 35vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <p className="mt-4 text-center font-hand text-[1.25rem] text-ink/80 tracking-wide">
              a fala encontra seu tempo
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
