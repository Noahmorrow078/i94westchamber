import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiArrowRight } from 'react-icons/fi';
import TestimonialMain from '../elements/testimonial/TestimonialMain';
import TeamThree from '../elements/team/TeamThree';
const JoinNow = () => {

    const aboutItems = [
        {title:'Professionalism', text:'We will exhibit attributes of highly regarded professionals and offer our talent and expertise for the betterment of our community'},
        {title:'Leadership', text:'We will be true to our role as a business leader in our region and be a model to others in our community. We will properly use our influence to ensure the relevance of our organization and the continued success of our region.'},
        {title:'Engagement', text:'We will create opprotunities for cooperation and inclusion in our community. We will work towards a common vision.'},
        {title:'Advocacy', text:'We will advocate on behald of our members for the fair and equitable enviroment that empowers business towards success.'},
        {title:'Professionalism', text:'We will exhibit attributes of highly regarded professionals and offer our talent and expertise for the betterment of our community'},
        {title:'Education', text:'We will offer worthwhile educational opportunities for our members and community that offer insights into personal and professional growth.'},

    ]

    return (
        <>
            <SEO title="Team || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    
                    rootUrl="/"
              
                    BackgroundImage={`${process.env.PUBLIC_URL}/images/bg/bg.jpg`}
                />
                <div className="main-content">


                <div className="container mt--30">
                <div className="row row--30 align-items-top">

                    <div className="col-lg-5">
                        <h2 className="title mb--100">Testimonials</h2>
                        <TestimonialMain/>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                    <h2 className="title">Values</h2>

                                    <ul className="list-numbers">
                                        {aboutItems.map((item, index) => (
                                             <li><span className="number">0{index + 1}</span>
                                              <h4>{item.title}</h4>
                                              <p>{item.text}</p>
                                             </li>
                                        ))}
                                       
                                    </ul>
                            
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row row--30">
                    <TeamThree teamStyle="team-style-default"/>
                </div>

            </div>   
                 
                </div>
            </Layout>
        </>
    )
}
export default JoinNow;