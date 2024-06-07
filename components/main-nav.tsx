"use client"

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NextLink from 'next/link';

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
  const Link = ({ href, ...props }) => {
    const pathname = usePathname();
    const isActive = href === pathname;
  
    return (
      <NavigationMenuLink asChild active={isActive}>
        <NextLink href={href} className="NavigationMenuLink" {...props} />
      </NavigationMenuLink>
    );
  };

  return(
    <NavigationMenu>
      <NavigationMenuList>
        {data.map((category) => (
          <div key={category.id}>
            {category.subCategories.length > 0 ? (
              <NavigationMenuItem>
              <NavigationMenuTrigger key={category.id}>
              <Link href={`/category/${category.id}`}>{category.name}</Link>
              </NavigationMenuTrigger>

              <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                {category.subCategories.map((subCategory, index) => (
                  
                  
                    <li key={index} className="row-span-3">
                    <Link key={index} href={`/category/${category.id}/${subCategory.id}`}>{subCategory.name}</Link>
                    </li>
                  
                  
                ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            ) : (
              <Link href={`/category/${category.id}`}>{category.name}</Link>
            )}
            
          </div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MainNav;