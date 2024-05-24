// import React from 'react';
// import { addToCart } from "./ProductsRedux";
import "./Products.css";
import { addItem, removeItem } from './cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";


const ProductsCard = (props) => {

  useEffect(() => {
    const elements = document.querySelectorAll('.hover');
    elements.forEach(element => {
      element.addEventListener('mouseleave', function() {
        element.classList.remove('hover');
      });
    });

    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseleave', function() {
          element.classList.remove('hover');
        });
      });
    };
  }, []);

  const { img, name, description, price, id} = props;

  const [isAdded, setIsAdded] = useState(false);


  const dispatch = useDispatch();

  const { removedItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const isRemoved = removedItems.includes(props.id);
    if (isRemoved) {
 setIsAdded(false);
    }
}, [removedItems, props.id]);


 /* const handleAddToCart = () => {

      // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
      const item = { ...props };
      dispatch(addItem(item));

      setIsAdded(true);

      setIsAdded(!isAdded);

      // setTimeout(() => {
      //     setIsAdded(false);
      // }, 3000);
  };*/
  
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const isItemInCart = cartItems.some((item) => item.id === id);
    setIsAdded(isItemInCart);
  }, [cartItems, id]);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = () => {
    const item = { ...props };
    const action = isAdded ? removeItem(item.id) : addItem(item);
    dispatch(action);
    const message = isAdded ? 'Товар удален из корзины' : 'Товар добавлен в корзину';
    enqueueSnackbar(message, { variant: isAdded ? 'warning' : 'success', autoHideDuration: 3000 });
    setIsAdded(!isAdded);
  };

  return (
    <figure className='products-card'>
      <img src={`./${img}.jpeg`} alt='' />
      <div className="products-image">
        <img src={`./${img}.jpeg`} alt='' />
      </div>
      <figcaption>
        <h3>{name}</h3>
        <p>{description}</p>
      </figcaption>
      <div className="products-price">
      {price.toLocaleString('ru-RU', {useGrouping: false})} руб
      </div>
      <button 
      type="button"
      className={`btn products-add-to-cart ${isAdded ? 'Добавлено' : 'Купить'}`}
      onClick={handleAddToCart}
      >
      {isAdded ? 'Добавлено' : 'Купить'}
      <i className={`ion-ios-cart${isAdded ? '' : '-outline'}`}></i>

      </button>
    </figure>
  );
};

export default ProductsCard;