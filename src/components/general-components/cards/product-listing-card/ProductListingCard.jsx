import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../../store/cart/cartSlice";

export const ProductListingCard = ({ productData }) => {
  // * REDUX
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  // * VARIABLES
  const { id, title, description, price, images } = productData;
  const cartCrrProductIndex = cart.findIndex(
    ({ id: crrProductId }) => crrProductId === id
  );
  const isProductAlreadyInCart = cartCrrProductIndex >= 0;
  const cartProduct = cart[cartCrrProductIndex];
  const quantity = cartProduct?.quantity ?? 0;

  // * FUNCTIONS
  const onAddToCartClick = () => {
    isProductAlreadyInCart
      ? dispatch(increaseQuantity(productData))
      : dispatch(addToCart(productData));
  };

  const onDecreaseQuantityClick = () => {
    dispatch(decreaseQuantity(productData));
  };

  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={images[0]} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {title}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            ${price}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        {isProductAlreadyInCart ? (
          <div className="flex justify-evenly">
            <button
              onClick={onAddToCartClick}
              className="block  select-none rounded-lg bg-green-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Increase
            </button>
            <button
              disabled
              className="block   select-none rounded-lg bg-slate-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              {quantity}
            </button>
            <button
              onClick={onDecreaseQuantityClick}
              className="block  select-none rounded-lg bg-rose-100	 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Decrease
            </button>
          </div>
        ) : (
          <button
            onClick={onAddToCartClick}
            className="block w-full select-none rounded-lg bg-slate-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
