import React from "react";
import './productList.style.css';
import ListCard from "../../cards/product-list-card/cardList";
import { BooksData } from "../../../bookdata/BookData";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
    return (
        <div className="product-list-container">
            <div className="container">
                <h2>Bán chạy</h2>

                <div className="list-container">
                    {BooksData.slice(0,4).map((book) => {
                        return (
                            <ListCard key={book.id} bookData={book}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}



export default ProductList;