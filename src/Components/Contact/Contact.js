import React from 'react'
import './Contact.css'
import ContactIcon from '../../Assets/ContactIcon.png'

const Contact = () => {
    return (
        <div className="contact_main">
            <div className="contact">
                <div className="contact_title">
                    <img src={ContactIcon} alt="ContactIcon" />
                </div>
                {/* <div className="contact_details_studies">
                    <h1>College : PES University, South Campus</h1>
                    <h1>Course : B.Tech, Mechanical Engineering</h1>
                    <h1>Location : Bengaluru, Karnataka, India</h1>
                </div>
                <div className="contact_details_actual">
                    <h1>Phone : +91 9606222530</h1>
                    <h1>Email : vineethkm2000@gmail.com</h1>
                </div> */}
            </div>
        </div>
    )
}

export default Contact