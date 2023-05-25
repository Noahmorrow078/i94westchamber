import React from 'react';
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const ContactOne = () => {
    return (
        <>
            <div className="row mt--40 row--15 m--auto container-xxl justify-content-center">
            <h3>Contact Us</h3>
            <div className="col-lg-5 mt_md--30 mt_sm--30 mb--20 ">
                    <GoogleMapStyle />
                </div>
                <div className="col-lg-7 row">
                <div className="col-lg-6 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Phone</h4>
                                        <p><a href="tel:7634282921">763-428-2921</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email</h4>
                                        <p><a href="mailto:info@i94westchamber.org">info@i94westchamber.org</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12 mb--100">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>21310 John Milless Drive, Suite C, Rogers, MN 55374</p>
                                    </div>
                                </div>
                            </div>
                </div>
               
            </div>
        </>
    )
}
export default ContactOne;