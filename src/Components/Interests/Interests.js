import React from 'react'
import './Interests.css'
import Show1Original from '../../Assets/Showcase1OriginalTest.jpg'
import Show1Edit from '../../Assets/Showcase1Edit.jpg'
import Show2Original from '../../Assets/Showcase2OriginalTest.jpg'
import Show2Edit from '../../Assets/Showcase2Edit.jpg'
import Show3Original from '../../Assets/Showcase3OriginalTest.jpg'
import Show3Edit from '../../Assets/Showcase3Edit.jpg'
import Synked from '../../Assets/Synked - Valorant Montage.mp4'
import SynkedThumbnail from '../../Assets/Synked Thumbnail.jpg'

const Interest = () => {
    return (
        <div className="interests">
            <div className="interests_title">
                <h1>Interests</h1>
            </div>
            <div className="skills flex flex-col md:flex-row text-sm md:text-lg">
                <div className="skills_photo">
                    <h1>Photo Editing</h1>
                    <h2>&#47;&#47;&nbsp; Photo Retouching</h2>
                    <h2>&#47;&#47;&nbsp; Artistic Photo Manipulations</h2>
                    <h2>&#47;&#47;&nbsp; Underpixel - Instagram Page</h2>
                </div>
                <div className="skills_video">
                    <h1>Video Editing</h1>
                    <h2>&#47;&#47;&nbsp; Gaming Montages</h2>
                    <h2>&#47;&#47;&nbsp; Funny Moments Videos</h2>
                    <h2>&#47;&#47;&nbsp; sphn1x - Youtube Channel</h2>
                </div>
                <div className="skills_hobbies">
                    <h1>Hobbies</h1>
                    <h2>&#47;&#47;&nbsp; Coding</h2>
                    <h2>&#47;&#47;&nbsp; Watching Movies</h2>
                    <h2>&#47;&#47;&nbsp; Making Youtube videos</h2>
                </div>
            </div>
            <div className="gallery_title">
                <h1>Gallery</h1>
            </div>
            <div className="gallery flex flex-col md:flex-row text-sm md:text-md">
                <div className="show1">
                    <a href="https://www.instagram.com/p/B0D9UHwlrqv/">
                        <img src={Show1Edit} alt="Pic 1 Edit" className="show1edit" />
                        <img src={Show1Original} alt="Pic 1 Original" className="show1original" />
                    </a>
                </div>
                <div className="show2">
                    <a href="https://www.instagram.com/p/B0OQwoJlo2y/">
                        <img src={Show2Edit} alt="Pic 2 Edit" className="show2edit" />
                        <img src={Show2Original} alt="Pic 2 Original" className="show2original" />
                    </a>
                </div>
                <div className="show3">
                    <a href="https://www.instagram.com/p/ByVM74Hl0g_/">
                        <img src={Show3Edit} alt="Pic 3 Edit" className="show3edit" />
                        <img src={Show3Original} alt="Pic 3 Original" className="show3original" />
                    </a>
                </div>
            </div>
            <div className="video">
                <video width="630" height="1190" controls poster={SynkedThumbnail}>
                    <source src={Synked} type="video/mp4" />
                </video>
            </div>
        </div> 
    )
}

export default Interest