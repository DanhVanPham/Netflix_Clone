import React from 'react'
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__contents">
                <img src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
                    alt="Netflix-Logo" className="nav__Logo" />
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt="avatar" className="nav__avatar" />
            </div>
        </div>
    )
}

export default Nav
