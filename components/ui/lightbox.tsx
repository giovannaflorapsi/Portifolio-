'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { WashiTape } from '@/components/ui/washi-tape'

interface LightboxImage {
  src: string;
  alt?: string;
  caption?: string;
  tape?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  variant?: 'photo' | 'certificate';
}

export function Lightbox({ images, selectedIndex, setSelectedIndex, variant = 'certificate' }: LightboxProps) {
  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    if (selectedIndex === null) return
    if (direction === 'next') {
      setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0)
    } else {
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : images.length - 1)
    }
  }, [selectedIndex, images.length, setSelectedIndex])

  useEffect(() => {
    if (selectedIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') navigateLightbox('next')
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, navigateLightbox, setSelectedIndex])

  if (selectedIndex === null) return null

  const isPhoto = variant === 'photo'
  const current = images[selectedIndex]

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 px-4 animate-modal-fade"
      onClick={() => setSelectedIndex(null)}
      role="dialog"
      aria-modal="true"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes modalFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes modalZoomIn {
          0% { opacity: 0; transform: scale3d(0.95, 0.95, 1); }
          100% { opacity: 1; transform: scale3d(1, 1, 1); }
        }
        .animate-modal-fade {
          animation: modalFadeIn 0.15s ease-out forwards;
          will-change: opacity;
        }
        .animate-modal-zoom {
          animation: modalZoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
      `}} />

      <button 
        className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
        onClick={() => setSelectedIndex(null)}
        aria-label="Fechar"
      >
        <X className="h-6 w-6" strokeWidth={1.5} />
      </button>

      <button
        className="absolute left-2 z-50 rounded-full bg-white/5 p-3 text-white/60 transition-all hover:bg-white/20 hover:text-white md:left-8 md:p-4"
        onClick={(e) => {
          e.stopPropagation()
          navigateLightbox('prev')
        }}
        aria-label="Anterior"
      >
        <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
      </button>

      <div 
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center justify-center animate-modal-zoom"
        onClick={(e) => e.stopPropagation()}
      >
        {isPhoto ? (
          <div className="relative w-full overflow-hidden rounded-sm bg-card p-3 pb-8 md:p-5 md:pb-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] max-w-4xl">
             {current.tape && (
               <WashiTape
                 color={current.tape.replace('washi-tape-', '') as any}
                 className="pointer-events-none absolute z-20 h-8 w-24 left-1/2 -top-3 -translate-x-1/2 rotate-[-2deg]"
               />
             )}
            <div className="relative flex h-[60vh] md:h-[70vh] w-full items-center justify-center overflow-hidden bg-muted rounded-[2px]">
              <Image
                src={current.src}
                alt={current.alt || 'Imagem'}
                fill
                priority
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
            {current.caption && (
              <p className="mt-4 text-center font-hand text-[1.4rem] tracking-wide text-ink/80 md:mt-6 md:text-[1.8rem]">
                {current.caption}
              </p>
            )}
          </div>
        ) : (
          <div className="relative flex h-[75vh] md:h-[85vh] w-full items-center justify-center overflow-hidden bg-white/5 rounded-sm p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
            <Image
              src={current.src}
              alt={current.alt || 'Certificado'}
              fill
              priority
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
          </div>
        )}
      </div>

      <button
        className="absolute right-2 z-50 rounded-full bg-white/5 p-3 text-white/60 transition-all hover:bg-white/20 hover:text-white md:right-8 md:p-4"
        onClick={(e) => {
          e.stopPropagation()
          navigateLightbox('next')
        }}
        aria-label="Próximo"
      >
        <ChevronRight className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
      </button>
    </div>
  )
}