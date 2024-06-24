export const ProductListingCardShimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <div className="h-full w-full bg-slate-200 rounded"></div>
        </div>
        <div className="p-6">
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            <div className="h-2 mt-4 bg-slate-200 rounded"></div>
            <div className="h-2 mt-4 bg-slate-200 rounded"></div>
            <div className="h-2 mt-4 bg-slate-200 rounded"></div>
            <div className="h-2 mt-4 bg-slate-200 rounded"></div>
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            disabled
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
