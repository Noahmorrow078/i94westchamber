import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiChevronRight, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom'

const HeaderTopBar = () => {
    let browser = '';

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        browser = 'opera';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser = 'chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browser = 'safari';
    } else {
        browser = 'chrome';
    }

    let linkHref = 'https://business.i94westchamber.org/member/newmemberapp';

    if (browser === 'safari') {
        linkHref = 'https://apps.apple.com/us/app/chambermaster/id635075410';
    } else if (browser === 'chrome') {
        linkHref = 'https://play.google.com/store/apps/details?id=chambermaster.droid&hl=en_US&gl=US';
    }

    return (
        <div className="header-top-bar ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-12 col-12">
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="header-left">
                            <p><a href={linkHref} target="_BLANK">Download the app!<FiChevronRight /></a></p>
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
                                    <li><a href="https://www.facebook.com/I94West" target="_blank"><FiFacebook /></a></li>
                                    <li><a href="https://twitter.com/I94West" target="_blank"><FiTwitter /></a></li>
                                    <li><a href="https://www.instagram.com/i94westchamber/" target="_blank"><FiInstagram /></a></li>
                                    <li><a href="https://www.linkedin.com/company/3839480" target="_blank"><FiLinkedin /></a></li>
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
