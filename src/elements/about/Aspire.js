import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";


const Aspire = () => {
    return (
        <div className="rwt-aspire-area rn-section-gap" style={{backgroundColor: 'white', 'position':'relative','overflow':'hidden'}}>
            <div className="container">
                <div className="row row--30 align-items-center">

                <div className="col-lg-6">
                      
                            <img className="mag magazine" src="./images/about/magazine.png" alt="Aspire Guide" />
                       
                    </div>
              

                    <div className="col-lg-6 mt_md--30 mt_sm--30">

                    <div className="aspire-text">

                                  <img className="mag   d-none d-md-block mb--40" src="./images/about/aspire_logo.png" alt="Aspire Logo" style={{maxWidth:'450px',margin:'auto'}} />
                      
                  

                    <p style={{color:'black',padding:'10px'}}>
                    We self-publish our annual publication which includes print distribution to our membership and within our chamber communities. We also have a significant digital and social media distribution network. To advertise in our annual publication <a href="mailTo:abby@i94westchamber.com" style={{color:'var(--blue)'}}>click here</a>.
                    </p>
    
                    <a href="/aspire-guide" className="btn-default btn-icon m--auto">View Now!<i className="icon"><FiArrowRight /></i></a>
                
                    </div>

                    </div>


                </div>
            </div>   
        </div>
    )
}

export default Aspire;
