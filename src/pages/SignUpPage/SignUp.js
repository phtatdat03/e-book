import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <section>
            <Navbar darkTheme={true}/>
            <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-success">
                <div className=".form_container p-5 rounded bg-white">
                    <form>
                        <h3 className="text-center">Đăng ký</h3>
                        <div className="mb-2">
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" placeholder="VD: thanglong@gmail.com" className="form-control"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="password">Họ tên: </label>
                            <input type="text" id="password" placeholder="VD: Nguyễn Văn A" className="form-control"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="password">Mật khẩu: </label>
                            <input type="password" id="password" placeholder="Nhập mật khẩu" className="form-control"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="confirm_password">Xác nhận mật khẩu: </label>
                            <input type="password" id="confirm_password" placeholder="Nhập lại mật khẩu" className="form-control"/>
                        </div>

                        <div className="d-grid mt-2">
                            <button className="btn btn-dark">Đăng ký</button>
                        </div>

                        <p className="text-end mt-2">
                            Đã có tài khoản? <Link to="/login" className="ms-2">Đăng nhập</Link>
                        </p>
                    </form>
                </div>  
            </div>
        </section>
    )
}

export default SignUp;