import React from "react";
import './Login.style.css'
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthBgImg from '../../assets/auth_bg.jpg';
import AuthForm from "../../components/Forms/authForm/AuthForm";
const Login = () => {
    return (
        <>
        <Navbar darkTheme={true}/>
        <section className="login-container">
            <div className="login-img-container">
                <img src={AuthBgImg} alt="authentication-background"/>
            </div>

            <div className="login-content-container">
                <div className="container">
                    <div className="content-wrapper">
                        <h2>Đăng nhập</h2>
                        <p>Đăng nhập tài khoản của bạn để có thể mua hàng</p>

                        <AuthForm buttonName="Đăng nhập"/>
                    </div>    
                </div>
            </div>
        </section>
        </>
    )
}

export default Login;