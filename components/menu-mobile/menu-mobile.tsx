"use client"
import useMobileMenu from "@/hooks/use-mobile-menu";
import ModalMenuMobile from "./modal-menu-mobile";
import MainContent from "./main-content";
import { Brand, Category, Sale } from "@/types";
import Footer from "../footer";

interface MenuMobileMainContentProps {
  categories: Category[];
  categoriesOnSale: Category[];
  sale: Sale;
  brands: Brand[];
}

const MenuMobile: React.FC<MenuMobileMainContentProps> = ({
  categories,
  categoriesOnSale,
  sale,
  brands
}) => {
  const previewModal = useMobileMenu()

  return(
    <ModalMenuMobile
      open={previewModal.isOpen}
      onClose={previewModal.onClose}
    >
      <div>
        <MainContent categories={categories} categoriesOnSale={categoriesOnSale} sale={sale} brands={brands}/>
        <div className="absolute bottom-4">
          <Footer />
        </div>
      </div>
    </ModalMenuMobile>
  )
}

export default MenuMobile;