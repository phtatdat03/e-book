import React from "react";
import './listAllproduct.style.css'
import ListCard from "../../cards/product-list-card/cardList";
import { BooksData } from "../../../bookdata/BookData";

const ListAllproduct = () => {
    console.log(BooksData)
    return (
        <section className="product-list-all-container">
            <div className="container">
                <div className="grid-container">
                    { BooksData.map( (book)=> {
                        return (
                            <div className="grid-item">
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