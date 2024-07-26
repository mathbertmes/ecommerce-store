import getBrand from "@/actions/get-brand";
import getProducts from "@/actions/get-products";
import getSubCategory from "@/actions/get-subcategory";
import Filter from "@/components/filter";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { Separator } from "@/components/ui/separator";

export const revalidate = 0;

interface BrandPageProps{
  params: {
    brandId: string;
  },
  searchParams: {
    colorId: string;
    sizeId: string;
    sizeValue: string;
  }
}

const BrandPage: React.FC<BrandPageProps> = async ({
  params,
  searchParams
}) => {

  const products = await getProducts({
    brandId: params.brandId,
    sizeValue: searchParams.sizeValue,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })

  const productsForFilter = await getProducts({
    brandId: params.brandId,
  })

  const brand = await getBrand(params.brandId)
  return(
    <div className="bg-white">
      <Container>
        <div className="px-8 py-4 mb-4">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{brand.name}</h2>
        <Separator />
        </div>
        
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* <MobileFilters sizes={sizes} colors={colors}/> */}
            <div className="hidden lg:block ">
            <Filter valueKey="sizeValue" products={productsForFilter}/>
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

export default BrandPage;