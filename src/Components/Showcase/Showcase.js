import React from 'react'
import './Showcase.css'
import Underpixel from '../../Assets/Underpixel.jpg'
// import BG from '../../Assets/BG.jpg'
import Tools from '../../Assets/Tools.png'
import InstaLogoColor from '../../Assets/InstagramLogoColor.png'
import Show1Edit from '../../Assets/Showcase1Edit.jpg'
import Show1Original from '../../Assets/Showcase1Original.jpg'
import Show2Edit from '../../Assets/Showcase2Edit.jpg'
import Show2Original from '../../Assets/Showcase2Original.jpg'
import Show3Edit from '../../Assets/Showcase3Edit.jpg'
import Show3Original from '../../Assets/Showcase3Original.jpg'
import Show4Edit from '../../Assets/Showcase4Edit.jpg'
import Show4Original from '../../Assets/Showcase4Original.jpg'

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcase_container">
                <div className="insta_showcase">
                    <img src={InstaLogoColor} alt="InstaLogo" />
                    <div className="insta_details">
                        <div className="insta_id">
                            <img src={Underpixel} alt="Underpixel" />
                            <h1>underpixel</h1>
                        </div>
                        
                        <div className="insta_tools">
                            <img src={Tools} alt="Tools" />
                            <h1>Tools :</h1>
                        </div>

                        <h2>Photoshop &#38; Lightroom</h2>
                    </div>
                </div>

                <div className="insta_posts">
                    <a href="https://www.instagram.com/p/B0D9UHwlrqv/" className="pic1">
                        <img src={Show1Edit} alt="Pic1" className="show1edit" />
                        <img src={Show1Original} alt="Pic1" className="show1orig" />
                    </a>

                    <a href="https://www.instagram.com/p/B0OQwoJlo2y/" className="pic2">
                        <img src={Show2Edit} alt="Pic2" className="show2edit" />
                        <img src={Show2Original} alt="Pic2" className="show2orig" />
                    </a>

                    <a href="https://www.instagram.com/p/ByVM74Hl0g_/" className="pic3">
                        <img src={Show3Edit} alt="Pic3" className="show3edit" />
                        <img src={Show3Original} alt="Pic3" className="show3orig" />
                    </a>

                    <a href="https://www.instagram.com/p/BxkVEzfg4Is/" className="pic4">
                        <img src={Show4Edit} alt="Pic4" className="show4edit" />
                        <img src={Show4Original} alt="Pic4" className="show4orig" />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Showcase