import { useDispatch } from "react-redux";
import {ProductsData} from "./ProductsData";
import {removeFromCart} from './ProductsRedux';

const NavBarProductsCart = ({cartItem}) => {
  
  const dispatch = useDispatch();
  const items = ProductsData.find(item => item.id === cartItem.itemId);
  if(items){
      return  <div>
      <div class="shoppingMenu">
                    <p class="shoppingTitle">Your Shopping Cart{items.name}</p>
                    <div class="productResume">
                      <img src="https://rafaelalucas.com/dailyui/12/assets/img01.png" alt="" class="shoppingThumb"/>
                      <article>
                        <p class="shoppingProduct">Nike Air Max 200</p>
                        <p class="shoppingQuantity">0{cartItem.quantity}</p>
                        <p class="shoppingTotal">${items.price.toFixed(2) * cartItem.quantity}</p>
                      </article>
                    </div>
                    <div class="shoppingBtn">
                      <a className="link emptyCart"> 
                      <img src="https://rafaelalucas.com/dailyui/12/assets/trash.svg" alt=""/> 
                      Empty Shopping Cart</a>
                      <button class="btn" onClick={() => dispatch(removeFromCart({cartItemId: cartItem.id}))}>Finish Shopping</button>
                    </div>
  </div>
  </div>
  } else {
      return null;
  }
}

export default NavBarProductsCart;