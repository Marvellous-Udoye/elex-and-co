import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function createStorefrontAnimations(scope: HTMLElement) {
  return gsap.context(() => {
    const videoContainer = scope.querySelector<HTMLElement>('.video_container')
    const playButton = scope.querySelector<HTMLElement>('#play')
    const cursor = scope.querySelector<HTMLElement>('#cursor')
    const menu = scope.querySelector<HTMLElement>('#menu-expand')
    const close = scope.querySelector<HTMLElement>('#close')
    const nav = scope.querySelector<HTMLElement>('#nav')
    const navHeadings = scope.querySelectorAll<HTMLElement>('.nav-part-3 h1')
    const wordmark = scope.querySelector<HTMLElement>('.wordmark')
    const navItems = scope.querySelectorAll<HTMLElement>('.nav-part-2 h4')
    const hiddenNavItems = scope.querySelectorAll<HTMLElement>('.nav-part-2 .none')
    const overlayNavLinks = scope.querySelectorAll<HTMLElement>('.overlay-nav-link')

    const showPlay = () => {
      if (!playButton) return
      gsap.to(playButton, { scale: 1, opacity: 1 })
    }

    const hidePlay = () => {
      if (!playButton) return
      gsap.to(playButton, { scale: 0, opacity: 0 })
    }

    const movePlay = (event: Event) => {
      if (!playButton) return
      const details = event as MouseEvent
      gsap.to(playButton, {
        left: details.x - 50,
        top: details.y - 70,
      })
    }

    const moveCursor = (event: MouseEvent) => {
      if (!cursor) return
      gsap.to(cursor, {
        top: event.y,
        left: event.x,
      })
    }

    const openMenu = () => {
      if (!menu || !close || !nav || !wordmark) return

      menu.style.display = 'none'
      close.style.display = 'block'

      gsap.to(nav, { height: '100vh' })
      gsap.from(navHeadings, {
        x: 240,
        stagger: 0.1,
        opacity: 0,
      })
      gsap.to(nav, { backgroundColor: '#000' })
      gsap.to(wordmark, { color: '#fff' })
      gsap.to(navItems, { color: '#fff' })
    }

    const closeMenu = () => {
      if (!menu || !close || !nav || !wordmark) return

      menu.style.display = 'block'
      close.style.display = 'none'

      gsap.to(nav, { height: '108px' })
      gsap.to(nav, { backgroundColor: 'transparent' })
      gsap.to(wordmark, { color: '#000' })
      gsap.to(navItems, { color: '#000' })
    }

    const attachCursorHover = (selector: string, color = '#cdba9a') => {
      const element = scope.querySelector<HTMLElement>(selector)
      if (!element || !cursor) return () => {}

      const onEnter = () => {
        element.style.cursor = 'pointer'
        cursor.style.backgroundColor = color
        gsap.to(cursor, {
          transform: 'translate(-50%, -50%) scale(1)',
        })
      }

      const onLeave = () => {
        cursor.style.backgroundColor = color
        gsap.to(cursor, {
          transform: 'translate(-50%, -50%) scale(0)',
        })
      }

      element.addEventListener('mouseenter', onEnter)
      element.addEventListener('mouseleave', onLeave)

      return () => {
        element.removeEventListener('mouseenter', onEnter)
        element.removeEventListener('mouseleave', onLeave)
      }
    }

    const detachOverlayNavHover = Array.from(overlayNavLinks).map((link) => {
      const label = link.querySelector<HTMLElement>('.overlay-nav-label')
      const arrow = link.querySelector<HTMLElement>('.overlay-nav-arrow')
      if (!label || !arrow) return () => {}

      gsap.set(arrow, {
        width: 0,
        opacity: 0,
      })

      const onEnter = () => {
        gsap.to(label, {
          x: -14,
          duration: 0.28,
          ease: 'power3.out',
          overwrite: 'auto',
        })
        gsap.to(arrow, {
          width: '1.35em',
          opacity: 1,
          duration: 0.28,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      }

      const onLeave = () => {
        gsap.to(label, {
          x: 0,
          duration: 0.24,
          ease: 'power3.out',
          overwrite: 'auto',
        })
        gsap.to(arrow, {
          width: 0,
          opacity: 0,
          duration: 0.24,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      }

      link.addEventListener('mouseenter', onEnter)
      link.addEventListener('mouseleave', onLeave)

      return () => {
        link.removeEventListener('mouseenter', onEnter)
        link.removeEventListener('mouseleave', onLeave)
      }
    })

    const handleOverlayNavClick = () => {
      closeMenu()
    }

    videoContainer?.addEventListener('mouseenter', showPlay)
    videoContainer?.addEventListener('mouseleave', hidePlay)
    videoContainer?.addEventListener('mousemove', movePlay)
    document.addEventListener('mousemove', moveCursor)
    menu?.addEventListener('click', openMenu)
    close?.addEventListener('click', closeMenu)
    overlayNavLinks.forEach((link) => {
      link.addEventListener('click', handleOverlayNavClick)
    })

    const detachHoverHandlers = [
      attachCursorHover('#lefty'),
      attachCursorHover('#lefty2', 'rgb(100, 100, 100)'),
      attachCursorHover('#righty', '#80a3bb'),
      attachCursorHover('#righty2', 'rgb(183, 240, 183)'),
    ]

    scope.querySelectorAll<HTMLElement>('[data-hero-group]').forEach((group) => {
      const chars = group.querySelectorAll<HTMLElement>('.hero-char')
      if (!chars.length) return

      gsap.from(chars, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.04,
        force3D: false,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: group,
          start: 'top 90%',
          once: true,
        },
      })
    })

    if (wordmark && nav) {
      gsap.to(wordmark, {
        yPercent: -140,
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: nav,
          start: 'top top',
          end: '+=120',
          scrub: 2,
        },
      })
    }

    if (hiddenNavItems.length && nav) {
      gsap.to(hiddenNavItems, {
        yPercent: -220,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: nav,
          start: 'top top',
          end: '+=120',
          scrub: 2,
        },
      })
    }

    const lines = scope.querySelectorAll<HTMLElement>('.line, .line2')
    lines.forEach((line) => {
      const headings = line.querySelectorAll<HTMLElement>('#headings p')
      const rule = line.querySelector<HTMLElement>('hr')

      if (headings.length) {
        gsap.from(headings, {
          y: 18,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: line,
            start: 'top 92%',
            once: true,
          },
        })
      }

      if (rule) {
        gsap.from(rule, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: line,
            start: 'top 92%',
            once: true,
          },
        })
      }
    })

    const collectionCards = scope.querySelectorAll<HTMLElement>('.page-2 .elem')
    collectionCards.forEach((card, index) => {
      const image = card.querySelector<HTMLElement>('img')
      const purchase = card.querySelector<HTMLElement>('.purchase')
      const navBar = card.querySelector<HTMLElement>('.purchase .nav')
      const items = card.querySelectorAll<HTMLElement>('.sub-purchase > div')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
          once: true,
        },
      })

      tl.from(card, {
        y: 90,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      })

      if (image) {
        tl.from(
          image,
          {
            scale: 1.08,
            duration: 1.2,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          0,
        )

        gsap.to(image, {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      }

      if (purchase) {
        tl.from(
          purchase,
          {
            y: 42,
            scale: 0.96,
            opacity: 0,
            duration: 0.82,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          0.18 + index * 0.04,
        )
      }

      if (navBar) {
        tl.from(
          navBar.children,
          {
            y: 12,
            opacity: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
          0.5,
        )
      }

      if (items.length) {
        tl.from(
          items,
          {
            y: 22,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          0.58,
        )
      }
    })

    const storySection = scope.querySelector<HTMLElement>('.page-3')
    if (storySection) {
      const storyHeading = storySection.querySelector<HTMLElement>('.left h1')
      const storyContent = storySection.querySelectorAll<HTMLElement>('.right > *')

      if (storyHeading) {
        gsap.from(storyHeading, {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: storySection,
            start: 'top 72%',
            once: true,
          },
        })
      }

      if (storyContent.length) {
        gsap.from(storyContent, {
          y: 34,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: storySection,
            start: 'top 66%',
            once: true,
          },
        })
      }
    }

    const productGroups = scope.querySelectorAll<HTMLElement>(
      '.page-4 [id^="lefty"], .page-4 [id^="righty"]',
    )
    productGroups.forEach((group, index) => {
      const image = group.querySelector<HTMLElement>('img')
      const details = group.querySelector<HTMLElement>('#details')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: group,
          start: 'top 84%',
          once: true,
        },
      })

      tl.from(group, {
        y: 90,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        delay: index % 2 === 0 ? 0 : 0.06,
      })

      if (image) {
        tl.from(
          image,
          {
            scale: 0.9,
            rotate: index % 2 === 0 ? -1.5 : 1.5,
            duration: 1,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          0,
        )

        gsap.to(image, {
          yPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: group,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        })
      }

      if (details) {
        tl.from(
          details.children,
          {
            y: 22,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
          0.34,
        )
      }
    })

    const footerSection = scope.querySelector<HTMLElement>('.footer-section')
    if (footerSection) {
      const footerTitle = footerSection.querySelector<HTMLElement>('.footer-title')
      const footerSocials = footerSection.querySelectorAll<HTMLElement>(
        '.footer-social-btn',
      )
      const footerColumns = footerSection.querySelectorAll<HTMLElement>(
        '.footer-column',
      )
      const footerNewsletter = footerSection.querySelector<HTMLElement>(
        '.footer-newsletter',
      )
      const footerCopyright = footerSection.querySelector<HTMLElement>(
        '.copyright-box',
      )

      const footerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerSection,
          start: 'top 80%',
          once: true,
        },
      })

      if (footerTitle) {
        footerTimeline.from(footerTitle, {
          yPercent: 110,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
          clearProps: 'transform,opacity',
        })
      }

      if (footerSocials.length) {
        footerTimeline.from(
          footerSocials,
          {
            y: 36,
            scale: 0.9,
            opacity: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            clearProps: 'transform,opacity',
          },
          '-=0.5',
        )
      }

      if (footerColumns.length) {
        footerTimeline.from(
          footerColumns,
          {
            y: 44,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          '-=0.35',
        )
      }

      if (footerNewsletter) {
        footerTimeline.from(
          footerNewsletter,
          {
            y: 44,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          '-=0.55',
        )
      }

      if (footerCopyright) {
        footerTimeline.from(
          footerCopyright.children,
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
          '-=0.2',
        )
      }
    }

      return () => {
      videoContainer?.removeEventListener('mouseenter', showPlay)
      videoContainer?.removeEventListener('mouseleave', hidePlay)
      videoContainer?.removeEventListener('mousemove', movePlay)
      document.removeEventListener('mousemove', moveCursor)
        menu?.removeEventListener('click', openMenu)
        close?.removeEventListener('click', closeMenu)
        overlayNavLinks.forEach((link) => {
          link.removeEventListener('click', handleOverlayNavClick)
        })
        detachHoverHandlers.forEach((detach) => detach())
        detachOverlayNavHover.forEach((detach) => detach())
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
  }, scope)
}

export function useStorefrontAnimationScope(
  ref: RefObject<HTMLElement | null>,
) {
  return () => {
    const scope = ref.current
    if (!scope) return null
    return createStorefrontAnimations(scope)
  }
}
