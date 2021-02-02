import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
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
                <input type="email" name="" id="" placeholder="Enter your Email" />
                <label htmlFor="">Create a Password</label>
                <input type="password" name="" id="" placeholder="Enter your Password" />
                <label htmlFor="">What should we call you?</label>
                <input type="text" name="" id="" placeholder="Enter a profile name" />
                <label htmlFor="">What's your date of birth?</label>
                <input type="date" name="" id=""/>
                <button className="signup__formButton">Sign Up</button>                
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
