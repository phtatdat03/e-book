import React from "react";
// import './cardList.style.css';
import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import handleAddDotPrice from '../../../assets/handleAddDotPrice'

const ListCard = ({ bookData }) => {
    return (
        // <div className="product-list-card">
        //     <div className="product-list-image-container">
        //         <img src={bookData.book_url} alt="product-list-image" className="product-list-image"/>
        //     </div>

        //     <div className="product-list-details-container">
        //         <h4>{bookData.book_name}</h4>
        //         <p className="author-name">{bookData.author_name}</p>
        //         <p className="price">{bookData.price}</p>
        //     </div>

        //     <div className="card-button-container">
        //         <Link to={`/book-details/${bookData.id}`}  className="product-list-button">Thêm vào giỏ hàng</Link>
        //     </div>
        // </div>
        <Card style={{ width: '15rem'}}>
            <Card.Img variant="top"  src={bookData.imgSrc}  style={{width:'14.9rem', height:'18rem'}}/>
            <Card.Body>
                <Card.Title>{bookData.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Tác giả: {bookData.author}</ListGroup.Item>
                <ListGroup.Item>Độ dài: {`${bookData.length} trang`}</ListGroup.Item>
                <ListGroup.Item>Giá: <span style={{color:'red'}}>{`${handleAddDotPrice(bookData.price)} VNĐ`}</span></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={`/book-details/${bookData.slug}`}>Chi tiết</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ListCard;