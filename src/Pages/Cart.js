import React from 'react';
import { NavLink} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../redux/action';

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(deleteCart(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className="container">
                    <button onClick={()=> handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p>{cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h1>No Product Added in Your Cart</h1>
                </div>
            </div>
        </div>
        )
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary">Proceed To Checkout</NavLink>
                </div>
            </div>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !==0 && state.map(cartItems)}
            {state.length !==0 && button()}
        </div>
    );
};

export default Cart;