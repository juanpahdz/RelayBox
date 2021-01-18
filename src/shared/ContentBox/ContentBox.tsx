import React from 'react'
import './ContentBox.css'

interface MyProps{}

const ContentBox : React.FunctionComponent<MyProps> = props => {

    return (
        <div className="dit it">
            {props.children}
        </div>
    )
}

export default ContentBox
