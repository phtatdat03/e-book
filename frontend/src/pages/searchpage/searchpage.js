import React, {useEffect} from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import './searchpage.style.css';
import { useLocation } from "react-router-dom";
import { BooksData } from "../../bookdata/BookData";
const SearchPage = () => {
    const location = useLocation();

    useEffect(() => {
        let searchValue = [];

        searchValue = BooksData.filter((data) => data.book_name.toLowerCase().includes(location.state.toLowerCase()));

        console.log(searchValue);
    }, [])

    return (
        <section>
            <Navbar darkTheme={true}/>
            <div className="pt-5 pb-5 search-result-container">
                <div className="container">
                    <h2>Kết quả tìm kiếm</h2>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default SearchPage;