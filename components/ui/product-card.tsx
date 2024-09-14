"use client"

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import Size from "./size";

interface ProductCard{
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const cart = useCart()
  const previewModal = usePreviewModal()
  const router = useRouter()
  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    previewModal.onOpen(data)
  }

  //NOW YOU HAVE TO SELECT YOUR SIZE FIRST, SO ADD TO CART STRAIGHT FROM PRODUCT CARD IS IMPOSSIBLE
  // const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
  //   event.stopPropagation()

  //   cart.addItem(data)
  // }

  return(
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl  p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data?.images?.[0]?.url}
          fill
          alt="product image"
          className="object-fill rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600"/>}
            />
            {/* <IconButton 
              icon={<ShoppingCart size={20} className="text-gray-600"/>}
            /> */}
          </div>
        </div>
      </div>
      {/*description*/}
      <div>
        <p className="font-semi-bold text-lg">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>
      <div className="flex items-center w-full flex-wrap gap-2">
        {data?.stock?.map((size) => (
          <Size key={size.id} size={size.value} />
        ))}
      </div>
      {/* PRICE */}
      <div className="flex items-center gap-3">
        {data?.discount ? (
          <>
          <Currency className="line-through" value={data?.price} />
        
            <Currency className="text-red-500" value={data?.discountPrice} />
            </>
        ) : (
          <Currency value={data?.price} />
        )}
        
      </div>
    </div>
  )
}

export default ProductCard;