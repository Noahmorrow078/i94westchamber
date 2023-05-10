import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import { FiArrowRight } from 'react-icons/fi';
import TestimonialMain from '../../elements/testimonial/TestimonialMain';
import TeamThree from '../../elements/team/TeamThree';
const About = () => {

    const aboutItems = [
        {title:'Professionalism', text:'We will exhibit attributes of highly regarded professionals and offer our talent and expertise for the betterment of our community'},
        {title:'Leadership', text:'We will be true to our role as a business leader in our region and be a model to others in our community. We will properly use our influence to ensure the relevance of our organization and the continued success of our region.'},
        {title:'Engagement', text:'We will create opprotunities for cooperation and inclusion in our community. We will work towards a common vision.'},
        {title:'Advocacy', text:'We will advocate on behald of our members for the fair and equitable enviroment that empowers business towards success.'},
        {title:'Education', text:'We will offer worthwhile educational opportunities for our members and community that offer insights into personal and professional growth.'},
    ]

    const boardOfDirectors = [
        {
        image: 'team-04',
        name: 'Bill Carrington',
        designation: 'Chairperson',
        company: 'Voyageur Real Estate Group'
        },
        {
        image: 'team-05',
        name: 'Sarah Becker',
        designation: 'Vice Chairperson',
        company: 'Clear Simple Business'
        },
        {
        image: 'team-06',
        name: 'Kelly Eull',
        designation: 'Past Chairperson',
        company: 'Henningson & Snoxell, Ltd.'
        },
        {
        image: 'team-07',
        name: 'Steve Curtis',
        designation: 'Secretary',
        company: 'Express Employment Professionals'
        },
        {
        image: 'team-08',
        name: 'Nick Christoff',
        designation: '',
        company: 'Thrivent Financial'
        },
        {
        image: 'team-09',
        name: 'Dave Hanson',
        designation: '',
        company: 'CLAM Corporation'
        },
        {
        image: 'team-10',
        name: 'Lynn Jurrens',
        designation: '',
        company: 'Jurrens & Associates'
        },
        {
        image: 'team-11',
        name: 'Derek Larson',
        designation: '',
        company: 'Edward Jones'
        },
        {
        image: 'team-12',
        name: 'Bill McMullen',
        designation: '',
        company: 'Money Mailer'
        },
        {
        image: 'team-13',
        name: 'Steve Schrunk',
        designation: '',
        company: 'Kelly Diamond Realty'
        },
        {
        image: 'team-14',
        name: 'Mindy Smith',
        designation: '',
        company: 'Guardian Angels Senior Services'
        },
        {
        image: 'team-15',
        name: 'Alyssa Weidendorff',
        designation: '',
        company: 'Falcon National Bank'
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
                        <h2 className="title mb--100 m-center">Testimonials</h2>
                        <TestimonialMain/>
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
                    <h2 className="title-2 center">Annual Partners</h2>
                    <TeamThree teamStyle="team-style-default" teamData={boardOfDirectors}/>
                </div>

            </div>   
                 
                </div>
            </Layout>
        </>
    )
}
export default About;