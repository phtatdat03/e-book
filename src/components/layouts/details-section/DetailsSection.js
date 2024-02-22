import React, {useState, useEffect, useContext} from "react";
import './DetailsSection.style.css'
import { useParams, useNavigate } from "react-router-dom";
import { CartContext, UserContext } from "../../../App";
import handleAddDotPrice from '../../../assets/handleAddDotPrice'
import axios from "axios";

const DetailsSection = () => {
    const {slug} = useParams()
    const [bookData, setBookData] = useState({});

    const user = useContext(UserContext);
    const {setCartItems} = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5555/book/slug/${slug}`)
            .then(res => {
                setBookData(res.data)
            })
            .catch(err => console.log(err))
    }, [slug])

    const handleAddtoCart = (bookData) => {
        const title = bookData.title
        const author = bookData.author
        const price = bookData.price
        const imgSrc = bookData.imgSrc
        if(user) {
            axios.post('http://localhost:5555/order/save', {title, author, price, imgSrc})
            .then(res => {
                setCartItems(prev => {
                return [...prev, res.data]
                })
            })
            .catch(err => console.log(err))
            alert("Thêm vào giỏ hàng thành công!!");
        } else {
            navigate('/login');
            alert("Bạn cần có tài khoản để có thể mua hàng!!");
        }
    }

    return(
        <section className="detail-section-container">
            <div className='container'>
                <div className="flex-container">
                <div className='book-img-container'>
                        <img src={bookData.imgSrc} alt="book" />
                    </div>

                    <div className='book-detail-container'>
                        <h2>{bookData.title}</h2>
                        <p>Tác giả: {bookData.author}</p>
                        <p className="book-description">Mô tả: {bookData.description}</p>
                        <div className="book-description-footer">
                            <p><b>Độ dài: {`${bookData.length} trang`}</b></p>
                            <p className="dsBookPrice"><b>Giá: <span style={{color:'red'}}>{`${handleAddDotPrice(bookData.price)} VNĐ`}</span></b></p>
                            <p><b>Nhà xuất bản: {bookData.publisher}</b></p>
                        </div>

                        <button onClick={() => handleAddtoCart(bookData)} className="button-primary">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;