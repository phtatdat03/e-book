import React from "react";
import './showcase.style.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../Forms/searchInputForm/searchInputForm";

const ShowCase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Tổng hợp những quyển sách hay nhất mọi thời đại</h1>
                <h3>Chất lượng đi đôi với giá cả</h3>
                <SearchInputForm darkTheme={true}/>
            </div>
        </section>
    )
}
export default ShowCase;