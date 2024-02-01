import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import app from "../../../firebase/Firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "@firebase/auth";

const AuthForm = ({buttonName}) => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [username, setUsername] = useState("");
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth(app);

        if(buttonName === "Đăng nhập") {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            }).catch((err) => console.log(err))
        } else {
            createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
                userCredentials.user.displayName=username;
    
                navigate('/')
            }).catch((err)=>{
                console.log(err);
            })
        }



    }
    return (
        <form onSubmit={handleSubmit}>
            {buttonName === "Đăng ký" && (
                <div className="form-group">
                    <label>Tên: </label>
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="VD: Nguyễn Văn A" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>  
            )}

            <div className="form-group">
                <label>Email: </label>
                <input 
                    type="email" 
                    className="form-input" 
                    placeholder="VD: thanglong@gmail.com" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>Mật khẩu:  </label>
                <input 
                    type="password" 
                    className="form-input" 
                    placeholder="Nhập mật khẩu."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <div className="form-group">
                <input 
                    type="submit"  
                    className="button-primary" 

                    value={buttonName}
                />
            </div>
        </form>
    )
}

export default AuthForm;