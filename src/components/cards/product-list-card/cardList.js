import React from "react";
import './cardList.style.css';
import { Link } from "react-router-dom";

const ListCard = ({ bookData }) => {
    return (
        <div className="product-list-card">
            <div className="product-list-image-container">
                <img src={bookData.book_url} alt="product-list-image" className="product-list-image"/>
            </div>

            <div className="product-list-details-container">
                <h4>{bookData.book_name}</h4>
                <p className="author-name">{bookData.author_name}</p>
                <p className="price">{bookData.price}</p>
            </div>

            <div className="card-button-container">
                <Link to={`/book-details/${bookData.id}`}  className="product-list-button">Thêm vào giỏ hàng</Link>
            </div>
        </div>
    )
}

export default ListCard;