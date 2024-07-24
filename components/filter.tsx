import { Product } from "@/types";
import Size from "./ui/size";


interface FilterProps{
  products: Product[];
}

const Filter:React.FC<FilterProps> = ({
  products
}) => {
  const filterSizes = (products: Product[]): string[] => {
    const sizesSet = new Set<string>();
  
    products.forEach(product => {
      product.stock.forEach(size => {
        if (size.amount > 0) {
          sizesSet.add(size.value);
        }
      });
    });
  
    return Array.from(sizesSet);
  };

  const availableSizes = filterSizes(products);
  
  return(
    <div>
      <h1 className="text-4xl font-semibold mb-8">Filters</h1>
      <div className="flex flex-col gap-3">
        <h1>Sizes</h1>
        <div className="flex flex-wrap gap-3">
          {availableSizes?.map(size => (
            <Size key={size} size={size}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filter;