import React from "react";

const CartItem = ({ item, handleDecrement, handleIncrement, handleRemove }) => {
  const { id, img, name, price, quantity } = item;
  const itemTotal = price * quantity;

  return (
    <div className="cart_items" key={id}>
      <figure className="cart_items_img">
        <img src={img} className="product-img" alt="product-img" />
      </figure>

      <div className="cart_items_info">
        <h4 className="cart_title">{name}</h4>
        <h3 className="cart_price">{itemTotal.toLocaleString()} руб</h3>
      </div>

      <div className="cart_items_quantity">
        <span onClick={() => handleDecrement(id)}>&#8722;</span>
        <b className="cart_quantity">{quantity}</b>
        <span onClick={() => handleIncrement(id)}>&#43;</span>
      </div>

      <div
        title="Remove Item"
        className="cart_items_delete"
        onClick={() => handleRemove(id)}
      >
        <svg
          viewBox="0 0 15 17.5"
          height="17.5"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            transform="translate(-2.5 -1.25)"
            d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
            id="Fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CartItem;