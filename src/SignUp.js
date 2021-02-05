import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setdob] = useState(Date)

    const submitValue = () => {
        const details = {
            "Name": name,
            "Email": email,
            "Password": password,
            "DOB": dob
        }

        console.log(details);

        axios.post('http://localhost:3001/user', details).then(info => {
            console.log(info);
        })
    }

    return (
        <div className="signup">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="signup__logo">
                <img src="https://cdn-images-1.medium.com/max/1000/1*T4QXG2XMVyWH2TgpKRseYA.png" alt="logo"/>
                <p>MusicBook</p>
            </div>
            </Link>
            <hr/>
            <div className="signup__box">
                <h2>Sign Up for free to Start listening.</h2>
                <button className="signup__fb">Continue with Facebook</button>
                <div className="signup__form">
                <label htmlFor="">What's your Email?</label>
                <input type="email" onChange={e => setEmail(e.target.value)} name="" id="" placeholder="Enter your Email" />
                <label htmlFor="">Create a Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} name="" id="" placeholder="Enter your Password" />
                <label htmlFor="">What should we call you?</label>
                <input type="text" onChange={e => setName(e.target.value)} name="" id="" placeholder="Enter a profile name" />
                <label htmlFor="">What's your date of birth?</label>
                <input type="date" onChange={e => setdob(e.target.value)} name="" id=""/>
                <button onClick={submitValue} className="signup__formButton">Sign Up</button>                
            </div>
            <div className="signup__loginredirect">
                <p>
                    Have an Account? <Link to="/login" className="loginLink" > Login</Link>.
                </p>
            </div>
            </div>
            
            
        </div>
    )
}

export default SignUp
