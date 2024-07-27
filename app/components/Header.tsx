import { navItems } from "@/data";
import Navbar from "./ui/Navbar";

const Header = () => {
  return (
  <div className="overflow-hidden">
    <Navbar navItems={navItems} />
  </div>
  )
};

export default Header;
