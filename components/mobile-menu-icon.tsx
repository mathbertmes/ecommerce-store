"use client";
import useMobileMenu from "@/hooks/use-mobile-menu";
import { Menu } from "lucide-react";
import { MouseEventHandler } from "react";
import IconButton from "./ui/icon-button";

const MobileMenuIcon = () => {
  const menuMobile = useMobileMenu();

  const onOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    menuMobile.onOpen();
  };
  return (
    <div className='md:hidden'>
      <IconButton
        onClick={onOpen}
        icon={<Menu size={20} className='text-gray-600' />}
      />
    </div>
  );
};

export default MobileMenuIcon;
