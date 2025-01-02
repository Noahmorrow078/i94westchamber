import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import {Link} from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi';
const Scholarship = () => {
    return (
        <>
            <SEO title="Title" />
            <Layout>
                <BreadcrumbOne 
                    title="Scholarship Program"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Scholarship"
                />
                <div className="main-content">

                <div class="container mt--100 mb--100">
                <div className="row row--30 align-items-center">
                    <div className="col-md-6 col-sm-12 mb--20">
                        
                            <h2 className="title">Putting Education First</h2>
                            <p>The I-94 West Chamber of Commerce is proud to once again offer a limited number of scholarships to graduating seniors in our chamber communities..</p>
                            <br/>
                            <img className="w-100" src="../images/i94-scholarship-program.jpg" alt="About Images" />
                            <p style={{"marginTop":"20px"}}><i>Special thanks to our generous business scholarship supporters! Thank you to Henningson & Snoxxell LTD., Jurrens Associates, and Thrivent - Nick Christoff, JB Group and many more for supporting local youth secondary education!</i></p>

                           
                       </div>
                        <div class="col-md-6 col-sm-12 mb--20">
                        <h3>Eligibility</h3>
                            <p>
                                To be eligible for a scholarship, the applicant must live in or attend school in one of the following cities: Albertville, Corcoran, Dayton, Hanover, Maple Grove, Osseo, Otsego, Rogers, or St. Michael.
                                Applicants must hold a minimum GPA of 3.0 and must provide a transcript as well as three letters of recommendation from non-family members. <br/><br/>
                                Applicants must illustrate qualities of leadership, community service, and character.
                            </p>
                            <p>Additional information will be considered, including:</p>
                            <ul>
                                <li>Quality of application materials</li>
                                <li>Extracurricular activities</li>
                                <li>Leadership positions</li>
                            </ul>
                            <a href="https://forms.gle/VWynscyg3YAhjKQX7" className="btn-default btn-icon" target="_Blank">Submit Application<i className="icon"><FiArrowRight /></i></a>
                        </div>
                    </div>
                </div>
            </div>

           
            </Layout>
        </>
    )
}
export default Scholarship;