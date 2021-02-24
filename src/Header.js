import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const history = useHistory()

    const [{user}, dispatch] = useStateValue();

    const userLogout = () => {
        auth.signOut()
    }

    const showDetails = () => {
        history.push('/account/overview')
    }

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
                {!user ? <Link to="/login" style={{ textDecoration: 'none' }}>
                    <div className="header__rightLogin">
                        <AccountCircleIcon />
                        <p>Login</p>
                    </div>
                </Link> :
                <div className="header__rightLogout">
                    <AccountCircleIcon />
                    <p onClick={userLogout}>Logout</p>
                </div>
                }
                <div onClick={showDetails} className="username">
                    {!user ? '' : user.displayName}
                </div>
            </div>
        </div>
    )
}

export default Header
