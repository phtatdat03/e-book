import React, {useContext, useEffect} from "react";
import './CartItemsContainer.style.css';
import CartItemCard from "../../cards/cart-item-Card/CartItemCard";
import {CartContext} from '../../../App';
import axios from 'axios'

const CartItemsContainer = () => {

    const { cartItems, setCartItems } = useContext(CartContext);

    useEffect(()=> {
        axios.get('http://localhost:5555/order/get').then(res => {
            setCartItems(res.data)
        })
      }, [])

    return (
        <section className="cart-items-container">
            <div className="container">
                <h2>Giỏ hàng: </h2>

                {cartItems.map((item) => (
                    <CartItemCard key={item._id} bookData={item}/>
                ))}
            </div>
        </section>
    )
}

export default CartItemsContainer;