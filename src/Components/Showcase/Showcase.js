import React, { useEffect } from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
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
                    <ReactCompareSlider className="pic1" onlyHandleDraggable="true"
                        itemOne={<ReactCompareSliderImage src={Show1Edit} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={Show1Original} alt="Image two" />}
                    />

                    <ReactCompareSlider className="pic2" onlyHandleDraggable="true"
                        itemOne={<ReactCompareSliderImage src={Show2Edit} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={Show2Original} alt="Image two" />}
                    />

                    <ReactCompareSlider className="pic3" onlyHandleDraggable="true"
                        itemOne={<ReactCompareSliderImage src={Show3Edit} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={Show3Original} alt="Image two" />}
                    />

                    <ReactCompareSlider className="pic4" onlyHandleDraggable="true"
                        itemOne={<ReactCompareSliderImage src={Show4Edit} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={Show4Original} alt="Image two" />}
                    />

                </div>
            </div>
        </div>
    )
}

export default Showcase