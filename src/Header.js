import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';

function Header() {

    const [{user}, dispatch] = useStateValue()
    console.log(user.name);

    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="header__left">
                    <img className="header__logo" src="https://cdn-images-1.medium.com/max/1000/1*T4QXG2XMVyWH2TgpKRseYA.png" alt="logo"/>
                    <p className="logo">MusicBook</p>
                </div>
            </Link>
            <div className="header__right">
                <p>Support</p>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <div className="header__rightLogin">
                        <AccountCircleIcon />
                        <p>
                            Login
                        </p>
                        
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
