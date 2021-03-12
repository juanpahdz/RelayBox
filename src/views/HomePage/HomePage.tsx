import React from 'react'
import { isConstructorDeclaration } from 'typescript'
import './HomePage.css'

import imgs from '../../assets/imgs'

const HomePage = () => {


    return (
        <div className="App">
            <div className="app_header">
                <div className="search_bar">
                    <img className="input_icon" src={imgs.search_icon} alt=""/>
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="add_new_video">
                    <button className="btn btn_primary"><img className="item_icon" src={imgs.add_new_video_white} />Add New Video</button>
                </div>
            </div>

            <div className="videos_deck">
                <div className="video_card">
                    <div className="poster">
                        <div className="overlay">
                        </div>
                        <img src="" alt=""/>
                    </div>
                    <div className="video_description">
                        <div className="profile_image">
                            <div className="img_box">
                                <img src={imgs.profile} alt=""/>
                            </div>
                        </div>
                        <div className="extra_content">
                            <div className="video_title">
                                <h5>How to make best Thumnails Ever</h5>
                            </div>
                            <div className="video_auxiliar">
                                <div className="nickname">@michaelmooreedit</div>
                                <div className="settings">Post Settings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
