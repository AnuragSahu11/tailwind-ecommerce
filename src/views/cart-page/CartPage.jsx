import { SummaryCard } from "../../components/general-components/cards/summary-card/SummaryCard";
import { CartProductListing } from "../../components/pages/cart/cart-product-listing/CartProductListing";

export const CartPage = () => {
  return (
    <div className="sm:flex md:h-dvh pt-8">
      <CartProductListing />
      <SummaryCard />
    </div>
  );
};
