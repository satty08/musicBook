import React from 'react'
import './User.css'

function User() {
    return (
        <div className="user">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Email" />
            <label htmlFor="">Password</label>
            <input type="text" placeholder="Password"/>
            <button>Sign In</button>
        </div>
    )
}

export default User
