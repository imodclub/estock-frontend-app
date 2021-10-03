import React from 'react'

const Footer =(props)=>{
    return (
        <div>
            <h3>{props.title} &copy;{new Date().getFullYear()}</h3>
        </div>
    )
}

export default Footer
