import { useSelector } from "react-redux";

export const SummaryCard = () => {
  // * REDUX
  const cart = useSelector((state) => state.cart.value);

  // * FUNCTIONS
  const totalPriceCalculator = () => {
    return cart.reduce((acc, crr) => {
      return acc + crr.price * crr.quantity;
    }, 0);
  };

  const totalPrice = Math.floor(totalPriceCalculator());
  const totalPriceToPay = totalPrice + 10;

  return (
    <div
      id="summary"
      className=" w-full  h-full sm:w-1/4   md:w-1/2     px-8 py-10"
    >
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Items {cart.length}
        </span>
        <span className="font-semibold text-sm">${totalPrice}</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
        </select>
      </div>
      <div className="py-10">
        <label className="font-semibold inline-block mb-3 text-sm uppercase">
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded font-sans text-xs font-bold uppercase text-white">
        Apply
      </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${totalPriceToPay}</span>
        </div>
        <button className="block w-full select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-indigo-500  hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};
