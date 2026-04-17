import { Link } from 'react-router-dom'
import { SiteContainer } from '../components/ui/site-container'

const socialLinks = [
  { label: 'YouTube', icon: 'ri-youtube-line', href: 'https://youtube.com' },
  { label: 'Instagram', icon: 'ri-instagram-line', href: 'https://instagram.com' },
  { label: 'TikTok', icon: 'ri-tiktok-line', href: 'https://tiktok.com' },
]

const footerColumns = [
  {
    title: 'Collections',
    items: ['Fine Jewelry', 'Signature Sets', 'New Arrivals'],
  },
  {
    title: 'Maison',
    // items: ['About ilhhamstores', 'Contact', 'Private Appointments'],
    items: ['About store', 'Contact', 'Private Appointments'],
  },
]

export function SiteFooter() {
  return (
    <footer className="footer-section bg-[var(--brand-color)] text-[#f4efe8] mt-6">
      <div className="relative pt-[10vh] xl:min-h-[110vh]">
        <div className="overflow-hidden">
          <h1 className="footer-title font-hero py-5 text-center text-[clamp(3rem,9vw,8rem)] uppercase leading-[0.95] tracking-[-0.05em] text-[#f4efe8]">
            {/* #ILHAMSTORES */}
            #STORE
          </h1>
        </div>

        <div className="footer-socials relative z-10 mt-5 flex items-center justify-center gap-5 md:mt-20">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="footer-social-btn flex h-14 w-14 items-center justify-center rounded-full border border-[#d9d9d9]/30 bg-white/5 text-xl text-[#f4efe8] transition-colors duration-300 hover:bg-white hover:text-[var(--brand-color)]"
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>

        <SiteContainer className="footer-content mt-10 flex flex-col justify-between gap-10 px-5 pb-8 font-brand text-sm font-medium text-[#f4efe8] md:mt-20 md:flex-row md:px-10 md:text-base">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
            {footerColumns.map((column) => (
              <div key={column.title} className="footer-column space-y-3">
                <p className="text-[0.95rem] uppercase tracking-[0.16em] text-white/70">
                  {column.title}
                </p>
                <div className="space-y-2 text-[0.95rem]">
                  {column.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-newsletter md:max-w-[34%]">
            <p className="max-w-[34rem] leading-relaxed text-[#f4efe8]/90">
              Open for private styling, bespoke consultations, and refined
              jewelry experiences designed to celebrate elegance with
              confidence.
            </p>
            <div className="mt-6 flex items-center justify-between gap-4 border-b border-[#d9d9d9] py-5">
              <input
                type="email"
                placeholder="Start a conversation"
                className="w-full bg-transparent text-[#f4efe8] placeholder:font-brand placeholder:text-[#f4efe8]/50 focus:outline-none"
              />
              <button
                type="button"
                aria-label="Submit email"
                className="footer-submit flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9d9]/40 text-lg transition-colors duration-300 hover:bg-white hover:text-[var(--brand-color)]"
              >
                <i className="ri-arrow-right-up-line" />
              </button>
            </div>
          </div>
        </SiteContainer>

        <SiteContainer className="copyright-box flex flex-col gap-5 px-5 pb-10 pt-6 text-sm text-[#f4efe8]/70 md:flex-row md:items-center md:justify-between md:px-10">
          {/* <p>Copyright © 2026 ilhhamstores. All Rights Reserved</p> */}
          <p>Copyright © 2026 store. All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </SiteContainer>
      </div>
    </footer>
  )
}
