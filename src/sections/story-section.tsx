import { Link } from 'react-router-dom'
import { SiteContainer } from '../components/ui/site-container'

export function StorySection() {
  return (
    <section className="page-3 min-h-[80vh] w-full">
      <SiteContainer className="flex w-full justify-around px-[3vw] py-[9vw] max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:gap-[60px]">
        <div className="left h-full w-[60%] max-[1000px]:flex max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:justify-center">
          <h1 className="font-editorial text-[4vw] font-bold tracking-[-0.04em] max-[1000px]:text-center max-[1000px]:text-[6vw] max-[1000px]:tracking-[0]">
            THE RIGHT JEWELRY DOESN&apos;T JUST COMPLETE A LOOK, IT DEFINES IT
          </h1>
        </div>

        <div className="right flex h-full w-[25%] flex-col gap-[40px] max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-center">
          <p>
            {/* Every piece at ilhhamstores is chosen to reflect quiet luxury,
            refined craftsmanship, and the confidence of timeless design. */}
            Every piece in the store is chosen to reflect quiet luxury,
            refined craftsmanship, and the confidence of timeless design.
          </p>
          <p>
            From elevated essentials to statement finishes, our collections are
            made to help you express your style with elegance, trust, and
            effortless sophistication.
          </p>
          <Link id="shop-link" to="/collections" className="text-base underline">
            SHOP FROM COLLECTION
          </Link>
        </div>
      </SiteContainer>
    </section>
  )
}
