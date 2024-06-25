import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: ({ value }, { payload }) => {
      value.push({ ...payload, quantity: 1 });
    },
    increaseQuantity: ({ value }, { payload }) => {
      const { id } = payload;
      const selectedProduct = value.find((item) => item.id === id);
      selectedProduct.quantity++;
    },
    decreaseQuantity: ({ value }, { payload }) => {
      const { id } = payload;
      const selectedProductIndex = value.findIndex((item) => item.id === id);
      const selectedProduct = value[selectedProductIndex];

      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity--;
      } else {
        value.splice(selectedProductIndex, 1);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
