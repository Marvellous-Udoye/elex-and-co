import { useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { PageCursor } from '../components/page-cursor'
import { PageMetadata } from '../components/page-metadata'
import { SiteNav } from '../components/site-nav'
import { placeholderMetadata } from '../data/storefront-data'
import { useStorefrontAnimations } from '../hooks/use-storefront-animations'

export function PlaceholderPage() {
  const { slug = 'page' } = useParams()
  const pageRef = useRef<HTMLDivElement | null>(null)
  const metadata = useMemo(() => placeholderMetadata(slug), [slug])

  useStorefrontAnimations(pageRef)

  return (
    <>
      <PageMetadata metadata={metadata} />
      <div ref={pageRef}>
        <SiteNav />
        <PageCursor />
        <main className="min-h-screen bg-[var(--page-bg)] px-[1.5vw] pt-[17vw] max-[500px]:px-[4vw] max-[500px]:pt-[45%]">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[32px] border border-black/10 bg-white/50 p-10 text-[var(--brand-color)] backdrop-blur-sm max-[600px]:p-6">
            <p className="font-brand text-sm uppercase tracking-[0.2em]">
              Page Scaffold
            </p>
            <h1 className="font-brand text-5xl uppercase tracking-[-0.08em] max-[600px]:text-3xl">
              {slug.replace(/-/g, ' ')}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-black/70">
              This route is ready for future implementation. The routed app shell,
              metadata pattern, shared navigation, Tailwind structure, and animation
              infrastructure are now in place for additional pages.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
