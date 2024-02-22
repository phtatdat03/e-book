import { useState } from 'react';
import React from "react";
import './searchInputForm.style.css'
import { useNavigate } from 'react-router-dom';
const SearchInputForm = ({darkTheme}) => {
    const [searchField, setSearchField] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const redirectToSearch = () => {
        navigate('/search',{state:searchField});
    }
    return (
        <div className={ `search-input-form-container ${ darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}` }>
            <input type="text" className="search-input" placeholder="Nhập tên sách bạn muốn mua..." value={searchField}
            onChange={handleChange}/>
            <button onClick={redirectToSearch} className="search-button">Tìm kiếm</button>
        </div>
    )
}

export default SearchInputForm