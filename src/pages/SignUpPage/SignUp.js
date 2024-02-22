import React from "react";
import './SignUp.style.css'
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthBgImg from '../../assets/auth_bg.jpg';
import AuthForm from "../../components/Forms/authForm/AuthForm";
const SignUp = () => {
    return (
        <>
        <Navbar darkTheme={true}/>
        <section className="signup-container">
            <div className="signup-img-container">
                <img src={AuthBgImg} alt="authentication-background"/>
            </div>

            <div className="signup-content-container">
                <div className="container">
                    <div className="content-wrapper">
                        <h2>Đăng ký</h2>
                        <p>Tạo tài khoản mới</p>

                        <AuthForm buttonName="Đăng ký"/>
                    </div>    
                </div>
            </div>
        </section>
        </>
    )
}

export default SignUp;