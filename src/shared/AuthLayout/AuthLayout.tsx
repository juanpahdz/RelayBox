import React from 'react'
import './AuthLayout.css'
import imgs from '../../assets/imgs'


interface Props{}

const AuthLayout : React.FunctionComponent<Props> = props => {
    return (
        <div className="auth_box">
            <div className="overlay"></div>

            <div className="content_box">
                <div className="baner">
                    <img src={imgs.login} alt=""/>
                </div>
                <div className="content">
                    <h2>RelayBox</h2>
                    <span className="intro">looking to save all value information in one place?</span>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
