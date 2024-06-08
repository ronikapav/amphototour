import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../../redux/Cart/cartSlice";
import { useSnackbar } from "notistack";
import CartItem from "./CartItem";

const Cart = () => {
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const handleCloseCart = (close) => {
    dispatch(toggleCart(close));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
    enqueueSnackbar("Товар удален из корзины", {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  useEffect(() => {
    const docBody = document.body;

    isCartOpen
      ? docBody.classList.add("overflow_hide")
      : docBody.classList.remove("overflow_hide");
  }, [isCartOpen]);

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <>
      {isCartOpen && (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h2 className="cart_basket">
                Корзина <small>({cartQuantity})</small>
              </h2>
              <div
                title="Close"
                className="close_btn"
                onClick={() => handleCloseCart(false)}
              >
                <span>&times;</span>
              </div>
            </div>

            <div className="cart_body">
              {cartQuantity === 0 ? (
                <h2 className="cart_empty">Ваша корзина пуста!</h2>
              ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleRemove={handleRemove}
                  />
                ))
              )}
            </div>

            <div className="cart_foot">
              <h3>
                <small className="cart_small">Всего:</small>
                <b>{cartTotal.toLocaleString()} руб</b>
              </h3>

              <button
                type="button"
                className="checkout_btn"
                disabled={cartQuantity === 0}
              >
                ОПЛАТИТЬ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;