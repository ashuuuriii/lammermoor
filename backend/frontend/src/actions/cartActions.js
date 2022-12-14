import axios from "axios";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty, itemType) => async (dispatch, getState) => {
  const { data } = await axios.get([`/api/products/${id}/`]);

  const price = itemType === "pdf" ? data.pdf_price : data.price;

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.name,
      image: data.image,
      price: price,
      nInStock: data.n_stock,
      qty,
      itemType,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id, itemType) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: {id, itemType},
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
