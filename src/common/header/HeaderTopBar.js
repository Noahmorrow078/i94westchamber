import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiChevronRight, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom'

const HeaderTopBar = () => {
    return (
        <div className="header-top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-12 col-12">
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="header-left">
                            <p><a href="https://business.i94westchamber.org/member/newmemberapp">Become a Member now! <FiChevronRight /></a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="header-right">
                            <div className="address-content">
                                <p><FiMapPin /><span>Rogers, MN 55374</span></p>
                                <p><FiPhone /><span><a href="tel:7634282921">763-428-2921</a></span></p>
                            </div>
                            <div className="social-icon-wrapper">
                                <ul className="social-icon social-default icon-naked">
                                    <li><Link to="https://www.facebook.com/I94West" target="_blank"><FiFacebook /></Link></li>
                                    <li><Link to="https://twitter.com/I94West" target="_blank"><FiTwitter /></Link></li>
                                    <li><Link to="https://www.instagram.com/i94westchamber/" target="_blank"><FiInstagram /></Link></li>
                                    <li><Link to="https://www.linkedin.com/company/i-94-west-chamber-of-" target="_blank"><FiLinkedin /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopBar;
