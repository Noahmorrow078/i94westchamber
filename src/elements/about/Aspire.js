import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";


const Aspire = () => {
    return (
        <div className="rwt-aspire-area rn-section-gap" style={{backgroundColor: 'white', 'position':'relative','overflow':'hidden'}}>
            <div className="container">
                <div className="row row--30 align-items-center">

                <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="mag magazine" src="./images/about/magazine.jpg" alt="Aspire Guide" />
                        </div>
                    </div>
              

                    <div className="col-lg-7 mt_md--30 mt_sm--30">

                    <div className="aspire-text">

                                  <img className="mag   d-none d-md-block mb--40" src="./images/about/aspire_logo.png" alt="Aspire Logo" style={{maxWidth:'450px',margin:'auto'}} />
                      
                  

                    <p style={{color:'black',padding:'10px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum em. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                    </p>
    
                    <Link className="btn-default btn-icon m--auto" to="#">View Now!<i className="icon"><FiArrowRight /></i></Link>
                
                    </div>

                    </div>


                </div>
            </div>   
        </div>
    )
}

export default Aspire;
