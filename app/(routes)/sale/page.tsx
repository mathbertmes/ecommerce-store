import getBrand from "@/actions/get-brand";
import getProducts from "@/actions/get-products";
import getSale from "@/actions/get-sale";
import getSubCategory from "@/actions/get-subcategory";
import Filter from "@/components/filter";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { Separator } from "@/components/ui/separator";

export const revalidate = 0;

interface SalePageProps{
  searchParams: {
    colorId: string;
    sizeId: string;
  }
}

const SalePage: React.FC<SalePageProps> = async ({
  searchParams
}) => {

  const products = await getProducts({
    discount: true,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })

  const sale = await getSale()
  return(
    <div className="bg-white">
      <Container>
        <div className="px-8 py-4 mb-4">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{sale.name}</h2>
        <Separator />
        </div>
        
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* <MobileFilters sizes={sizes} colors={colors}/> */}
            <div className="hidden lg:block ">
              <Filter products={products}/>
              {/* <Filter 
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
              />
              <Filter 
                valueKey="colorId"
                name="Colors"
                data={colors}
              /> */}
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard 
                    key={item.id}    
                    data={item}             
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SalePage;