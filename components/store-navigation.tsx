"use client";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { Category } from "@/types";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface MainNavProps {
  data: Category[];
}

const Example: React.FC<MainNavProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-white'>
      <header className='relative bg-white'>
        <p className='flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label='Top'
          className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        >
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center'>
              <button
                type='button'
                className='relative rounded-md bg-white p-2 text-gray-400 lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open menu</span>
                <Menu className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0'>
                <a href='#'>
                  <span className='sr-only'>Your Company</span>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                    alt=''
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
                <div className='flex h-full space-x-8'>
                  {data.map((category) => (
                    <div key={category.id}>
                      {category.subCategories ? (
                        <Popover key={category.id} className='flex'>
                          {({ open }) => (
                            <>
                              <div className='relative flex'>
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? "border-indigo-600 text-indigo-600"
                                      : "border-transparent text-gray-700 hover:text-gray-800",
                                    "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                  )}
                                >
                                  {category.name}
                                </Popover.Button>
                              </div>

                              <Transition
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute z-40 inset-x-0 top-full text-sm text-gray-500'>
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white shadow'
                                    aria-hidden='true'
                                  />

                                  <div className='relative bg-white'>
                                    <div className='mx-auto max-w-7xl px-8'>
                                      <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-16'>
                                        <div className='row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm'>
                                          <ul
                                            role='list'
                                            className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                          >
                                            {category.subCategories.map(
                                              (subcategory, index) => (
                                                <li
                                                  key={index}
                                                  className='flex'
                                                >
                                                  <a
                                                    href='/'
                                                    className='text-medium hover:text-gray-900'
                                                  >
                                                    {subcategory.name}
                                                  </a>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ) : (
                        <a key={category.id} href='#' className='text-red'>
                          {category.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </Popover.Group>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  <a
                    href='#'
                    className='text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    Sign in
                  </a>
                  <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                  <a
                    href='#'
                    className='text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    Create account
                  </a>
                </div>

                <div className='hidden lg:ml-8 lg:flex'>
                  <a
                    href='#'
                    className='flex items-center text-gray-700 hover:text-gray-800'
                  >
                    <img
                      src='https://tailwindui.com/img/flags/flag-canada.svg'
                      alt=''
                      className='block h-auto w-5 flex-shrink-0'
                    />
                    <span className='ml-3 block text-sm font-medium'>CAD</span>
                    <span className='sr-only'>, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className='flex lg:ml-6'>
                  <a href='#' className='p-2 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Search</span>
                    <Search className='h-6 w-6' aria-hidden='true' />
                  </a>
                </div>

                {/* Cart */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Example;
