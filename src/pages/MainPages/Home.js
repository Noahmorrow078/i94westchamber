import React from 'react';
import SEO from "../../common/SEO";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';
import Copyright from '../../common/footer/Copyright';
import EventList from '../../elements/events/EventList';
import FeaturedEventList from '../../elements/events/FeaturedEventList';
import SectionTitle from "../../elements/sectionTitle/SectionTitle";

import AboutTwo from "../../elements/about/AboutTwo";
import AboutThree from "../../elements/about/AboutThree";
import Aspire from '../../elements/about/Aspire';
import SocialTwo from '../../elements/about/SocialTwo';


import Separator from "../../elements/separator/Separator";

import Slider from '../../elements/octoSlider/slider'

import ContactOne from '../../elements/contact/ContactOne';
import ThirdPartyWidget from '../../elements/members/ThirdPartyWidget';

import AdSlider from '../../elements/ads/AdSlider';


const Home = () => {

    const ads = [
        {
            name: 'Falcon National Bank',
            image: '../../images/ad/FalconNationalBank.png',
            url: 'https://www.falconnational.com/'
        },
        {
            name: 'J&B Group ',
            image: '/images/ad/JBGroup.jpg',
            url: 'https://www.jbgroup.com/'
        },
        {
            name: 'Rogers Printing',
            image: '/images/ad/RogersPrinting.png',
            url: 'https://rogersprintingmn.com/'
        },
        {
            name: 'Franklin Outdoor Advertising',
            image: '/images/ad/FranklinOutdoor.jpg',
            url: 'https://www.franklinoutdoor.com/'
        }

       
      ];


    return (
        <>
            <SEO isHomePage={true} title="I-94 West Chamber of Commerce | Rogers MN" />
            <main className="page-wrapper">
                
                <div className="header-transparent-with-topbar">
                    <HeaderTopBar />
                    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />
                </div>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/background.jpg)`}}>
                    <div className="container above-fold">
                        <h2 class="above-fold-text">We’re here to help you succeed</h2>
                        <a className="btn-default btn-icon m--auto"  href="https://business.i94westchamber.org/member/newmemberapp">JOIN NOW!<i className="icon"><FiArrowRight /></i></a>

                    </div>
                </div>
                {/* End Slider area  */}

                <div className="row row--30 bg-white">
                    <div className="container bg-white pt--20">
                        <AdSlider teamStyle="team-style-default" teamData={ads}/>
                    </div>
                </div>

                {/* Start event Area  */}
                <div className="rn-event-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                        <SectionTitle
                                        textAlign = "text-left"
                                        radiusRounded = ""
                                        
                                        title = "Chamber Gatherings"
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
                    <ThirdPartyWidget/>
                <Separator />
                    <Slider/>
                <Separator />
                    <SocialTwo/>
                <Separator />
                    <Aspire/>
                <Separator />  
                    <ContactOne/>
                <Separator />  
               
                   
                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}

export default Home
