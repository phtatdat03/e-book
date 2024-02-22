import React, {useContext} from "react";
import './CartItemsContainer.style.css';
import CartItemCard from "../../cards/cart-item-Card/CartItemCard";
import {CartContext} from '../../../App';

const CartItemsContainer = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <section className="cart-items-container">
            <div className="container">
                <h2>Giỏ hàng: </h2>

                {cartItems.map((item) => (
                    <CartItemCard key={item.id} bookData={item}/>
                ))}
            </div>
        </section>
    )
}

export default CartItemsContainer;