"use client"
import { Billboard as BillboardType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BillboardProps{
  data: string;
  saleBanner?: boolean
}

const Billboard: React.FC<BillboardProps> = ({
  data,
  saleBanner
}) => {

  const router = useRouter()

  const handleClickSaleBanner = () => {
    if(saleBanner) {
      router.push(`/sale`)
    }
    
  }
  return(
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div 
        className="rounded-xl relative w-full md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <Image onClick={handleClickSaleBanner} src={data} width={500} height={900} objectFit="contain" alt="Banner image">

        </Image>
        {/* <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Billboard;