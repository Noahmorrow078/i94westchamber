import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiChevronRight, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom'

const HeaderBottomBar = () => {

    const cities = [ 'ALBERTVILLE', 'CORCORAN',  'DAYTON',  'HANOVER',  'MAPLE GROVE',  'OSSEO',  'OTSEGO',  'ROGERS', 'ST. MICHAEL'];
    cities.join(" | ");
    return (
        <div className="header-bottom-bar">
            <div className="cities-wrap">
                <ul className=" cities">
     
                   {cities.map(item => (
                    <li key={item}>{item}</li>
                   ))}
                </ul>
            </div>
        </div>
    )
}

export default HeaderBottomBar;
