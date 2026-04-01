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

    videoContainer?.addEventListener('mouseenter', showPlay)
    videoContainer?.addEventListener('mouseleave', hidePlay)
    videoContainer?.addEventListener('mousemove', movePlay)
    document.addEventListener('mousemove', moveCursor)
    menu?.addEventListener('click', openMenu)
    close?.addEventListener('click', closeMenu)

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

    return () => {
      videoContainer?.removeEventListener('mouseenter', showPlay)
      videoContainer?.removeEventListener('mouseleave', hidePlay)
      videoContainer?.removeEventListener('mousemove', movePlay)
      document.removeEventListener('mousemove', moveCursor)
      menu?.removeEventListener('click', openMenu)
      close?.removeEventListener('click', closeMenu)
      detachHoverHandlers.forEach((detach) => detach())
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
