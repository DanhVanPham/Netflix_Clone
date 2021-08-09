import React from 'react'
import './Nav.css';
// https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024
function Nav() {
    return (
        <div className="nav nav__black">
            <div className="nav__contents">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix-Logo" className="nav__logo" />
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt="avatar" className="nav__avatar" />
            </div>
        </div>
    )
}

export default Nav
