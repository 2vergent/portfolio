import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import Aos from "aos"
import "aos/dist/aos.css"
import './Welcome.css'
import DP from '../../Assets/MyPicture.jpg'
import GitLogo from '../../Assets/GithubLogoModified.png'
import GitLogoColor from '../../Assets/GithubLogoColorModified.png'
import YTLogo from '../../Assets/YoutubeLogoModified.png'
import YTLogoColor from '../../Assets/YoutubeLogoModifiedColor.png'
import InstaLogo from '../../Assets/InstagramLogo.png'
import InstaLogoColor from '../../Assets/InstagramLogoColor.png'


const Welcome = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, anchorPlacement: "bottom-bottom" });
    }, []);
    return (
        <div className="main_welcome">
            <h1>Welcome</h1>
            <div className="welcome">
                <div data-aos="fade-up" className="pic_name sm:text-sm md:text-lg">
                    <img src={DP} alt="DP" className="avatar" />
                    <h1>Vineeth Kumar</h1>
                    <h2>
                        <Typewriter
                            options={{
                                strings: ['Photo Editor', 'Avid Coder', 'Youtuber' ,'Tech Enthusiast'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>

                    <div className="links">
                        <a href="https://github.com/2vergent">
                            <img src={GitLogo} alt="GithubLogo" className="link_github" />
                            <img src={GitLogoColor} alt="GithubLogoColor" className="link_github" />
                        </a>

                        <a href="https://www.youtube.com/channel/UCrY2EjtxWozHOP2pflkM9JQ">
                            <img src={YTLogo} alt="YoutubeLogo" className="link_youtube" />
                            <img src={YTLogoColor} alt="YoutubeLogoColor" className="link_youtube" />
                        </a>

                        <a href="https://www.instagram.com/underpixel/">
                            <img src={InstaLogo} alt="InstagramLogo" className="link_instagram" />
                            <img src={InstaLogoColor} alt="InstagramLogoColor" className="link_instagram" />
                        </a>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Welcome