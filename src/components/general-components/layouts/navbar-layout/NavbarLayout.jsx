import { Outlet } from "react-router-dom";

export const NavbarLayout = () => {
  return (
    <div>
      <div>Navbar</div>
      <Outlet />
    </div>
  );
};
