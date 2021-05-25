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
                    <h1>Photo Editing</h1>
                    <h2>&#47;&#47; Photo Retouching</h2>
                    <h2>&#47;&#47; Artistic Photo Manipulations</h2>
                    <h2>&#47;&#47; Underpixel - Instagram Page</h2>
                </div>
                <div className="skills_video">
                    <h1>Video Editing</h1>
                    <h2>&#47;&#47; Gaming Montages</h2>
                    <h2>&#47;&#47; Funny Moments Videos</h2>
                    <h2>&#47;&#47; sphn1x - Youtube Channel</h2>
                </div>
                <div className="skills_hobbies">
                    <h1>Hobbies</h1>
                    <h2>&#47;&#47; Coding</h2>
                    <h2>&#47;&#47; Watching Movies</h2>
                    <h2>&#47;&#47; Making Youtube videos</h2>
                </div>
            </div>
        </div>
    )
}

export default Interest