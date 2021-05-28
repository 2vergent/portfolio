import React, { useEffect } from 'react'
import './Showcase.css'
import Aos from "aos"
import "aos/dist/aos.css"
import Tools from '../../Assets/Tools.png'
import InstaColor from '../../Assets/InstagramLogoColor.png'
import ShowcaseLogo from '../../Assets/ShowcaseLogo.png'
import Show1Edit from '../../Assets/Showcase1Edit.jpg'
import Show1Original from '../../Assets/Showcase1Original.jpg'
import Show2Edit from '../../Assets/Showcase2Edit.jpg'
import Show2Original from '../../Assets/Showcase2Original.jpg'
import Show3Edit from '../../Assets/Showcase3Edit.jpg'
import Show3Original from '../../Assets/Showcase3Original.jpg'
import Show4Edit from '../../Assets/Showcase4Edit.jpg'
import Show4Original from '../../Assets/Showcase4Original.jpg'

const Showcase = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, mirror: true });
    }, []);
    return (
        <div className="showcase">
            <div className="showcase_container">
                <div className="insta_showcase flex flex-col md:flex-row">
                    <div className="instalogo flex w-60 pl-10 md:w-[14%] md:pl-0">
                        <img src={ShowcaseLogo} alt="InstaLogo" />
                    </div>
                    <div data-aos="fade-right" className="insta_details">
                        <div className="insta_id">
                            <img src={InstaColor} alt="Underpixel" />
                            <h1>underpixel</h1>
                        </div>
                        
                        <div className="insta_tools">
                            <img src={Tools} alt="Tools" />
                            <h1>Tools :</h1>
                        </div>

                        <h2>Photoshop &#38; Lightroom</h2>
                    </div>
                </div>

                <div data-aos="fade-left" className="insta_posts flex flex-col pl-2 space-y-5 md:flex-row md:space-y-0 md:pl-0">
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