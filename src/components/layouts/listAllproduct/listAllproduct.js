import React, { useState, useEffect } from "react";
import './listAllproduct.style.css'
import ListCard from "../../cards/product-list-card/cardList";
import axios from 'axios'

const ListAllproduct = () => {
    const [books, setBooks] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:5555/book/get').then(res => {
          setBooks(res.data)
        })
      }, [])
      
    return (
        <section className="product-list-all-container">
            <div className="container">
                <div className="grid-container">
                    { books.map( (book)=> {
                        return (
                            <div key={book._id} className="grid-item">
                                <ListCard bookData = {book}/>
                            </div>  
                        )
                    } ) }

                </div>
            </div>
        </section>
    )
}

export default ListAllproduct;