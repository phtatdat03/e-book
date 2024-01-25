import React from "react";
import './navbar.style.css'
import { Link } from "react-router-dom";

const Navbar = ({darkTheme}) => {
    return(
        <section className={`navbar-container ${ darkTheme ? 'background-dark relative' : 'background-transparent' }`}>
            <div className="container flex justify-center justify-between align-center">
                <Link to="/" className="logo"><h3>TỦ SÁCH THĂNG LONG</h3></Link>

                <nav className="nav-links-container">
                    <Link to="/" className="nav-links" id="home">Trang chủ</Link>
                    <Link to="/books" className="nav-links" id="books">Sách</Link>
                    <Link to="/login" className="nav-links">Đăng nhập</Link>
                    <Link to="/signup" className="nav-links">Đăng ký</Link>
                </nav>
            </div>
        </section>
    )
}

export default Navbar