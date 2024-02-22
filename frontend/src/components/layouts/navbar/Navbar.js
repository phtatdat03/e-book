import React, { useContext } from "react";
import './navbar.style.css'
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { ReactComponent as Cart } from "../../../assets/cart_ic.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/apiRequest";
import {createAxios} from "../../../redux/createInstance"
import { logOutSuccess } from "../../../redux/authSlice";


const Navbar = ({ darkTheme }) => {

    const user = useSelector((state) => state.auth.login.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = user?.accessToken;
    const id = user?.id;
    let axiosJWT = createAxios(user,dispatch,logOutSuccess);
    const handleLogOut = () =>{
        logOut(dispatch,id,navigate,accessToken,axiosJWT);
    }


    

    return (
        <section className={`navbar-container ${darkTheme ? 'background-dark relative' : 'background-transparent'}`}>
            <div className="container flex justify-center justify-between align-center">
                <Link to="/" className="logo"><h3>TỦ SÁCH THĂNG LONG</h3></Link>
                <nav className="nav-links-container">
                    <Link to="/" className="nav-links" id="home">Trang chủ</Link>
                    <Link to="/books" className="nav-links" id="books">Sách</Link>
                    {user ? (
                        <>
                            <p className="navbar-user"><i class="bi bi-file-person"></i><span>{user.username}</span></p>
                            <Link to="#" className="nav-links" onClick={handleLogOut}>Đăng xuất</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-links">Đăng nhập</Link>
                            <Link to="/signup" className="nav-links">Đăng ký</Link>
                        </>
                    )
                    }
                </nav>
            </div>
        </section>
    )
}

export default Navbar