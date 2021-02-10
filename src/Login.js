import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [{}, dispatch] = useStateValue()

    let history = useHistory()

    const loginSubmit = (e) => {
        e.preventDefault()

        const loginDetails = {
            "email": email,
            "password": password
        }

        axios.post('http://localhost:3001/user/login', loginDetails)
         .then(info => {
             console.log(info);
             dispatch({
                type: actionTypes.SET_USER,
                user: info.data
             })
             if (info.status === 200) {
                 history.push("/")
             }
         }).catch(e => {
             console.log(e);
         })
    }

    return (
        <div className="login">
            <Link to="/" style={{ textDecoration: 'none' }} >
            <div className="login__logo">
                <img src="https://cdn-images-1.medium.com/max/1000/1*T4QXG2XMVyWH2TgpKRseYA.png" alt="logo"/>
                <p>MusicBook</p>
            </div>
            </Link>
            <hr/>
            <div className="login__box">
                <h2>To continue, log in to MusicBook</h2>
                <button className=" login__fb">Continue with Facebook</button>
                <button className=" login__google">Continue with Google</button>
                <button className=" login__phone">Continue with Phone</button>
                <div className="login__form">
                    <hr/>
                    <label htmlFor="">Username or Email Address</label>
                    <input type="text" onChange={e => setEmail(e.target.value)} placeholder="Username" />
                    <label htmlFor="">Password</label>
                    <input type="text" onChange={e => setPassword(e.target.value)} name="" id="" placeholder="Password" />
                    <button onClick={loginSubmit} className="login__button login__formButton">Login</button>
                    <hr/>
                </div>
            </div>

            <div className="signup__button">
                <p>Don't have an account?</p>
                <Link to="/signup"><button className="signupButton">Sign Up for MusicBook </button></Link>
            </div>
            
        </div>
    )
}

export default Login
