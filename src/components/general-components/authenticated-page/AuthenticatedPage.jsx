import { Outlet } from "react-router-dom";

export const AuthenticatedPage = () => {
  const isUserAuthenticated = true;

  return isUserAuthenticated ? <Outlet /> : <></>;
};
