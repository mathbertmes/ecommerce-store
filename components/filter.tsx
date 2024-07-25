"use client"

import { Product } from "@/types";
import Size from "./ui/size";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string"
import { useState } from "react";


interface FilterProps{
  products: Product[];
  valueKey: string;
}

interface QueryParams {
  [key: string]: string | string[] | null;
}

const Filter:React.FC<FilterProps> = ({
  products,
  valueKey
}) => {
  const [selected, setSelected] = useState([])


  const searchParams = useSearchParams()
  const router = useRouter()

  

  const selectedValue = searchParams.get(valueKey)
  console.log(selectedValue)

  const handleFilter= (id: string) => {
    const current = qs.parse(searchParams.toString())

    const query = {
      ...current,
      [valueKey]: id
    }

    if(current[valueKey] === id){
      query[valueKey] = null
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true })

    router.push(url)

  }

  const handleFilters = (id: string, valueKey: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const current: QueryParams = qs.parse(searchParams.toString()) as QueryParams;
  
    let query: QueryParams = {
      ...current
    };
  
    if (Array.isArray(current[valueKey])) {
      if ((current[valueKey] as string[]).includes(id)) {
        query[valueKey] = (current[valueKey] as string[]).filter((value: string) => value !== id);
      } else {
        query[valueKey] = [...(current[valueKey] as string[]), id];
      }
    } else {
      if (current[valueKey] === id) {
        query[valueKey] = null;
      } else {
        query[valueKey] = current[valueKey] ? [current[valueKey] as string, id] : [id];
      }
    }
  
    const url = qs.stringifyUrl({
      url: window.location.pathname, // Use pathname instead of href to avoid including the base URL
      query
    }, { skipNull: true });
  
    router.push(url);
  };

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
          {availableSizes?.map((size: string) => (
            <div onClick={() => handleFilters(size, valueKey)} key={size} className={`w-2 h-2 rounded-full border flex justify-center items-center text-xs p-4 cursor-pointer`}>
            <p>{size}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filter;