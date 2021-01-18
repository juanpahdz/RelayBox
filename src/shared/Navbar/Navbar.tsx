import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="navbar navbar_container">
                <div className="main_title">
                    BEST VIDEO STORAGE <br /> 
                    <span>Get in your own a personal video database</span> 
                </div>

                <div className="profile_section">
                    <div className="profile_image">
                        
                    </div>
                    <div className="username_box">
                        
                    </div>
                    <div className="interactions">
                        
                    </div>
                </div>

                <div className="navigation">
                    
                    <nav className="nav_menu">
                        <Link to="/"> <li className="nav_item active">All Videos</li> </Link>
                        <Link to="/"> <li className="nav_item">Add a New Video</li> </Link>
                        <Link to="/"> <li className="nav_item">Notifications</li> </Link>
                        <Link to="/"> <li className="nav_item">Get Profile QR</li> </Link>
                    </nav>
                </div>

                <div className="account_section">
                    <div className="nav_menu">
                        <Link to="/"> <li className="nav_item active">Log Out <span>Michael</span> </li> </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
