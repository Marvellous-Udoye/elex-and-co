import { purchaseCards } from '../data/storefront-data'
import { SiteContainer } from '../components/ui/site-container'
import { cn } from '../lib/cn'

export function CollectionsSection() {
  return (
    <>
      <div className="line py-[2vw] max-[500px]:pb-[10px] max-[500px]:pt-0">
        <SiteContainer>
          <div id="headings" className="flex justify-between">
            <p className="text-[12px]">BUY GOOD</p>
            <p className="text-[12px]">DO GOOD</p>
          </div>
          <hr />
        </SiteContainer>
      </div>

      <section className="page-2 flex min-h-screen w-full flex-wrap justify-around px-[1.5vw] max-[1000px]:h-full max-[1000px]:w-full max-[1000px]:flex-col max-[1000px]:gap-[10px] max-[500px]:px-[4vw]">
        {purchaseCards.map((card) => (
          <div
            className="elem relative h-full w-[32%] overflow-hidden max-[1000px]:h-[220vh] max-[1000px]:w-full max-[800px]:h-[160vh] max-[600px]:h-[120vh] max-[500px]:h-screen"
            key={card.id}
          >
            <img
              src={card.image}
              alt=""
              className="block h-full w-full object-cover"
            />

            <div
              id={card.id}
              className="purchase group absolute left-1/2 top-1/2 z-[2] h-14 min-h-14 w-[80%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-[height,border-radius,box-shadow,transform] duration-[450ms] ease-in-out hover:h-[min(300px,56%)] hover:cursor-pointer hover:rounded-[26px] max-[1000px]:relative max-[1000px]:top-[-50%] max-[1000px]:h-[50px] max-[1000px]:min-h-[50px] max-[1000px]:shadow-none max-[1000px]:hover:h-[50%] max-[500px]:hover:h-[45%]"
              style={{ backgroundColor: card.background }}
            >
              <div className="nav flex h-14 items-center justify-around px-[18px] max-[1000px]:mt-[18px] max-[1000px]:h-auto max-[1000px]:px-0">
                <div className="circle h-[6px] w-[6px] rounded-full bg-black" />
                <p className="text-[12px]">SHOP</p>
                <p className="home text-[12px] font-semibold">{card.label}</p>
                <i className="ri-arrow-right-s-line" />
              </div>

              <div className="sub-purchase mt-2 flex translate-y-4 justify-around gap-[18px] px-[18px] pb-[18px] opacity-0 transition-[opacity,transform] duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 max-[1000px]:mt-[15px] max-[1000px]:translate-y-0 max-[1000px]:gap-0 max-[1000px]:px-0 max-[1000px]:opacity-100">
                {card.items.map((item) => (
                  <div
                    className={cn(
                      'w-[40%] text-center',
                      item.position === 'left' ? 'left-purchase' : 'right-purchase',
                    )}
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="block h-auto w-full object-contain"
                    />
                    <p className="mt-[14px] text-[12px] uppercase">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
