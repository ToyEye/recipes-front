import NavBar from "./NavBar";

const MobileMenu = ({ isOpen = false }: { isOpen: boolean }) => {
  return <NavBar isOpenMenu={isOpen} location="modalMenu" />;
};

export default MobileMenu;
