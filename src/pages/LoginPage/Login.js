import React from "react";
import './Login.style.css'
import Navbar from "../../components/layouts/navbar/Navbar";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <section>
            <Navbar darkTheme={true}/>
            <div className="login template d-flex justify-content-center align-items-center vh-100 bg-success">
                <div className=".form_container p-5 rounded bg-white">
                    <form>
                        <h3 className="text-center">Đăng nhập</h3>
                        <div className="mb-2">
                            <label htmlFor="email">Email: </label>
                            <input type="text" id="email" placeholder="VD: thanglong@gmail.com" className="form-control"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="password">Mật khẩu: </label>
                            <input type="password" id="password" placeholder="Nhập mật khẩu" className="form-control"/>
                        </div>

                        <div className="mb-2">
                            <input type="checkbox" id="check_remember" className="custom-control custom-checkbox"/>
                            <label htmlFor="check" className="custom-input-label ms-2">
                                Lưu đăng nhập
                            </label>
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-dark">Đăng nhập</button>
                        </div>

                        <p className="text-end mt-2">
                            Quên <a href="#">mật khẩu?</a> <Link to="/signup" className="ms-2"> Đăng ký</Link>
                        </p>
                    </form>
                </div>  
            </div>
        </section>
    )
}

export default Login;