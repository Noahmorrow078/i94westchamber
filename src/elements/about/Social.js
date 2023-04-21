import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";


const Social = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">

                <div className="col-lg-6 col-sm-12">
                        <div className="thumbnail">
                            <img className="mag" src="./images/about/social1.png" alt=" " />
                        </div>
                    </div>
              

                    <div className="col-lg-6 mt_md--30 mt_sm--30 col-sm-12">
                        <div className="thumbnail">
                            
                            <img className="mag m--auto" src="./images/about/social2.png" alt=" " />
                        </div>
                    </div>


                </div>
            </div>   
        </div>
    )
}

export default Social;
