import useMobileMenu from "@/hooks/use-mobile-menu";
import ModalMenuMobile from "./modal-menu-mobile";


const MenuMobile = () => {
  const previewModal = useMobileMenu()

  return(
    <ModalMenuMobile
      open={previewModal.isOpen}
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <h1>testt</h1>
      </div>
    </ModalMenuMobile>
  )
}

export default MenuMobile;