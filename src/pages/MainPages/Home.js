import React from 'react';
import SEO from "../../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderBottomBar from '../../common/header/HeaderBottomBar';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';
import Copyright from '../../common/footer/Copyright';
import EventList from '../../elements/events/EventList';
import FeaturedEventList from '../../elements/events/FeaturedEventList';
import SectionTitle from "../../elements/sectionTitle/SectionTitle";

import AboutTwo from "../../elements/about/AboutTwo";
import AboutThree from "../../elements/about/AboutThree";
import Aspire from '../../elements/about/Aspire';
import Social from '../../elements/about/Social';
import SocialTwo from '../../elements/about/SocialTwo';

import Location from '../../elements/about/Location'
import CounterUpTwo from "../../elements/counterup/CounterUpTwo";

import Separator from "../../elements/separator/Separator";
import TeamFour from '../../elements/team/TeamFour';
import PricingTwo from '../../elements/pricing/PricingTwo';
import CalltoActionFive from '../../elements/calltoaction/CalltoActionFive';
import Slider from '../../elements/octoSlider/slider'

import ContactOne from '../../elements/contact/ContactOne';

const Home = () => {
    return (
        <>
            <SEO isHomePage={true} title="I-94 West Chamber of Commerce | Rogers MN" />
            <main className="page-wrapper">
                
                <div className="header-transparent-with-topbar">
                    <HeaderTopBar />
                    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />
                </div>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg.jpg)`}}>
                    <div className="container above-fold">
                        <h2 class="above-fold-text">We’re here to help you succeed</h2>
                        <a className="btn-default btn-icon m--auto"  href="https://business.i94westchamber.org/member/newmemberapp">JOIN NOW!<i className="icon"><FiArrowRight /></i></a>

                    </div>
                </div>
                {/* End Slider area  */}


                {/* Start event Area  */}
                <div className="rn-event-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                        <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        
                                        title = "Monthly Gatherings"
                                        description = ""
                                        color="dark"
                                        
                                    />
                     
                        <EventList/>
                    </div>
                </div>
                </div>
                {/* End event Area  */}


                
                {/* Start Featured event Area  */}
                <div className="rn-featured-event-area rn-section-gap">
                    <div className="container">
                        <div className="row">

                        <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        title = "Signature Events"
                                        description = ""
                                        color="dark"
                                        
                                    />
                     
                
                       
                        <FeaturedEventList />
                    </div>
                </div>
                </div>
                {/* End event Area  */}
                
                <Separator />
                    <AboutTwo />
                <Separator />
                    <AboutThree />
                <Separator />
                    <Slider/>
                <Separator />
                    <SocialTwo/>
                <Separator />
                    <Aspire/>
                <Separator />  
                    <ContactOne/>

                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}

export default Home
