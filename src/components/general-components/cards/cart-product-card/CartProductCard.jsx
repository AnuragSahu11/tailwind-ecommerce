import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../../../store/cart/cartSlice";

export const CartProductCard = ({ productData }) => {
  const {
    title,
    price,
    images,
    sku,
    brand,
    category,
    warrantyInformation,
    quantity,
  } = productData;

  // * REDUX
  const dispatch = useDispatch();

  // * FUNCTIONS
  const onAddToCartClick = () => {
    dispatch(increaseQuantity(productData));
  };

  const onDecreaseQuantityClick = () => {
    dispatch(decreaseQuantity(productData));
  };

  const onRemoveClick = () => {
    dispatch(removeFromCart(productData));
  };

  return (
    <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={images[0]}
          alt={title}
          className="h-full object-center object-cover md:block hidden"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{sku}</p>
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-black leading-none text-gray-800">
            {title}
          </p>
          <div className=" justify-evenly gap-1 hidden  md:flex">
            <button
              onClick={onAddToCartClick}
              className="block  select-none rounded-lg bg-slate-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              +
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
              className="block  select-none rounded-lg bg-slate-100	 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              -
            </button>
          </div>
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">{brand}</p>
        <p className="text-xs leading-3 text-gray-600 py-4">
          Category: {category}
        </p>
        <p className="w-96 text-xs leading-3 text-gray-600">
          {warrantyInformation}
        </p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center">
            <p
              onClick={onRemoveClick}
              className="text-xs leading-3 underline text-red-500 cursor-pointer"
            >
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            ${price}
          </p>
        </div>
        <div className="flex justify-center md:hidden gap-1 mt-5 flex-row">
          <button
            onClick={onAddToCartClick}
            className="block  select-none rounded-lg bg-slate-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            +
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
            className="block  select-none rounded-lg bg-slate-100	 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
