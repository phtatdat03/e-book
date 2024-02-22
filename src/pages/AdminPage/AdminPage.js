/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/Firebase";
import axios from "axios";

import "./AdminPage.css";

function AdminPage() {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [bookNeedUpdate, setBookNeedUpdate] = useState([]);
    const [update, setUpdate] = useState(false);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [author, setAuthor] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [publisher, setPublisher] = useState('')
    const [imgSrc, setImgSrc] = useState('')
    const [length, setLength] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5555/book/get").then((res) => {
        setBooks(res.data);
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    // thêm sách
    const handleSaveData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5555/book/save', {title, price, author, quantity, description, publisher, imgSrc, length})
        .then(res => {
            setBooks(prev => {
            return [...prev, res.data]
            })
        })
        .catch(err => console.log(err))
        window.location.reload();
    }

    // bấm nút update trong table
    const handleClickUpdateBtn = (id) => {
        setUpdate(true)
        modal.style.display = 'flex'
        axios.get(`http://localhost:5555/book/${id}`)
        .then(res => {
            setBookNeedUpdate(res.data)

            setTitle(res.data.title)
            setPrice(res.data.price)
            setAuthor(res.data.author)
            setQuantity(res.data.quantity)
            setDescription(res.data.description)
            setPublisher(res.data.publisher)
            setImgSrc(res.data.imgSrc)
            setLength(res.data.length)
        })
        .catch(err => console.log(err))
    };

    // bấm nút update trong form
    const UpdateData = (e, id) => {
        e.preventDefault();
        axios.put(`http://localhost:5555/book/update/${id}`, {title, price, author, quantity, description, publisher, imgSrc, length})
        .then(res => {
            console.log('update succesful!');
        })
        .catch(err => console.log(err))
        window.location.reload();
    }
    
    const hanleDeleteBook = (id, TFDelete) => {
        if(TFDelete) {
            axios.delete(`http://localhost:5555/book/delete/${id}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err))
        } else {return;}
    };

    const modal = document.querySelector('.modal-content')
    const CloseForm = () => {
        modal.style.display = 'none'
    };

    const handleOnClickBtnAdd = () => {
        if(modal) {
            modal.style.display = 'flex'
        }
    };


  return (
    <>
      <header className="admin-header">
        <div className="grid-1400 ad-header-nav">
          <h1>Admin</h1>
          <div className="admin-info">
            <img
              className="admin-avatar"
              src="https://lh3.googleusercontent.com/ogw/AF2bZyhuSSNVOGuGkL5jQkyHMjMwl5yp0HfaVFLNsLHEDg=s32-c-mo"
              alt="ad-avatar"
            />
            <div className="account">
              Trần Duy Mạnh
              <a onClick={handleLogout} href="/" className="logout">
                Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </header>

    <div className="grid-1400">
        <button type="button" className="btn btn-primary addBook" onClick={handleOnClickBtnAdd}>
          Thêm sách
        </button>
    </div>

      <div className="grid-1400">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Price</th>
                    <th scope="col">
                        Description
                    </th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>

            <tbody>
            {books.map((book, id) => (
                <tr key={id}>
                    <th scope="row">{id + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>
                        <p className="description">{`${book.description}`}</p> ...
                    </td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-info update" 
                            onClick={() => handleClickUpdateBtn(book._id)}
                        >
                            Update
                        </button>

                        <button 
                            type="button" 
                            className="btn btn-light delete" 
                            onClick={() => {
                                const TFDelete = confirm('Bạn có chắc muốn xóa không?');    
                                hanleDeleteBook(book._id, TFDelete)}
                            }
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>

      </div>
      
    <div className="modal-content">
        <div className="modal-container">
            <form method="post" name='form-book' onSubmit={(e) => handleSaveData(e)}>
                <div className="form-group formData">
                    <label htmlFor="title">Tên sách</label>
                    <input className="form-control" name='title' id="title" value={title} onChange={e => setTitle(e.target.value)}/>
        
                    <label htmlFor="price">Nhập giá</label>
                    <input className="form-control" name='price' id="price" value={price} onChange={e => setPrice(e.target.value)}/>
        
                    <label htmlFor="author">Tác giả</label>
                    <input className="form-control" name='author' id="author" value={author} onChange={e => setAuthor(e.target.value)}/>
        
                    <label htmlFor="quantity">Chất lượng</label>
                    <input className="form-control" name='quantity' id="quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        
                    <label htmlFor="description">Nhập mô tả</label>
                    <textarea rows={2} className="form-control" name='description' id="description" value={description} onChange={e => setDescription(e.target.value)}/>

                    <label htmlFor="publisher">Nhà xuất bản</label>
                    <input className="form-control" name='publisher' id="publisher" value={publisher} onChange={e => setPublisher(e.target.value)}/>

                    <label htmlFor="imgSrc">Link ảnh</label>
                    <input className="form-control" name='imgSrc' id="imgSrc" value={imgSrc} onChange={e => setImgSrc(e.target.value)}/>

                    <label htmlFor="length">Độ dài trang</label>
                    <input className="form-control" name='length' id="length" value={length} onChange={e => setLength(e.target.value)}/>
                </div>
                <div className="modal-footer">
                    <input
                        type="button" 
                        onClick={CloseForm}
                        className="btn btn-light btn-close-form" 
                        value={"Đóng"}
                    ></input>

                    {update ? <button 
                        className="btn btn-primary" 
                        style={{float: 'right'}}
                        onClick={(e) => UpdateData(e, bookNeedUpdate._id)}
                    >Update</button> :
                    <button 
                        className="btn btn-primary" 
                        style={{float: 'right'}}
                        type="submit"
                        onClick={(e) => handleSaveData(e)}
                    >Thêm</button> 
                    }
                </div>
            </form> 
        </div> 
    </div>
    </>
  );
}

export default AdminPage;
