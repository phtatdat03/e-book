import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import app from "./firebase/Firebase";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPage from "./pages/cartpage/CartPage";
import SearchPage from "./pages/searchpage/searchpage";
import AdminPage from "./pages/adminpage/Admin";

export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {

    const auth = getAuth(app);
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticatedUser(user);
            } else {
                setAuthenticatedUser(null);
            }
        })
    }, [])
    return (
        <UserContext.Provider value={authenticatedUser}>
            <CartContext.Provider value={{ cartItems, setCartItems }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/books" element={<BooksPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/book-details/:id" element={<BookDetailsPage />} />

                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                </Router>
            </CartContext.Provider>

        </UserContext.Provider>
    )
}

export default App;