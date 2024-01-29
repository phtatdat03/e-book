import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/book-details/:id" element={<BookDetailsPage/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>      
        </div>
    )
}

export default App