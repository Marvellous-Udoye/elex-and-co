import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const purchaseCards = [
  {
    id: 'elem-1',
    image:
      'https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format',
    label: 'HOME',
    background: '#C1AAA3',
    items: [
      {
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/f43af4d1c96e6232fcc4743fc383f08aac0d3658-2900x2900.png/Tea-Towel-Two-Good-Co.png?w=640&h=640&auto=format',
        name: 'Too good x emily imeson tea towel',
      },
      {
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/cb56cd5aa6722fc293f654013276b73581c4e25e-1408x1407.png/Two%20Kisses%20Candle%20Two%20Good%20Co.png?rect=1,0,1407,1407&w=640&h=640&auto=format',
        name: 'two kisses candle',
      },
    ],
  },
  {
    id: 'elem-2',
    image:
      'https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format',
    label: 'PANTRY',
    background: '#F2DCCB',
    items: [
      {
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/c9ad30643e765931dfad0ddcefcfdaf88abc8789-1408x1407.png/Two%20Good%20Granola%20Two%20Good%20Co.png?rect=1,0,1407,1407&w=320&h=320&auto=format',
        name: 'Too good granola',
      },
      {
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/8c6345e689f2b4db8ef6103a2741513a306bec35-2545x2431.png/Spicy-Tomato-Jam-Two-Good-Co.png?rect=2,0,2542,2431&w=320&h=306&auto=format',
        name: 'spicy tomato jam',
      },
    ],
  },
  {
    id: 'elem-3',
    image:
      'https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format',
    label: 'BATH',
    background: '#FFFFFF',
    items: [
      {
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format',
        name: 'clean & nourish hand wash',
      },
      {
        image:
          'https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=1024&h=1024&auto=format',
        name: 'nourish and soothe hand lotion',
      },
    ],
  },
]

const productRows = [
  [
    {
      id: 'lefty',
      imageId: 'page-4-img1',
      image:
        'https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format',
      name: 'The Love + CARE PACK',
      price: '$50',
    },
    {
      id: 'righty',
      imageId: 'page-4-img2',
      image:
        'https://cdn.sanity.io/images/w8f1ak3c/production/7a2007de38624a0b2935416bf51a4584889aa232-5000x5000.png/Website%20Products%20(12).png?w=1024&h=1024&auto=format',
      name: 'TWO GOOD TOTE BAG',
      price: '$40',
    },
  ],
  [
    {
      id: 'lefty2',
      imageId: 'page-5-img1',
      image:
        'https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=1024&h=1024&auto=format',
      name: 'The Love + CARE PACK',
      price: '$38',
    },
    {
      id: 'righty2',
      imageId: 'page-5-img2',
      image:
        'https://cdn.sanity.io/images/w8f1ak3c/production/02240d01db2e8bdc5c630e9832ff7e0c7614f733-1876x1876.png/Cookbook-Two-Recipes-For-Resilience-Two-Good-Co.png?w=1024&h=1024&auto=format',
      name: 'TWO GOOD TOTE BAG',
      price: '$45',
    },
  ],
]

function renderAnimatedText(text: string) {
  return text.split('').map((char, index) => (
    <span
      className={`hero-char${char === ' ' ? ' hero-space' : ''}`}
      key={`${text}-${index}`}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

function App() {
  const appRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scope = appRef.current
    if (!scope) {
      return
    }

    const ctx = gsap.context(() => {
      const videoContainer = scope.querySelector('.video_container')
      const playBtn = scope.querySelector('#play')
      const cursor = scope.querySelector('#cursor')
      const menu = scope.querySelector('#menu-expand')
      const close = scope.querySelector('#close')
      const nav = scope.querySelector('#nav')
      const navHeadings = scope.querySelectorAll('.nav-part-3 h1')
      const navPart1 = scope.querySelector('.nav-part-1 .wordmark')
      const navPart2 = scope.querySelectorAll('.nav-part-2 h4')
      const navHiddenItems = scope.querySelectorAll('.nav-part-2 .none')
      const showPlay = () => {
        if (playBtn) {
          gsap.to(playBtn, { scale: 1, opacity: 1 })
        }
      }

      const hidePlay = () => {
        if (playBtn) {
          gsap.to(playBtn, { scale: 0, opacity: 0 })
        }
      }

      const movePlay = (event: Event) => {
        const mouseEvent = event as MouseEvent
        if (playBtn) {
          gsap.to(playBtn, {
            left: mouseEvent.x - 50,
            top: mouseEvent.y - 70,
          })
        }
      }

      const moveCursor = (event: Event) => {
        const mouseEvent = event as MouseEvent
        if (cursor) {
          gsap.to(cursor, {
            top: mouseEvent.y,
            left: mouseEvent.x,
          })
        }
      }

      const menuOpen = () => {
        if (!menu || !close || !nav || !navPart1) {
          return
        }

        ;(menu as HTMLElement).style.display = 'none'
        ;(close as HTMLElement).style.display = 'block'

        gsap.to(nav, { height: '100vh' })
        gsap.from(navHeadings, {
          x: 240,
          stagger: 0.1,
          opacity: 0,
        })
        gsap.to(nav, { backgroundColor: '#000' })
        gsap.to(navPart1, { color: '#fff' })
        gsap.to(navPart2, { color: '#fff' })
      }

      const menuClose = () => {
        if (!menu || !close || !nav || !navPart1) {
          return
        }

        ;(menu as HTMLElement).style.display = 'block'
        ;(close as HTMLElement).style.display = 'none'

        gsap.to(nav, { height: '108px' })
        gsap.to(nav, { backgroundColor: 'transparent' })
        gsap.to(navPart1, { color: '#000' })
        gsap.to(navPart2, { color: '#000' })
      }

      const attachCursorHover = (selector: string, color = '#cdba9a') => {
        const element = scope.querySelector(selector)
        if (!element || !cursor) {
          return () => {}
        }

        const onEnter = () => {
          ;(element as HTMLElement).style.cursor = 'pointer'
          ;(cursor as HTMLElement).style.backgroundColor = color
          gsap.to(cursor, {
            transform: 'translate(-50%, -50%) scale(1)',
          })
        }

        const onLeave = () => {
          ;(cursor as HTMLElement).style.backgroundColor = color
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
      menu?.addEventListener('click', menuOpen)
      close?.addEventListener('click', menuClose)

      const detachHoverHandlers = [
        attachCursorHover('#lefty'),
        attachCursorHover('#lefty2', 'rgb(100, 100, 100)'),
        attachCursorHover('#righty', '#80a3bb'),
        attachCursorHover('#righty2', 'rgb(183, 240, 183)'),
      ]

      const heroGroups = scope.querySelectorAll('[data-hero-group]')

      heroGroups.forEach((group) => {
        const chars = group.querySelectorAll('.hero-char')
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

      if (navPart1 && nav) {
        gsap.to(navPart1, {
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

      if (navHiddenItems.length && nav) {
        gsap.to(navHiddenItems, {
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
        menu?.removeEventListener('click', menuOpen)
        close?.removeEventListener('click', menuClose)
        detachHoverHandlers.forEach((detach) => detach())
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }, scope)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef}>
      <nav id="nav">
        <div className="container">
          <div className="nav-part-1">
            <div className="wordmark" aria-label="ELEX and CO">
              <span>ELEX</span>
              <span>&amp; CO</span>
            </div>
          </div>
          <div className="nav-part-2">
            <h4 className="none">COLLECTIONS</h4>
            <h4 className="none">ABOUT</h4>
            <h4 className="none">CONTACT</h4>
            <h4 id="menu-expand">
              <i className="ri-menu-3-line" />
            </h4>
            <h4 id="close">X</h4>
            <h4 id="shop">
              <i className="ri-store-3-fill" />
            </h4>
          </div>
        </div>
        <div id="sub-container" className="container">
          <div className="nav-part-4" />
          <div className="nav-part-5" />
          <div className="nav-part-3">
            <h1>cart</h1>
            <h1>
              COLLECTIONS
              <i className="ri-arrow-right-up-line" />
            </h1>
            <h1>women</h1>
            <h1>men</h1>
            <h1>about</h1>
            <h1>contact</h1>
            <h1>register</h1>
            <h1>sign in</h1>
          </div>
        </div>
      </nav>

      <div id="cursor" />

      <main>
        <div className="page-1">
          <div className="container">
            <div id="head">
              <h1 id="course" data-hero-group>
                {renderAnimatedText('Elegance.')}
              </h1>
              <h1 id="course2">
                <span id="the" data-hero-group>
                  {renderAnimatedText('Luxury.')}
                </span>
                <span id="course-head" data-hero-group>
                  {renderAnimatedText('Expression.')}
                </span>
              </h1>
            </div>
            <div className="video_container">
              <div id="play">PLAY</div>
              <video id="vid" autoPlay loop muted playsInline src="/video.mp4"/>
            </div>
          </div>
        </div>

        <div className="line">
          <div className="container">
            <div id="headings">
              <p>BUY GOOD</p>
              <p>DO GOOD</p>
            </div>
            <hr />
          </div>
        </div>

        <div className="page-2">
          {purchaseCards.map((card) => (
            <div className="elem" key={card.id}>
              <img src={card.image} alt="" />
              <div
                id={card.id}
                className="purchase"
                style={{ backgroundColor: card.background }}
              >
                <div className="nav">
                  <div className="circle" />
                  <p>SHOP</p>
                  <p className="home">{card.label}</p>
                  <i className="ri-arrow-right-s-line" />
                </div>
                <div className="sub-purchase">
                  {card.items.map((item) => (
                    <div
                      className={
                        item === card.items[0] ? 'left-purchase' : 'right-purchase'
                      }
                      key={item.name}
                    >
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="page-3">
          <div className="container">
            <div className="left">
              <h1>WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES AGAIN.</h1>
            </div>
            <div className="right">
              <p>
                Everything we do is designed to rebuild self worth and independence,
                in order to break free from the cycle of disadvantage.
              </p>
              <p>
                With every purchase you make with us, you&apos;re helping to change
                the course of someone&apos;s life; you&apos;re walking alongside
                vulnerable women as they find their way home again.
              </p>
              <a href="#" id="shop-link">
                SHOP TO SUPPORT
              </a>
            </div>
          </div>
        </div>

        {productRows.map((row, rowIndex) => (
          <div className="page-4" key={`row-${rowIndex}`}>
            <div className="container">
              {row.map((product, index) => (
                <div
                  id={product.id}
                  className={index === 0 ? 'left' : 'right'}
                  key={product.id}
                >
                  <img id={product.imageId} src={product.image} alt={product.name} />
                  <div id="details">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="line2">
          <div className="container">
            <div id="headings">
              <p>WORDS OF GOODNESS</p>
              <p>MESSAGE OF LOVE SUPPORT</p>
            </div>
            <hr />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
