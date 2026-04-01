import { Link } from 'react-router-dom'
import { SiteContainer } from '../components/ui/site-container'

export function StorySection() {
  return (
    <section className="page-3 min-h-[80vh] w-full">
      <SiteContainer className="flex w-full justify-around px-[3vw] py-[9vw] max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:gap-[60px]">
        <div className="left h-full w-[60%] max-[1000px]:flex max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:justify-center">
          <h1 className="text-[4vw] font-extrabold tracking-[-3px] max-[1000px]:text-center max-[1000px]:text-[6vw] max-[1000px]:font-black max-[1000px]:tracking-[0]">
            WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES AGAIN.
          </h1>
        </div>

        <div className="right flex h-full w-[25%] flex-col gap-[40px] max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-center">
          <p>
            Everything we do is designed to rebuild self worth and independence,
            in order to break free from the cycle of disadvantage.
          </p>
          <p>
            With every purchase you make with us, you&apos;re helping to change
            the course of someone&apos;s life; you&apos;re walking alongside
            vulnerable women as they find their way home again.
          </p>
          <Link id="shop-link" to="/collections" className="text-[12px]">
            SHOP TO SUPPORT
          </Link>
        </div>
      </SiteContainer>
    </section>
  )
}
