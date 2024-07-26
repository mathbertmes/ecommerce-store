import { cn } from "@/lib/utils"
import { SizeStock } from "@/types"


interface SizeProps{
  size: string;
}

const Size : React.FC<SizeProps> = ({
  size
}) => {
  return(
    <div key={size} className={cn(`w-2 h-2 rounded-full border flex justify-center items-center text-xs p-4 cursor-pointer`)}>
      <p>{size}</p>
    </div>
  )
}

export default Size;