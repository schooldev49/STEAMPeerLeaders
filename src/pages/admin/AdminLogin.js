import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Modal from '../../components/Modal';
import {useNavigate, Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle } from '../../firebase';
import '../../App.css';
import Navbar from '../../components/nav/Navbar';

import { prodErrorMap } from 'firebase/auth';
/*
const Defaults = {
    text: "Unknown Error Occured.",
    type: "error",
}
const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_MSG':
            return {
                ...state,
                text: action.payload.text,
                type: action.payload.type
            }
        default: 
            return state;
    }
}*/
const AdminLogin = () => {
    const errorEle = useRef(null);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        
        if (user){ 
            errorEle.style.color = 'green';
            errorEle.innerText = 'Success!'
            navigate("/admin/");
        }
    },[user,loading])

    return (
        <div className="App">
            <Navbar/>

            <div className="login">
                <div className="loginContainer">
                    <img src='https://google.com/favicon.ico' className='imgL'/>
                    <h1 className="loginTitle">Admin Login</h1>
                    <button className="loginButton" onClick={signInWithGoogle}>Login With Google</button>
                    <h1 ref={errorEle} className="loginErr"></h1>
                </div>

            </div>
        </div>
    )
}
export default AdminLogin;