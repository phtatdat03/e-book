import React, {useContext} from "react";
import './navbar.style.css'
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {getAuth, signOut} from "firebase/auth";
import app from "../../../firebase/Firebase";
import { UserContext } from "../../../App";
import { ReactComponent as Cart} from "../../../assets/cart_ic.svg";

const Navbar = ({darkTheme}) => {

    const user = useContext(UserContext);

    const auth = getAuth(app);

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((err) => {
            console.log(err);
        })
    }
    const showLoginAndSignUp = (
        <nav className="nav-links-container">
            <Link to="/" className="nav-links" id="home">Trang chủ</Link>
            <Link to="/books" className="nav-links" id="books">Sách</Link>
            <Link to="/login" className="nav-links">Đăng nhập</Link>
            <Link to="/signup" className="nav-links">Đăng ký</Link>
        </nav>
    )

    const showLogoutAndCart = (
        <nav className="nav-links-container">
            <Link to="/" className="nav-links" id="home">Trang chủ</Link>
            <Link to="/books" className="nav-links" id="books">Sách</Link>
            <a onClick={handleLogout} to="/" className="nav-links">Đăng xuất</a>
            <Link to="/cart">
                <Cart className="cart-link"/>
            </Link>
        </nav>
    )

    return(
        <section className={`navbar-container ${ darkTheme ? 'background-dark relative' : 'background-transparent' }`}>
            <div className="container flex justify-center justify-between align-center">
                <Link to="/" className="logo"><h3>TỦ SÁCH THĂNG LONG</h3></Link>

                { user ? showLogoutAndCart : showLoginAndSignUp }
            </div>
        </section>
    )
}

export default Navbar