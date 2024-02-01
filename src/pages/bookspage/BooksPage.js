import React from "react";
import './BooksPage.style.css';
import Navbar from '../../components/layouts/navbar/Navbar.js';
import SearchInputForm from '../../components/Forms/searchInputForm/searchInputForm.js';
import ListAllproduct from "../../components/layouts/listAllproduct/listAllproduct.js";
import Footer from '../../components/layouts/footer/Footer.js';
const BooksPage = () => {
    return (
        <section>
            <Navbar darkTheme = {true}/>

            <div className="search-container">
                <h3>Từng trang sách là một khoảnh khắc thần kỳ, chờ đón bạn để khám phá.</h3>
                <SearchInputForm darkTheme={false}/>
            </div>

            <ListAllproduct />
            <Footer />
        </section>
    )
}

export default BooksPage;