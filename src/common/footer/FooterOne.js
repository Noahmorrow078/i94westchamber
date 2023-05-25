



import React from 'react';
import { Link } from 'react-router-dom';
import footerOne from '../../data/Menu.json';
import ScrollTop from './ScrollTop';
import Logo from '../../elements/logo/Logo';
import Mailchimp from 'react-mailchimp-form'


const FooterOne = () => {
  const footerItems = footerOne.slice(2, 4);

  return (
    <>
      <footer className="rn-footer footer-style-default variation-two">
        <div className="footer-top">
          <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="logo mb--100" >
                                        <Logo 
                                            image={`${process.env.PUBLIC_URL}/images/logo/footer-logo.png`}
                                            image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                                        />
                                    </div>
                                </div>
                            </div>
              {footerItems.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                  <div className="rn-footer-widget">
                    <h4 className="title">{item.label}</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.url} >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Start Single Widget  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">Join The Newsletter</h4>
                                    <div className="inner footer-form">                                          
                                            <Mailchimp
                                                action='https://i94westchamber.us3.list-manage.com/subscribe/post?u=316c10e2bd35b1a092de997e0&amp;id=f4fb8bbfe0&amp;f_id=0052bbe3f0' 
                                                
                                                //Adding multiple fields:
                                                fields={[
                                                    {
                                                    name: 'EMAIL',
                                                    placeholder: 'Email',
                                                    type: 'email',
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
                            {/* End Single Widget  */}
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
};

export default FooterOne;

