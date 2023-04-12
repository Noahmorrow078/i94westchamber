import React from 'react';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from '../common/header/HeaderTopBar';
import HeaderBottomBar from '../common/header/HeaderBottomBar';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';
import EventList from '../elements/events/EventList';
import FeaturedEventList from '../elements/events/FeaturedEventList';
import SectionTitle from "../elements/sectionTitle/SectionTitle";

import AboutTwo from "../elements/about/AboutTwo";
import AboutThree from "../elements/about/AboutThree";
import Aspire from '../elements/about/Aspire';
import Social from '../elements/about/Social';
import Location from '../elements/about/Location'
import CounterUpTwo from "../elements/counterup/CounterUpTwo";

import Separator from "../elements/separator/Separator";
import TeamFour from '../elements/team/TeamFour';
import PricingTwo from '../elements/pricing/PricingTwo';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import Slider from '../elements/octoSlider/slider'

const Home = () => {
    return (
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                
                <div className="header-transparent-with-topbar">
                    <HeaderTopBar />
                    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />
                    <HeaderBottomBar />
                </div>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-start">
                                    <h4 className="subtitle"><span className="theme-gradient">I94 Networking Opprotunities</span></h4>
                                    <h1 className="title display-one">GROW YOUR BUSINESS</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> EDUCATE </li>
                                        <li><span className="icon"><FiCheck /></span> ADVOCATE </li>
                                        <li><span className="icon"><FiCheck /></span>CONNECT</li>
                                    </ul>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <button className="btn-default btn-icon" target="_blank" href="#link">JOIN THE CHAMBER<i className="icon"><FiArrowRight /></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        subtitle = "I94 Events"
                                        title = "MONTHLY GATHERINGS"
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
                                        subtitle = "I94 Events"
                                        title = "SIGNATURE EVENTS"
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
                    <Social/>
                <Separator />
                    <Aspire/>
                <Separator />  
                    <Location/>

                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}

export default Home
