import axios from "axios";

const PRODUCTS_END_POINT = "https://dummyjson.com/products";

export const getProductsData = async (pageNumber, pageSize) => {
  const skipCount = Number(pageNumber) + Number(pageSize);
  const { data } = await axios.get(
    `${PRODUCTS_END_POINT}?limit=${pageSize}&skip=${skipCount}`
  );
  return data;
};
