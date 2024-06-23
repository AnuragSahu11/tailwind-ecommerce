import { useSelector } from "react-redux";

export const ProductListingPage = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);

  return <div>Product Listing page</div>;
};
