import { Product, ProductSelected } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface CartStore{
  items: ProductSelected[];
  addItem: (data: ProductSelected) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductSelected) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id)

      if(existingItem){
        return(toast("Item already on cart"))
      }

      set({ items: [...get().items, data] })
      toast.success("Item added to cart")
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] })
      toast.success("Item removed from the cart")
    },
    removeAll: () => set({ items: [] })
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
  })
)


export default useCart;