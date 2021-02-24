import { Avatar } from '@material-ui/core';
import React from 'react';
import { useStateValue } from './StateProvider';
import './User.css'

function User() {

    const[{user}, dispatch] = useStateValue()

    return (
        <div className="user">
            <div className="user__upper">
                <div className="user__upperLeft">
                    <h1>Music without Limits</h1>
                    <p>Premium lets you listen anytime, even offline. No restrictions. No ads.</p>
                    <button disabled>Premium</button>
                </div>
                <div className="user__upperRight">
                    <img src="https://www.scdn.co/i/account/overview/iphone-ddd9e69.png" alt=""/>
                </div>
            </div>
            <div className="user__lower">
                <div className="user__avatar">
                    <Avatar className="e-avatar-xlarge" src={user ? user.photoURL : ''} />
                </div>
                <div className="user__details">
                    <h1>Account Overview</h1>
                    <h2>Profile</h2>
                    <p><span className="user__title">UserID</span> <span className="user__result">{user ? user.uid: ''}</span></p>
                    <hr/>
                    <p><span className="user__title">Name</span> <span className="user__result">{user ? user.displayName: ''}</span></p>
                    <hr/>
                    <p><span className="user__title">Email</span> <span className="user__result">{user ? user.email: ''}</span></p>
                    <hr/>
                </div>                    
            </div>
        </div>
    )
}

export default User
