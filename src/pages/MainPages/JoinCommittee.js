import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import {Link} from "react-router-dom";

const JoinCommittee = () => {
    return (
        <>
            <SEO title="Join a Committee" />
            <Layout>
          
                <div className="main-content">

                <div class="container mt--30">
                <div class="row row--30 align-items-top mb--100 mt--50">
                    <div class="col-lg-5">
                        <img class="mag" src="./images/about/social1.png" alt=" "/>
                    </div>
                        
                    <div class="col-lg-7 mt_md--30 mt_sm--30">
                        <h3>Join a Committee</h3>
                        <p>We like to say that the chamber will work with you, but not for you. One of the best ways to get involved with the chamber is to join one of our many committees. These committees include</p>

                        <ul class="list-numbers">
                            <li>
                                <h4>Ambassador Committee</h4>
                                <p>helps coordinate our monthly gatherings, ribbon cuttings, member drop-ins, and more! </p>
                            </li>

                            <li>
                                <h4>Event Committees</h4>
                                <p>help plan and execute our annual signature events including State of the Cities, First Responders, Circle of Excellence, Golf, and Annual Celebration.</p>
                            </li>

                            <li>
                                <h4>Young Professionals Committee</h4>
                                <p>plans and executes events for the chamber young professionals. </p>
                            </li>

                            <Link className="btn-default btn-large" to="#">Request to Join</Link>

                        </ul>
                     
                    </div>

                    </div>
                </div>
                </div>
            </Layout>
        </>
    )
}
export default JoinCommittee;