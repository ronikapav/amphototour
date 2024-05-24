import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { loadCartFromLocalStorage, saveCartToLocalStorage } from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadCartFromLocalStorage(),
    },
});

store.subscribe(() => {
    saveCartToLocalStorage(store.getState().cart);
});

export default store;