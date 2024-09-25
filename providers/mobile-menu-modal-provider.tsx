"use client"

import MenuMobile from "@/components/menu-mobile/menu-mobile";
import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";


const MobileMenuModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted){
    return null;
  }

  return(
    <>
      <MenuMobile />
    </>
  )
}

export default MobileMenuModalProvider;