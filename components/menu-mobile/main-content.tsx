
import { Brand, Category, Sale } from "@/types";
import Link, { LinkProps } from "next/link";
import { Fragment, ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import useMobileMenu from "@/hooks/use-mobile-menu";

interface MenuMobileMainContentProps {
  categories: Category[];
  categoriesOnSale: Category[];
  sale: Sale;
  brands: Brand[];
}

const MainContent: React.FC<MenuMobileMainContentProps> = ({
  categories,
  categoriesOnSale,
  sale,
  brands,
}) => {
  const mobileMenuHook = useMobileMenu()
  return (
    <div className='w-full'>
      <Accordion type='single' collapsible className='w-full'>
        {sale.active && (
          <AccordionItem value='item-1' className="border-red-500 font-medium text-xl">
            <AccordionTrigger className='text-red-500'>
              {sale.name}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-7">
                <li className=" text-lg text-gray-600">
                  <Link onClick={mobileMenuHook.onClose} key='viewAll' href={`/sale`} >
                    View All
                  </Link>
                </li>
                {categoriesOnSale.map((categoryOnSale) => (
                  <Fragment key={categoryOnSale.id}>
                    <li className=" text-lg text-gray-600" key={categoryOnSale.id}>
                      <Link
                      onClick={mobileMenuHook.onClose}
                        key={categoryOnSale.id}
                        href={`/sale/${categoryOnSale.id}`}
                      >
                        {categoryOnSale.name}
                      </Link>
                    </li>
                    {categoryOnSale.subCategories.map((subCategoryOnSale) => (
                      <li key={subCategoryOnSale.id}>
                        <Link
                        onClick={mobileMenuHook.onClose}
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
            </AccordionContent>
          </AccordionItem>
        )}

        {categories.map((category) => (
          <Fragment key={category.id}>
            {category.subCategories.length > 0 ? (
              <AccordionItem value={category.id}>
              <AccordionTrigger className="font-medium text-xl text-black">{category.name}</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-7">
                  <li className=" text-lg text-gray-600">
                  <Link
                  onClick={mobileMenuHook.onClose}
                          key={category.id}
                          href={`/category/${category.id}`}
                        >
                          View All
                        </Link>
                  </li>
                {category.subCategories.map((subCategory) => (
                      <li key={subCategory.id} className=" text-lg text-gray-600">
                        <Link
                        onClick={mobileMenuHook.onClose}
                          key={subCategory.id}
                          href={`/category/${category.id}/${subCategory.id}`}
                        >
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            ) : 
            (
            <Link
            onClick={mobileMenuHook.onClose}
                className='text-sm font-medium p-6'
                href={`/category/${category.id}`}
              >
                {category.name}
              </Link>
          )}
          </Fragment>
        ))}

        {brands.length > 0 && (
          <AccordionItem value='brands_section'>
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
          <ul>
              {brands.map((brand) => (
                <li key={brand.id} >
                  <Link onClick={mobileMenuHook.onClose} key={brand.id} href={`/brands/${brand.id}`}>
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        )}
       
      </Accordion>
    </div>
  );
};

export default MainContent;
