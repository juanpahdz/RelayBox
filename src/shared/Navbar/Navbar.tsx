import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import imgs from '../../assets/imgs'


const Navbar = () => {
    return (
        <header>
            <div className="navbar navbar_container">
                <div className="close_btn"> </div>
                <div className="main_title">
                    <h4>
                        BEST VIDEO STORAGE<br/> 
                        <span>Get in your own a personal video database</span> 
                    </h4>
                </div>

                <div className="profile_section">

                    <div className="profile_image">
                        <div className="img_box">
                            <img src={imgs.profile} alt=""/>
                        </div>
                    </div>

                    <div className="username_box">
                        <div className="profile_name">
                            <h4>Michael Moore Jong</h4>
                        </div>
                        <div className="nickname">
                            <Link className="nickname_link no_decoration" to="/" >
                                @michaelmooredit
                            </Link>
                        </div>
                    </div>
                    <div className="interactions">
                        <button className="btn btn_rounded colorful">
                            Know about this project
                        </button>
                    </div>
                </div>

                <div className="navigation">
                    
                    <nav className="nav_menu">
                        <Link className="link_item no_decoration" to="/"> <li className="nav_item active"> <img className="item_icon" src={imgs.all_videos_active} />All Videos</li> </Link>
                        <Link className="link_item no_decoration" to="/"> <li className="nav_item"><img className="item_icon" src={imgs.add_new_video_white} /> Add a New Video</li> </Link>
                        <Link className="link_item no_decoration" to="/"> <li className="nav_item"><img className="item_icon" src={imgs.notifications_white} /> Notifications</li> </Link>
                        <Link className="link_item no_decoration" to="/"> <li className="nav_item"><img className="item_icon" src={imgs.get_profile_qr_white} /> Get Profile QR</li> </Link>
                    </nav>
                </div>

                <div className="account_section">
                    <div className="nav_menu">
                        <Link className="link_item no_decoration" to="/"> <li className="nav_item"> Log Out from <span className="active_user" >Michaelmooredit</span> </li> </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
