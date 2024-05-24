import React, { useEffect } from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from './cartSlice';
import { useSnackbar } from "notistack";


const Cart = () => {

    const { isCartOpen, cartItems } = useSelector((state) => state.cart);
    const { enqueueSnackbar } = useSnackbar();


    const dispatch = useDispatch();


    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };


    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
        enqueueSnackbar("Товар удален из корзины", { variant: "warning", autoHideDuration: 3000 });
    };


    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };


    // disable the body-scroll when the Cart is open
    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);


    // closing the Cart on clicking outside of it

    // useEffect(() => {
    //     const outsideClose = (e) => {
    //         if (e.target.id === 'cart') {
    //             handleCloseCart(false);
    //         }
    //     };

    //     window.addEventListener('click', outsideClose);

    //     return () => {
    //         window.removeEventListener('click', outsideClose);
    //     };
    // }, [handleCloseCart]);


    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


    return (
        <>
            {
                isCartOpen && (
                    <div id="cart">
                        <div className="cart_content">
                            <div className="cart_head">
                                <h2 className='cart_basket'>Корзина <small>({cartQuantity})</small></h2>
                                <div
                                    title="Close"
                                    className="close_btn"
                                    onClick={() => handleCloseCart(false)}
                                >
                                    <span>&times;</span>
                                </div>
                            </div>

                            <div className="cart_body">
                                {
                                    cartQuantity === 0 ? (
                                        <h2 className='cart_empty'>Ваша корзина пуста!</h2>
                                    ) : (
                                        cartItems.map(item => {
                                            const { id, img, name, price, quantity } = item;
                                            const itemTotal = price * quantity;

                                            return (
                                                <div className="cart_items" key={id}>
                                                    <figure className="cart_items_img">
                                                        <img src={`./${img}.jpeg`} className='product-img' alt="product-img" />
                                                    </figure>

                                                    <div className="cart_items_info">
                                                        <h4 className='cart_title'>{name}</h4>
                                                        <h3 className="cart_price">{itemTotal.toLocaleString()} руб</h3>
                                                    </div>

                                                    <div className="cart_items_quantity">
                                                        <span onClick={() => handleDecrement(id)}>&#8722;</span>
                                                        <b className='cart_quantity'>{quantity}</b>
                                                        <span onClick={() => handleIncrement(id)}>&#43;</span>
                                                    </div>

                                                    <div
                                                        title="Remove Item"
                                                        className="cart_items_delete"
                                                        onClick={() => handleRemove(id)}
                                                    >
                                                        {/* <span>&times;</span> */}
                                                        <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                                                            <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )
                                }
                            </div>

                            <div className="cart_foot">
                                <h3>
                                    <small className='cart_small'>Всего:</small>
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
                )
            }
        </>
    );
};

export default Cart;