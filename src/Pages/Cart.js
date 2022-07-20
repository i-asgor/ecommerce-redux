import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();

    const cartItems = (cartItem) => {
        
    }
    return (
        <div>
            product
        </div>
    );
};

export default Cart;