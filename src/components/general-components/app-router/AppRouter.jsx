import { Route, Routes } from "react-router-dom";
import { CartPage } from "../../../views/cart-page/CartPage";
import { ProductListingPage } from "../../../views/product-listing-page/ProductListingPage";
import { AuthenticatedPage } from "../authenticated-page/AuthenticatedPage";
import { NavbarLayout } from "../layouts/navbar-layout/NavbarLayout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthenticatedPage />}>
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<ProductListingPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
