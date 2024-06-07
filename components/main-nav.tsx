"use client"

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

interface MainNavProps{
  data: Category[];
}



const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  // const pathname = usePathname()

  // const routes = data.map((route) => ({
  //   href: `/category/${route.id}`,
  //   label: route.name,
  //   active: pathname === `/category/${route.id}`
  // }))

  return(
    <NavigationMenu>
      <NavigationMenuList>
        {data.map((category) => (
          <div key={category.id}>
            {category.subCategories.length > 0 ? (
              <NavigationMenuItem>
              <NavigationMenuTrigger key={category.id}>
                {category.name}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {category.subCategories.map((subCategory, index) => (
                  
                  
                    <li key={index} className="row-span-3">
                    <NavigationMenuLink key={index}>{subCategory.name}</NavigationMenuLink>
                    </li>
                  
                  
                ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            ) : (
              <p>{category.name}</p>
            )}
            
          </div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MainNav;