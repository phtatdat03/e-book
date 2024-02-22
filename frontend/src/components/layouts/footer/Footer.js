import React from "react";
import './footer.style.css'

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="container">
                <h2 style={{fontFamily:'Chivo Mono'}}>Nếu có bất kỳ câu hỏi hay những lời góp ý, vui lòng điền vào form dưới đây!</h2>
                <h3 style={{fontFamily:'Chivo Mono'}}>Đóng góp của bạn là động lực để chúng tôi phát triển.</h3>
                <form className="footer-form-contribution">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Tên: </label>
                        <input type="text" id="name" className="form-input" placeholder="Nhập họ tên"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email: </label>
                        <input type="email" id="email" className="form-input" placeholder="Nhập email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="sug_ques" className="form-label">Nội dung: </label>
                        <textarea className="form-input" id="sug_ques" placeholder="Góp ý/Câu hỏi"></textarea>
                    </div>

                    <div className="form-group">
                        <a href="#" className="form-submit">Gửi</a>
                    </div>

                    <p>&copy; 2024. TỦ SÁCH THĂNG LONG</p>
                </form>
            </div>
        </section>
    )}
export default Footer;