import React from 'react'
import './Welcome.css'
import DP from '../../Assets/MyPicture.jpg'
import GitLogo from '../../Assets/GithubLogo.jpg'
import GitLogoColor from '../../Assets/GithubLogoColor.jpg'
import YTLogo from '../../Assets/YoutubeLogo.jpg'
import YTLogoColor from '../../Assets/YoutubeLogoColor.jpg'
import InstaLogo from '../../Assets/InstagramLogo.jpg'
import InstaLogoColor from '../../Assets/InstagramLogoColor.jpg'


const Welcome = () => {
    return (
        <div className="welcome">
            <div className="pic_name">
                <img src={DP} alt="DP" className="avatar"></img>
                <h1>Vineeth Kumar</h1>
                <h2>Avid Coder &nbsp;&nbsp;|&nbsp;&nbsp; Tech Enthusiast &nbsp;&nbsp;|&nbsp;&nbsp; Photo Editor</h2>
                <div className="links">
                    <a href="https://github.com/2vergent">
                        <img src={GitLogo} alt="GithubLogo" className="link_github" />
                        <img src={GitLogoColor} alt="GithubLogoColor" className="link_github" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCrY2EjtxWozHOP2pflkM9JQ">
                        <img src={YTLogo} alt="YoutubeLogo" className="link_youtube" />
                        <img src={YTLogoColor} alt="YoutubeLogo" className="link_youtube" />
                    </a>
                    <a href="https://www.instagram.com/underpixel/">
                        <img src={InstaLogo} alt="InstagramLogo" className="link_instagram" />
                        <img src={InstaLogoColor} alt="InstagramLogo" className="link_instagram" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Welcome