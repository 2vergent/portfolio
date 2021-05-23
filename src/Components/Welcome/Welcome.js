import React from 'react'
import './Welcome.css'
import DP from '../../Assets/MyPicture.jpg'
import GitLogo from '../../Assets/GithubLogo.jpg'
import YTLogo from '../../Assets/YoutubeLogo.png'
import InstaLogo from '../../Assets/InstagramLogo.jpg'


const Welcome = () => {
    return (
        <div className="welcome">
            <div className="pic_name">
                <img src={DP} alt="DP" className="avatar"></img>
                <h1>Vineeth Kumar</h1>
                <h2>Avid Coder &nbsp;&nbsp;|&nbsp;&nbsp; Tech Enthusiast &nbsp;&nbsp;|&nbsp;&nbsp; Photo Editor</h2>
                <div className="links">
                    <img src={GitLogo} alt="GithubLogo" className="link_github"></img>
                    <img src={YTLogo} alt="YoutubeLogo" className="link_youtube"></img>
                    <img src={InstaLogo} alt="InstagramLogo" className="link_instagram"></img>
                </div>
            </div>
        </div>
    )
}

export default Welcome