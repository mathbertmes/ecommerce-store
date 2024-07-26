import qs from "query-string"
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query{
  categoryId?: string;
  subcategoryId?: string;
  brandId?: string;
  discount?: boolean;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
  sizeValue?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      subcategoryId: query.subcategoryId,
      sizeValue: query.sizeValue,
      brandId: query.brandId,
      discount: query.discount,
      isFeatured: query.isFeatured
    }
  })

  const res = await fetch(url)

  return res.json()
}

export default getProducts;