import React from "react";
import './VideoCard.css';
import imgs from '../../assets/imgs';

interface Props {
    linkMiniatura: string;
    linkProfile: string;
    nickname: string;
    key: number;
    title: string;
}

const VideoCard = ({ linkMiniatura, linkProfile, nickname, key, title}: Props) => {

  return (
    <div className="video_card">
        <div className="poster">
            <div className="overlay">
            </div>
            <img src={linkMiniatura} alt=""/>
        </div>
        <div className="video_description">

            <div className="profile_image">
                <div className="img_box">
                    <img src={linkProfile} alt=""/>
                </div>
            </div>
            <div className="extra_content">
                <div className="video_title">
                    <h5>{title}</h5>
                </div>
                <div className="video_auxiliar">
                    <div className="nickname">@{nickname}</div>
                    <div className="separator">-</div>
                    <div className="settings">Post Settings</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default VideoCard;
