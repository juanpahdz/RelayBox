import React from 'react'
import { isConstructorDeclaration } from 'typescript'
import './HomePage.css'
import VideoCard from '../../shared/VideoCard/VideoCard'
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
            <div className="filters">
                <div className="title">
                    <h3>Last Videos Added</h3>
                </div>
            </div>
            <div className="videos_deck">
                <VideoCard 
                    key={123} 
                    title="How to make best Thumnails Ever"
                    linkMiniatura={imgs.Miniatura} 
                    linkProfile={imgs.profile} 
                    nickname="michaelmooreedit"
                />

                <VideoCard 
                    key={123} 
                    title="How to make best Thumnails Ever"
                    linkMiniatura={imgs.Miniatura} 
                    linkProfile={imgs.profile} 
                    nickname="michaelmooreedit"
                />
             
                
              </div>
        </div>
    )
}

export default HomePage
