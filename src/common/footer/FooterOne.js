



import React from 'react';
import { Link } from 'react-router-dom';
import footerOne from '../../data/Menu.json';
import ScrollTop from './ScrollTop';
import Logo from '../../elements/logo/Logo';
import Mailchimp from 'react-mailchimp-form'

import FooterMailchimp from './FooterMailchimp';

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

            <FooterMailchimp />
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
};

export default FooterOne;

