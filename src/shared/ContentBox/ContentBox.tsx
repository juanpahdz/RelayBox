import React from 'react'
import './ContentBox.css'

interface Props{}

const ContentBox : React.FunctionComponent<Props> = props => {
    const width = 200
    const box_style ={
        width: `calc(100% - ${width}px)`    
    }


    return (
        <div className="white_space">
            <div className="content_box" style={box_style}>
                {props.children}
            </div>
        </div>
    )
}

export default ContentBox
