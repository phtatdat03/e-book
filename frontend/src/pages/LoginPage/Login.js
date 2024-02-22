import React, { useState } from "react";
import './Login.style.css'
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthBgImg from '../../assets/auth_bg.jpg';
import AuthForm from "../../components/Forms/authForm/AuthForm";
import { loginUser } from "../../redux/apiRequest";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) =>{
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser,dispatch,navigate);
        
    }
    return(
        <>
        <Navbar darkTheme={true}/>
        <section className="login-container">
            <div className="login-img-container">
                <img src={AuthBgImg} alt="authentication-background"/>
            </div>

            <div className="login-content-container">
                <div className="container">
                    <div className="content-wrapper">
                        <h1 id="labelLogin">Đăng nhập</h1>
                        <p>Đăng nhập tài khoản của bạn để có thể mua hàng</p>

                        <form onSubmit={handleLogin} >
                                <label>USERNAME</label>
                                <input type="text" placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)}/>
                                <label>PASSWORD</label>
                                <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                                <button className="submit-btn" type="submit"> LOGIN </button>
                        </form>
                    </div>    
                </div>
            </div>
        </section>
        </>
    )
}

export default Login;