import { Outlet } from "react-router-dom";
import { Navbar } from "../../navbar/Navbar";

export const NavbarLayout = () => {
  return (
    <div className="pt-5">
      <Navbar />
      <Outlet />
    </div>
  );
};
