import { DoodleStar } from '@/components/doodles'

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden border-t border-border/50"
      style={{
        background: 'linear-gradient(180deg, #FDE9DE 0%, #F8D8E5 100%)',
      }}
    >
      {/* Sutil papel de parede listrado no rodapé */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35 bg-stripes-hero"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-12 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div className="flex items-center gap-2.5">
          <DoodleStar className="h-5 w-5 text-terracotta" />
          <span className="font-serif text-lg font-semibold text-ink">
            Giovanna Flora
          </span>
        </div>
        <p className="text-xs tracking-wide text-ink-muted">
          Psicóloga Clínica e Psicanalista · Psicoterapia online
        </p>
      </div>
    </footer>
  )
}
