import React from "react";
import './searchInputForm.style.css'

const SearchInputForm = ({darkTheme}) => {
    return (
        <div className={ `search-input-form-container ${ darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}` }>
            <input type="text" className="search-input" placeholder="Nhập tên sách bạn muốn mua..."/>
            <button className="search-button">Tìm kiếm</button>
        </div>
    )
}

export default SearchInputForm