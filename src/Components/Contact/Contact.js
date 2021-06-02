import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import './Contact.css'
import ContactIcon from '../../Assets/ContactLogo.png'
import CollegeIcon from '../../Assets/College.png'
import CourseIcon from '../../Assets/Course.png'
import LocationIcon from '../../Assets/Location.png'
import PhoneIcon from '../../Assets/Phone.png'
import EmailIcon from '../../Assets/Email.png'
import TelegramIcon from '../../Assets/Telegram.png'

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <div className="contact_main">
            <div className="contact flex flex-col md:flex-row">
                <div className="contact_title">
                    <div className="logo pl-10 md:pl-5">
                        <img src={ContactIcon} alt="ContactIcon" />
                    </div>

                </div>

                <div data-aos="fade-right" className="contact_details_studies">
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

                <div data-aos="fade-left" className="contact_details_actual">
                    <div className="telegram_name">
                        <img src={TelegramIcon} alt="TelegramIcon" />
                        <h1>sphn1x</h1>
                    </div>

                    <div className="phone_name">
                        <img src={PhoneIcon} alt="PhoneIcon" />
                        <h1>+91 9606222530</h1>
                    </div>

                    <div className="email_name">
                        <img src={EmailIcon} alt="EmailIcon" />
                        <h1>vineethkm2000@gmail.com</h1>
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}

export default Contact