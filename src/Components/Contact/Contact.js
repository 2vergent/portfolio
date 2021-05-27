import React from 'react'
import './Contact.css'
import ContactIcon from '../../Assets/ContactLogo.png'
import CollegeIcon from '../../Assets/College.png'
import CourseIcon from '../../Assets/Course.png'
import LocationIcon from '../../Assets/Location.png'

const Contact = () => {
    return (
        <div className="contact_main">
            <div className="contact flex flex-col md:flex-row">
                <div className="contact_title">
                    <div className="logo flex w-60 pl-10 md:w-[90%] md:pl-0">
                        <img src={ContactIcon} alt="ContactIcon" />
                    </div>
                </div>
                <div className="contact_details_studies">
                    <div className="college_name">
                        <img src={CollegeIcon} alt="CollegeIcon" />
                        <h1>PES University, South Campus</h1>
                    </div>

                    <div className="course_name">
                        <img src={CourseIcon} alt="CourseIcon" />
                        <h1>B.Tech, Mechanical Engineering</h1>
                    </div>

                    <div className="location_name">
                        <img src={LocationIcon} alt="LocationIcon" />
                        <h1>Bengaluru, Karnataka, India</h1>
                    </div>

                </div>
                {/* <div className="contact_details_actual">
                    <h1>+91 9606222530</h1>
                    <h1>vineethkm2000@gmail.com</h1>
                </div> */}
            </div>
        </div>
    )
}

export default Contact