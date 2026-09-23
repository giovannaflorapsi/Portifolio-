'use client'

import { useState } from 'react'
import { DoodleStar } from '@/components/doodles'

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Escuta', href: '#escuta' },
  { label: 'O Encontro', href: '#encontro' },
  { label: 'Temas', href: '#temas' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          <DoodleStar className="h-5 w-5 text-terracotta transition-transform group-hover:rotate-45" />
          <span className="font-serif text-xl font-semibold tracking-tight text-ink md:text-2xl">
            Giovanna Flora
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-ink/80 transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] rounded p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 rounded bg-ink" />
          <span className="h-0.5 w-6 rounded bg-ink" />
          <span className="h-0.5 w-4 rounded bg-ink" />
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-paper px-5 py-3 md:hidden"
          aria-label="Navegação principal móvel"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-serif text-lg text-ink/90 transition-colors hover:text-terracotta"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
