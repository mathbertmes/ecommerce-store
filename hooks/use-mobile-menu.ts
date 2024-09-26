import { Product } from "@/types";
import { create } from "zustand"

interface MobileMenuModal{
  isOpen : boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMobileMenu = create<MobileMenuModal>((set) => ({
  isOpen: false,
  onOpen : () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })

}))

export default useMobileMenu;