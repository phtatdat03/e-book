import axios from "axios";
import { Navigate } from "react-router-dom";
import { logOutFailed, logOutStart, logOutSuccess, loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { getUserFailed, getUserStart, getUserSuccess } from "./userSlice";
import { useSelector } from "react-redux";



export const loginUser = async(user,dispatch,navigate) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/v1/auth/login",user);
        dispatch(loginSuccess(res.data));
        navigate("/")
    } catch (err) {
        dispatch(loginFailed());
    }
};

export const registerUser = async(user,dispatch,navigate) =>{
    dispatch(registerStart());
    try {
        await axios.post("http://localhost:8000/v1/auth/register",user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(registerFailed());
    }
};

export const getAllUsers = async(accessToken,dispatch) =>{
    dispatch(getUserStart);
    try {
        const res = await axios.get("http://localhost:8000/v1/user/",{
            headers:{token: 'Bearer ${accessToken}'},
        });
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(getUserFailed());
    }
};

export const logOut = async(dispatch,navigate,id,accessToken,axiosJWT) =>{
    dispatch(logOutStart());
    try {
        await axiosJWT.post("http://localhost:8000/v1/auth/logout",id,{
            headers: {token: 'Bearer ${accessToken}'},
        });
        dispatch(logOutSuccess());
        navigate("/login")
    } catch (err) {
        dispatch(logOutFailed());
    }
}