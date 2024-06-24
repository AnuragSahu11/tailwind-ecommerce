import { useInfiniteQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { ProductListingCardShimmer } from "../../components/general-components/shimmer/product-listing-card/productListingCardShimmer";
import { getProductsData } from "../../utils/product-listing-utils";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { ProductListingCard } from "../../components/general-components/cards/product-listing-card/ProductListingCard";
import { useEffect } from "react";
const PAGE_SIZE = 9;

export const ProductListingPage = () => {
  // * REDUX STORE
  const cart = useSelector((state) => state.cart.value);

  // * QUERY
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProductsData(pageParam, PAGE_SIZE),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.limit > 0 ? lastPage.skip : undefined,
  });

  // * CUSTOM HOOK
  const reachedPageBottom = useInfiniteScroll();

  // * USE EFFECT
  useEffect(() => {
    if (reachedPageBottom && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [reachedPageBottom]);

  return (
    <div className="flex justify-center w-full bg-slate-100">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3	gap-x-10 gap-y-14 w-fit	 py-16">
        {data?.pages?.map((group) => {
          return group.products.map((cardData) => (
            <ProductListingCard productData={cardData} key={cardData.id} />
          ));
        })}
        {(isLoading || isFetching) &&
          Array(3)
            .fill(0)
            .map((item, index) => <ProductListingCardShimmer key={index} />)}
      </div>
    </div>
  );
};
