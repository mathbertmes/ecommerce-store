"use client";

import { cn } from "@/lib/utils";
import { Brand, Category, Sale, SubCategory } from "@/types";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

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
import { Fragment, ReactNode } from "react";

interface MainNavProps {
  data: Category[];
  categoriesOnSale: Category[];
  sale: Sale;
  brands: Brand[];
}

const MainNav: React.FC<MainNavProps> = ({
  data,
  categoriesOnSale,
  sale,
  brands,
}) => {
  // const pathname = usePathname()

  // const routes = data.map((route) => ({
  //   href: `/category/${route.id}`,
  //   label: route.name,
  //   active: pathname === `/category/${route.id}`
  // }))

  //CHANGE PARAMETERS TYPES

  interface CustomLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
  }
  
  //children render
  const Link: React.FC<CustomLinkProps > = ({href, className = '' ,children, ...props}) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
      <NavigationMenuLink asChild active={isActive}>
        <NextLink href={href} className={`NavigationMenuLink ${className}`} {...props}>
          {children}
        </NextLink>
      </NavigationMenuLink>
    );
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {sale.active ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger key={sale.id}>
              <Link className='text-red-600' href={`/sale`}>
                {sale.name}
              </Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]'>
                {categoriesOnSale.map((categoryOnSale) => (
                  <Fragment key={categoryOnSale.id}>
                    <li key={categoryOnSale.id} className='row-span-3'>
                      <Link
                        key={categoryOnSale.id}
                        href={`/sale/${categoryOnSale.id}`}
                      >
                        {categoryOnSale.name}
                      </Link>
                    </li>
                    {categoryOnSale.subCategories.map((subCategoryOnSale) => (
                      <li key={subCategoryOnSale.id} className='row-span-3'>
                        <Link
                          key={subCategoryOnSale.id}
                          href={`/sale/${categoryOnSale.id}/${subCategoryOnSale.id}`}
                        >
                          {subCategoryOnSale.name}
                        </Link>
                      </li>
                    ))}
                  </Fragment>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <div></div>
        )}

        {data.map((category) => (
          <div key={category.id}>
            {category.subCategories.length > 0 ? (
              <NavigationMenuItem>
                <NavigationMenuTrigger key={category.id}>
                  <Link href={`/category/${category.id}`}>{category.name}</Link>
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]'>
                    {category.subCategories.map((subCategory) => (
                      <li key={subCategory.id} className='row-span-3'>
                        <Link
                          key={subCategory.id}
                          href={`/category/${category.id}/${subCategory.id}`}
                        >
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <Link
                className='text-sm font-medium p-6'
                href={`/category/${category.id}`}
              >
                {category.name}
              </Link>
            )}
          </div>
        ))}
        {brands.length > 0 && 
          <NavigationMenuItem>
          <NavigationMenuTrigger key={sale.id}>
            <Link href={`/sale`}>Brands</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]'>
              {brands.map((brand) => (
                <li key={brand.id} className='row-span-3'>
                  <Link key={brand.id} href={`/brands/${brand.id}`}>
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        }
        
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
