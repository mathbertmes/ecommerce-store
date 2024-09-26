"use client"

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "../ui/icon-button";
import { X } from "lucide-react";

interface MenuMobileModalProps{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}


const ModalMenuMobile: React.FC<MenuMobileModalProps> = ({
  open,
  onClose,
  children
}) => {
  return(
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50 "/>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="w-[70vw] h-[100vh]">
            <Transition.Child 
              as={Fragment} 
              enter="ease-out duration-300" 
              enterFrom="opacity-0 scale-95" 
              enterTo="opacity-100 scale-100" 
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full">
                <div className="relative flex w-full h-[100vh]  overflow-hidden bg-white px-4 pb-8 pt-14
                ">
                  <div className="absolute right-4 top-4">
                    <IconButton onClick={onClose} icon={<X size={15}/>}/>
                  </div>
                  <div className="w-full">
                  {children}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>  
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalMenuMobile;