import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ProductListingCard } from "../../components/general-components/cards/product-listing-card/ProductListingCard";
import { ProductListingCardShimmer } from "../../components/general-components/shimmer/product-listing-card/productListingCardShimmer";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { getProductsData } from "../../utils/product-listing-utils";
const PAGE_SIZE = 9;

export const ProductListingPage = () => {
  // * QUERY
  const { isLoading, data, fetchNextPage, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getProductsData(pageParam, PAGE_SIZE),
      initialPageParam: 0,
      getNextPageParam: (lastPage) =>
        lastPage.limit > 0 ? lastPage.skip : undefined,
    });

  // * CUSTOM HOOK
  const reachedPageBottom = useInfiniteScroll();

  // * VARIABLES
  const showShimmerCards = isLoading || isFetching;
  const shouldFetchNextPage = reachedPageBottom && !isFetching && hasNextPage;

  // * USE EFFECT
  useEffect(() => {
    if (shouldFetchNextPage) {
      fetchNextPage();
    }
  }, [reachedPageBottom]);

  return (
    <div className="flex justify-center pt-5 w-full bg-slate-100">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3	gap-x-10 gap-y-14 w-fit	 py-16">
        {data?.pages?.map((group) => {
          return group.products.map((cardData) => (
            <ProductListingCard productData={cardData} key={cardData.id} />
          ));
        })}
        {showShimmerCards &&
          Array(3)
            .fill(0)
            .map((item, index) => <ProductListingCardShimmer key={index} />)}
      </div>
    </div>
  );
};
