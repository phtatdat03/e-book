import { useState } from 'react';
import React from "react";
import './searchInputForm.style.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SearchInputForm = ({darkTheme}) => {
    const [searchField, setSearchField] = useState('');
    const [searchResult, setSearchResult] = useState([])
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const redirectToSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5555/book/getTitle?title=${searchField}&type=more`);
            setSearchResult(response.data);
    
            // Chuyển hướng sau khi nhận được kết quả
            navigate('/search', { state: response.data });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={ `search-input-form-container ${ darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}` }>
            <input type="text" className="search-input" placeholder="Nhập tên sách bạn muốn mua..." value={searchField}
            onChange={handleChange}/>
            <button onClick={redirectToSearch} className="search-button">Tìm kiếm</button>
        </div>
    )
}

export default SearchInputForm