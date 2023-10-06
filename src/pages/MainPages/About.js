import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import TestimonialMain from '../../elements/testimonial/TestimonialMain';
import TeamThree from '../../elements/team/TeamThree';
import { FiMail} from "react-icons/fi";

const About = () => {

    const aboutItems = [
        {title:'Professionalism', text:'We will exhibit attributes of highly regarded professionals and offer our talent and expertise for the betterment of our community'},
        {title:'Leadership', text:'We will be true to our role as a business leader in our region and be a model to others in our community. We will properly use our influence to ensure the relevance of our organization and the continued success of our region.'},
        {title:'Engagement', text:'We will create opprotunities for cooperation and inclusion in our community. We will work towards a common vision.'},
        {title:'Advocacy', text:'We will advocate on behalf of our members for the fair and equitable enviroment that empowers business towards success.'},
        {title:'Education', text:'We will offer worthwhile educational opportunities for our members and community that offer insights into personal and professional growth.'},
    ]

    const boardOfDirectors = [
        {
          image: '/images/headshots/SarahBecker',
          name: 'Sarah Becker',
          designation: 'Chair',
          company: 'Clear Simple Business',
        },
        {
          image: '#',
          name: 'Steve Schrunk',
          designation: 'Vice President',
          company: 'Kelly\'s Diamond Realty'
        },
        {
          image: '#',
          name: 'Lynn Jurrens',
          designation: 'Treasurer',
          company: 'Jurrens & Associates'
        },
        {
          image: '#',
          name: 'Brett Angell',
          designation: '',
          company: 'City of Rogers'
        },
        {
          image: '#',
          name: 'Bill Carrington',
          designation: '',
          company: 'Voyageur Real Estate Group'
        },
        {
          image: '#',
          name: 'Kelly Eull',
          designation: '',
          company: 'Henningson & Snoxell'
        },
        {
          image: '#',
          name: 'Steve Curtis',
          designation: '',
          company: 'Express Employment Professionals'
        },
        {
          image: '#',
          name: 'Derek Larson',
          designation: '',
          company: 'Edward Jones'
        },
        {
          image: '#',
          name: 'Vinita Steffl',
          designation: '',
          company: 'Acumen Business Solutions'
        },
        {
          image: '#',
          name: 'Nick Christoff',
          designation: '',
          company: 'Thrivent Financial'
        },
        {
          image: '#',
          name: 'Alyssa Weidendorf',
          designation: '',
          company: 'Falcon National Bank'
        },
        {
          image: '#',
          name: 'Bob Streitz',
          designation: '',
          company: 'SWBC Mortgage'
        }
      ];

      const advisors = [
        {
          image: '#',
          name: 'David Carlson',
          designation: '',
          company: 'Tegrete Corporation'
        },
        {
          image: '#',
          name: 'Bob Schlichte',
          designation: 'Professional Speaker',
          company: ''
        },
        {
          image: '#',
          name: 'Amy Valek',
          designation: '',
          company: 'J&B Group'
        },
        {
          image: '#',
          name: 'Dawn Sperr',
          designation: '',
          company: 'Equity Source Mortgage'
        },
        {
          image: '#',
          name: 'Greg Anzelc',
          designation: '',
          company: 'Experience Maple Grove'
        }
      ];

    return (
        <>
            <SEO title="About | I94 West Chamber" />
            <Layout>
                <BreadcrumbOne 
                    
                    rootUrl="/"
              
                    BackgroundImage={`${process.env.PUBLIC_URL}/images/bg/bg.jpg`}
                />
                <div className="main-content">


                <div className="container mt--30">
                <div className="row row--30 align-items-top">

                    <div className="col-lg-5">
                        <h2 className="title  m-center orange">Our Mission:</h2>
                        <p className="mb--50">The mission of the I-94 West Chamber of Commerce is to promote partnerships between businesses, government and community, providing information and resources, with the goal of creating a positive environment for the I-94 West Chamber of Commerce communities.</p>

                        <h2 className="title m-center orange">Our Vision:</h2>
                        <p>To be a driving force in the development of commerce and to improve the quality of life in the greater I-94 West Chamber of Commerce region through education, avocation, and connection.

</p>

                    <div className="mini-contact">
                      <img src={`${process.env.PUBLIC_URL}/images/president.jpg`}/>

                      <div style={{'listStyleType':'none', 'color':'black'}}>
                        <h2 className="title  m-center orange">Get In Contact</h2>
                        <li><a href="mailTo:mindy@i94westchamber.org"><FiMail/> mindy@i94westchamber.org</a></li>
                        <br/>
                        <li><a href="https://goo.gl/maps/CW3dWamDwmGosK9U9" target="_BLANK"><FiMapPin/> 21310 John Milless Drive, Suite C, Rogers, MN 55374

</a></li>
                      </div>

                    </div>

                    </div>


                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                    <h2 className="title">Values</h2>

                                    <ul className="list-numbers">
                                        {aboutItems.map((item, index) => (
                                             <li key={`${index}_${item.title}`}><span className="number">0{index + 1}</span>
                                              <h4>{item.title}</h4>
                                              <p>{item.text}</p>
                                              
                                             </li>
                                        ))}
                                       
                                    </ul>
                            
                            </div>
                        </div>
                    </div>

                    

                </div>

                <div className="row row--30 mt--100">
                    <h2 className="title-2 center">Meet The Board</h2>
                    <TeamThree teamStyle="team-style-default" teamData={boardOfDirectors}/>
                </div>
                <div className="row row--30 mt--40 mt--100 mb--100">
                    <h2 className="title-2 center">Advisors</h2>
                    <TeamThree teamStyle="team-style-default" teamData={advisors}/>
                </div>

            </div>   
                 
                </div>
            </Layout>
        </>
    )
}
export default About;