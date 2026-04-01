import { featuredProductRows } from '../data/storefront-data'
import { SiteContainer } from '../components/ui/site-container'

export function FeaturedProductsSection() {
  return (
    <>
      {featuredProductRows.map((row, rowIndex) => (
        <section className="page-4 min-h-screen w-full" key={`row-${rowIndex}`}>
          <SiteContainer className="flex h-full w-full gap-[2vw] max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center">
            {row.map((product) => (
              <div
                id={product.id}
                className="relative z-[2] flex h-full w-1/2 flex-col items-center justify-center max-[1000px]:w-full"
                key={product.id}
              >
                <img
                  id={product.imageId}
                  src={product.image}
                  alt={product.name}
                  className="w-[80%] max-[1000px]:w-full max-[600px]:max-w-[400px]"
                />
                <div id="details" className="flex flex-col items-center justify-center">
                  <p className="text-base">{product.name}</p>
                  <p className="text-sm">{product.price}</p>
                </div>
              </div>
            ))}
          </SiteContainer>
        </section>
      ))}
    </>
  )
}
