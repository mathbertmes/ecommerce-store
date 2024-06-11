import { SubCategory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/subcategories`

const getSubCategory = async (id: string): Promise<SubCategory> => {
  const res = await fetch(`${URL}/${id}`)
  return res.json()
}

export default getSubCategory;