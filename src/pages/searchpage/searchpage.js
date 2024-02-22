import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import './searchpage.style.css';
import { useLocation } from "react-router-dom";
import ListCard from "../../components/cards/product-list-card/cardList";
const SearchPage = () => {
    const location = useLocation();
    const searchResult = location.state;
    console.log(searchResult);

    return (
        <section>
            <Navbar darkTheme={true}/>
            <div className="pt-5 pb-5 search-result-container">
                <div className="container">
                <h2>Kết quả tìm kiếm</h2>
                <div className="grid-container mt-4">
                    { searchResult.map( (book) => 
                        (<div key={book._id} className="grid-item">
                            <ListCard bookData = {book}/>
                        </div> )
                    )}
                </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default SearchPage;