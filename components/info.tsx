"use client"

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import Size from "./ui/size";
import { useState } from "react";
import { cn } from "@/lib/utils";


interface InfoProps{
  data: Product;
}

const Info: React.FC<InfoProps> = ({
  data
}) => {
  const cart = useCart()
  const [sizeSelected, setSizeSelected] = useState("")

  const onAddToCart = () => {
    //implement size logic
    if(sizeSelected){
      let size = data.stock.find(stock => stock.id === sizeSelected)!
      cart.addItem({...data, sizeSelected: size})
      console.log(cart.items)
    }
  }

  //ADD ITEM TO CART WILL BE RELATED WITH SIZESTOCK => ID ATTRIBUTE
  return(
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price}/>
        </p>
      </div>
    	<hr className="my-4"/>
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Sizes:</h3>
          <div>
          <div className="flex items-center gap-2">
            {/* <select value={sizeSelected} onChange={(e) => setSizeSelected(e.target.value)} className="w-[100px] border cursor-pointer rounded-lg p-2"  name="" id="">
            {data?.stock?.map((size) => (
              <option 
              key={size.id} className={cn("p-2 cursor-pointer", size.amount === 2 && "bg-gray-400 decoration-dashed")}
              disabled={size.amount === 2} 
              value={size.id}>
                {size.value}
              </option>
            ))}
            </select> */}
            {data?.stock?.map((size) => (
              <div 
              key={size.id} 
              onClick={() => setSizeSelected(size.id)}
              className={cn(`w-2 h-2 rounded-full border flex justify-center items-center text-xs p-4 cursor-pointer`, sizeSelected === size.id && "border-black font-semibold")}>
              <p>{size.value}</p>
            </div>
            ))}
      </div>
          </div>
        </div>

      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}

export default Info;