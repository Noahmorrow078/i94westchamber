import React from 'react';
import Mailchimp from 'react-mailchimp-form'

const Location = () => {
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">

                <div className="col-lg-6 col-sm-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.7437140629136!2d-93.55081638420958!3d45.19228395956655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b343c0d7769e07%3A0x2c915a02f598a4f4!2s21310%20John%20Milless%20Dr%20Suite%20C%2C%20Rogers%2C%20MN%2055374!5e0!3m2!1sen!2sus!4v1674852898246!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              

                    <div className="col-lg-6 mt_md--30 mt_sm--30 col-sm-12">
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
                            placeholder: 'name',
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
                        className='<YOUR_CLASSNAME>'
                        />
                    </div>


                </div>
            </div>   
        </div>
    )
}

export default Location;
