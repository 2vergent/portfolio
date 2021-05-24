import React from 'react'
import './Interests.css'

const Interest = () => {
    return (
        <div className="interests">
            <div className="interests_title">
                <h1>Interests</h1>
            </div>
            <div className="skills">
                <div className="skills_photo">
                    <h2>Photo Editing</h2>
                    <h2>Photo Retouching and Artistic Manipulations</h2>
                    <h2>Tools - Photoshop and Lightroom</h2>
                    <h2>Underpixel - Photo Editing page on Instagram</h2>
                </div>
                <div className="skills_video">
                    <h2>Video Editing</h2>
                    <h2>Making Gaming Montages and Funny Moments Videos</h2>
                    <h2>Tools - After Effects and Premiere Pro</h2>
                    <h2>sphn1x - Youtube Channel</h2>
                </div>
                <div className="skills_hobbies">
                    <h2>Hobbies</h2>
                    <h2>Coding</h2>
                    <h2>Watching Movies</h2>
                    <h2>Making Youtube videos</h2>
                </div>
            </div>
        </div>
    )
}

export default Interest