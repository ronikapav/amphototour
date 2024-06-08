import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useSnackbar } from "notistack";
import { BsCart, BsCartFill } from "react-icons/bs";
import { addItem, removeItem } from "../../redux/Cart/cartSlice";

const ProductsCard = (props) => {
  const hoverElements = useRef([]);

  useEffect(() => {
    const currentHoverElements = hoverElements.current;

    hoverElements.current.forEach((element) => {
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
       currentHoverElements.forEach((element) => {
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const handleMouseLeave = (event) => {
    event.target.classList.remove("hover");
  };

  const { img, name, description, price, id } = props;

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const { removedItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const isRemoved = removedItems.includes(props.id);
    if (isRemoved) {
      setIsAdded(false);
    }
  }, [removedItems, props.id]);

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
    const message = isAdded
      ? "Товар удален из корзины"
      : "Товар добавлен в корзину";
    enqueueSnackbar(message, {
      variant: isAdded ? "warning" : "success",
      autoHideDuration: 3000,
    });
    setIsAdded(!isAdded);
  };

  return (
    <figure className="products-card" ref={(element) => hoverElements.current.push(element)}>
      <img src={img} alt="" />
      <div className="products-image">
        <img src={img} alt="" />
      </div>
      <figcaption>
        <h3>{name}</h3>
        <p>{description}</p>
      </figcaption>
      <div className="products-price">
        {price.toLocaleString("ru-RU", { useGrouping: false })} руб
      </div>
      <button
        type="button"
        className={`btn products-add-to-cart ${isAdded ? "Добавлено" : "Купить"}`}
        onClick={handleAddToCart}
      >
        {isAdded ? "Добавлено" : "Купить"}
        <i>{isAdded ? <BsCartFill className="BsCart" /> : <BsCart className="BsCart" />}</i>
      </button>
    </figure>
  );
};

export default ProductsCard;