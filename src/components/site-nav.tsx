import { Link } from 'react-router-dom'
import { overlayNavItems, primaryNavItems } from '../data/storefront-data'
import { SiteContainer } from './ui/site-container'

export function SiteNav() {
  return (
    <nav
      id="nav"
      className="fixed inset-x-0 top-0 z-10 h-[108px] overflow-hidden"
    >
      <SiteContainer className="flex items-start justify-between px-[2vw] pt-[1.5vw] max-[500px]:p-[4vw]">
        <div className="nav-part-1 flex flex-col gap-[15px] max-[1000px]:gap-[30px]">
          <Link
            to="/"
            className="wordmark flex flex-col font-brand text-[2.25rem] font-bold uppercase leading-[0.9] tracking-[-0.08em] text-[var(--brand-color)] max-[500px]:text-[1.5rem]"
          >
            <span>ELEX</span>
            <span>&amp; CO</span>
          </Link>
        </div>

        <div className="nav-part-2 mt-4 flex items-start gap-[70px] max-[600px]:gap-[24px] max-[500px]:mt-2 max-[500px]:items-center max-[500px]:gap-[18px]">
          {primaryNavItems.map((item) => (
            <h4
              className="none cursor-pointer uppercase font-bold font-brand text-[var(--brand-color)] max-[1000px]:hidden"
              key={item.to}
            >
              <Link to={item.to}>{item.label}</Link>
            </h4>
          ))}

          <h4 id="menu-expand" className="cursor-pointer text-[20px] text-[var(--brand-color)]">
            <button
              type="button"
              aria-label="Open menu"
              className="border-0 bg-transparent cursor-pointer font-bold font-brand p-0 text-inherit"
            >
              <i className="ri-menu-3-line" />
            </button>
          </h4>

          <h4 id="close" className="hidden cursor-pointer text-[var(--brand-color)]">
            <button
              type="button"
              aria-label="Close menu"
              className="border-0 font-brand cursor-pointer bg-transparent p-0 text-inherit"
            >
              X
            </button>
          </h4>

          <h4 id="shop" className="cursor-pointer text-[20px] text-[var(--brand-color)]">
            <Link to="/collections" aria-label="Go to collections">
              <i className="ri-store-3-fill" />
            </Link>
          </h4>
        </div>
      </SiteContainer>

      <SiteContainer
        id="sub-container"
        className="flex justify-end pt-0 leading-[50px]"
      >
        <div className="nav-part-4" />
        <div className="nav-part-5" />
        <div className="nav-part-3 pt-0 leading-[50px] max-[1000px]:leading-[40px]">
          {overlayNavItems.map((item, index) => (
            <h1
              className="cursor-pointer text-end text-[50px] font-extrabold uppercase leading-[50px] text-white max-[1000px]:leading-[40px]"
              key={item.to}
            >
              <Link
                to={item.to}
                className="inline-flex items-center gap-2"
              >
                {item.label}
                {index === 0 ? <i className="ri-arrow-right-up-line" /> : null}
              </Link>
            </h1>
          ))}
        </div>
      </SiteContainer>
    </nav>
  )
}
