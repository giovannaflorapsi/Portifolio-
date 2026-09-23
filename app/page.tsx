import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { EscutaSection } from '@/components/escuta-section'
import { EncontroSection } from '@/components/encontro-section'
import { ProcessoSection } from '@/components/processo-section'
import { TemasSection } from '@/components/temas-section'
import { DuvidasSection } from '@/components/duvidas-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { ContinuousFallingLeaves } from '@/components/continuous-falling-leaves'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        {/* Camada única, contínua e orgânica de folhas em queda por toda a landing page */}
        <ContinuousFallingLeaves />

        <HeroSection />
        <EscutaSection />
        <EncontroSection />
        <ProcessoSection />
        <TemasSection />
        <DuvidasSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
