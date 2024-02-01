import React from "react";
import './CartItemCard.style.css';

const CartItemCard = ({bookData}) => {
    return (
            <section className="cart-item">
                <div className="cart-item-img-container">
                    <img src={bookData.book_url} alt="cart-item-image" className="cart-item-img"/>
                </div>
                <div className="cart-item-content-container">
                    <h2>Tên sách: {bookData.book_name}</h2>
                    <p >Tác giả: {bookData.author_name}</p>
                    <h3 className="cart-item-price">Giá: {bookData.price}</h3>

                    <button className="delete-button">Xóa khỏi giỏ hàng</button>
                </div>
            </section>
    )
}

export default CartItemCard;