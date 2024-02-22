import React, { useState } from "react";
import './SignUp.style.css'
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import AuthBgImg from '../../assets/auth_bg.jpg';
import AuthForm from "../../components/Forms/authForm/AuthForm";
import { registerUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [email,setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) =>{
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,
            username: username
        };
        registerUser(newUser,dispatch,navigate)
    }
    return (
        <>
            <Navbar darkTheme={true} />
            <section className="signup-container">
                <div className="signup-img-container">
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>

                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h1>Đăng ký</h1>
                            <p>Tạo tài khoản mới</p>

                            <form onSubmit={handleRegister}>
                                <label>EMAIL</label>
                                <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                                <label>USERNAME</label>
                                <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}/>
                                <label>PASSWORD</label>
                                <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                                <button className="submit-btn" type="submit"> Create account </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;