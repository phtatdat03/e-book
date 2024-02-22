import React, { useState, useEffect } from "react";
import './productList.style.css';
import ListCard from "../../cards/product-list-card/cardList";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const ProductList = () => {
    const [books, setBooks] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:5555/book/get').then(res => {
          setBooks(res.data)
        })
      }, [])

    return (
        <div className="product-list-container">
            <div className="container">
                <h2>Bán chạy</h2>

                <div className="list-container">
                    {books.slice(0,3).map((book) => {
                        return (
                            <ListCard key={book._id} bookData={book}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductList;