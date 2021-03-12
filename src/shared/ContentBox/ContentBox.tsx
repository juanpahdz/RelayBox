import React from 'react'
import './ContentBox.css'

interface MyProps{}

const ContentBox : React.FunctionComponent<MyProps> = props => {
    const width = 515
    const box_style ={
        width: `calc(100% - ${width}px)`    
    }


    return (
        <div className="content_box" style={box_style}>
            {props.children}
        </div>
    )
}

export default ContentBox
