import { Sale } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sale`

const getSale = async (): Promise<Sale> => {
  const res = await fetch(URL)
  return res.json()
}

export default getSale;