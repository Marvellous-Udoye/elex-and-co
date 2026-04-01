import { useRef } from 'react'
import { PageCursor } from '../components/page-cursor'
import { PageMetadata } from '../components/page-metadata'
import { SiteNav } from '../components/site-nav'
import { homeMetadata } from '../data/storefront-data'
import { useStorefrontAnimations } from '../hooks/use-storefront-animations'
import { CollectionsSection } from '../sections/collections-section'
import { FeaturedProductsSection } from '../sections/featured-products-section'
import { HeroSection } from '../sections/hero-section'
import { SiteFooter } from '../sections/site-footer'
import { StorySection } from '../sections/story-section'

export function HomePage() {
  const pageRef = useRef<HTMLDivElement | null>(null)

  useStorefrontAnimations(pageRef)

  return (
    <>
      <PageMetadata metadata={homeMetadata} />
      <div ref={pageRef}>
        <SiteNav />
        <PageCursor />
        <main>
          <HeroSection />
          <CollectionsSection />
          <StorySection />
          <FeaturedProductsSection />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
