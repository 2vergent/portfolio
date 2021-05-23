import React from 'react'
import './Welcome.css'
import DP from '../../Assets/testdp.jpg'


const Welcome = () => {
    return (
        <div className="welcome">
            <div className="pic_name">
                <img src={DP} alt="DP"></img>
                <h1>Vineeth Kumar</h1>
                <h2>Coder &nbsp;|&nbsp; Tech Enthusiast &nbsp;|&nbsp; Gamer</h2>
            </div>
        </div>
    )
}

export default Welcome