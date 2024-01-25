import React, {useState, useEffect} from "react";
import './DetailsSection.style.css'
import BookDetailImg from '../../../assets/book-image/harry_potter_1.jpg'
import { useParams } from "react-router-dom";
import { BooksData } from "../../../bookdata/BookData";

const DetailsSection = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({});

    useEffect(() => {
        let newData = BooksData.filter((book) => book.id === parseInt(id));
        setBookData(newData[0])
    },[])

    return(
        <section className="detail-section-container">
            <div className='container'>
                <div className="flex-container">
                    <div className='book-img-container'>
                        <img src={bookData.book_url} alt="book" />
                    </div>

                    <div className='book-detail-container'>
                        <h2>{bookData.book_name}</h2>
                        <p>Tác giả: {bookData.author_name}</p>
                        <p className="book-description">Mô tả: {bookData.book_des}</p>
                        <p><b>Độ dài: {bookData.length}</b></p>
                        <p><b>Nhà xuất bản: Trẻ</b></p>
                        <h3>Giá: {bookData.price}</h3>

                        <a href="#" className="cart-button">Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;