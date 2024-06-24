import { Outlet } from "react-router-dom";
import { Navbar } from "../../navbar/Navbar";

export const NavbarLayout = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Outlet />
    </div>
  );
};
