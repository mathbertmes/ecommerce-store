import { cn } from "@/lib/utils"
import { SizeStock } from "@/types"


interface SizeProps{
  size: SizeStock
}

const Size : React.FC<SizeProps> = ({
  size
}) => {
  return(
    <div className={cn(`w-2 h-2 rounded-full border flex justify-center items-center text-xs p-4`)}>
      <p>{size.value}</p>
    </div>
  )
}

export default Size;