
import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import CalltoActionSeven from '../../elements/calltoaction/CalltoActionSeven';
import footerOne from '../../data/Menu.json';
import ScrollTop from './ScrollTop';
import Logo from '../../elements/logo/Logo';
const FooterTwo = () => {
  const footerItems = footerOne.slice(0, 4);

  return (
    <>
      <footer className="rn-footer footer-style-default variation-two">
        <CalltoActionSeven />
        <div className="footer-top">
          <div className="container">
            <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
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
                <div className="col-lg-2 col-md-6 col-sm-6 col-12" key={index}>
                  <div className="rn-footer-widget">
                    <h4 className="title">{item.label}</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.url} target={subItem.target}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerOne[4].title}</h4>
                  <div className="inner">
                    <h6 className="subtitle">{footerOne[4].subtitle}</h6>
                    <ul className="social-icon social-default justify-content-start">
                      <li>
                        <Link to="facebook.com">
                          <FiFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link to="twitter.com">
                          <FiTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="instagram.com">
                          <FiInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="linkdin.com">
                          <FiLinkedin />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
};

export default FooterTwo;

