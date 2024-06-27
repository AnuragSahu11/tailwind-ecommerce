const ProductCardQuantityButton = ({
  extraStyle,
  onAddToCartClick,
  quantity,
  onDecreaseQuantityClick,
}) => {
  return (
    <div className={`flex justify-center gap-1 mt-5 ${extraStyle}`}>
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
  );
};

export default ProductCardQuantityButton;
