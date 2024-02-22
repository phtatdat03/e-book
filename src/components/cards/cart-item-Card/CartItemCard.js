/* eslint-disable no-restricted-globals */
import React from "react";
import './CartItemCard.style.css';
import handleAddDotPrice from '../../../assets/handleAddDotPrice'
import axios from "axios";

const CartItemCard = ({bookData}) => {
    const handleDeleteCartItem = (id, TFDelete) => {
        if(TFDelete) {
            axios.delete(`http://localhost:5555/order/delete/${id}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err))
        } else {return;}
    }
    return (
            <section className="cart-item">
                <div className="cart-item-img-container">
                    <img src={bookData.imgSrc} alt="cart-item" className="cart-item-img"/>
                </div>
                <div className="cart-item-content-container">
                    <h2>Tên sách: {bookData.title}</h2>
                    <p >Tác giả: {bookData.author}</p>
                    <h3 className="cart-item-price">Giá: <span>{`${handleAddDotPrice(bookData.price)} VNĐ`}</span></h3>

                    <button onClick={() => {
                        const TFDelete = confirm('Bạn có chắc muốn xóa không?');
                        
                        handleDeleteCartItem(bookData._id, TFDelete)
                    }} 
                    className="delete-button">
                        Xóa khỏi giỏ hàng
                    </button>
                </div>
            </section>
    )
}

export default CartItemCard;