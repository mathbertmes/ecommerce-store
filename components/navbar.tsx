import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import { Menu } from "lucide-react";
import getCategoriesOnSale from "@/actions/get-categories-on-sale";
import getSale from "@/actions/get-sale";
import getBrands from "@/actions/get-brands";
import MobileMenuIcon from "./mobile-menu-icon";


export const revalidate =0;

const Navbar = async () => {
  const categories = await getCategories()
  const categoriesOnSale = await getCategoriesOnSale()
  const sale = await getSale()
  const brands = await getBrands()
  return(
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <MobileMenuIcon />
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <div className="hidden md:block ">
            <MainNav data={categories} categoriesOnSale={categoriesOnSale} sale={sale} brands={brands}/>  
          </div>                        
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar;