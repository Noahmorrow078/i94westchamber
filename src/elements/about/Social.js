import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Mailchimp from 'react-mailchimp-form'


const Social = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-start">

                <div className="col-lg-6 col-sm-12">
                        <div className="thumbnail">
                            <a href="https://www.facebook.com/I94West"><img className="mag" src="./images/about/social1.png" alt=" " /></a>
                        </div>
                    </div>
              

                    <div className="col-lg-6 mt_md--30 mt_sm--30 col-sm-12">
                        <div className="thumbnail">
                            <h3>Join Our Mailing list</h3>
                            <p>
                                SeaWire Web is a wireframe kit that has more than 15 popular categories 
                                and more than 200 screens from each category, SeaWire Web deserves 
                                to be your partner in working on projects. So what are you waiting for?
                            </p>

                            <Mailchimp
                        action='https://i94westchamber.us3.list-manage.com/subscribe/post?u=316c10e2bd35b1a092de997e0&amp;id=f4fb8bbfe0&amp;f_id=0052bbe3f0' 
                        
                        //Adding multiple fields:
                        fields={[
                            {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: true
                            },
                            {
                            name: 'FNAME',
                            placeholder: ' First Name',
                            type: 'text',
                            required: true
                            }, 
                            {
                            name: 'LNAME',
                            placeholder: 'Last Name',
                            type: 'text',
                            required: true
                            }
                        ]}
                        // Change predetermined language
                        messages = {
                            {
                            sending: "Sending...",
                            success: "Thank you for subscribing!",
                            error: "An unexpected internal error has occurred.",
                            empty: "You must write an e-mail.",
                            duplicate: "Too many subscribe attempts for this email address",
                            button: "Subscribe!"
                            }
                        }
                        // Add a personalized class
                        className='mailchimp-form'
                        />
                        </div>
                    </div>


                </div>
            </div>   
        </div>
    )
}

export default Social;
