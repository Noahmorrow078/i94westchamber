import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import Slider from 'react-slick';

const teamData = [
    {
        image: 'team-04',
        name: 'Sr Janen Sara',
        designation: 'Sr Product Designer',
    },
    {
        image: 'team-05',
        name: 'Afsana Nila',
        designation: 'App Developer',
    },
    {
        image: 'team-06',
        name: 'Afanan Sifa',
        designation: 'Accounts Manager',
    },
    {
        image: 'team-07',
        name: 'Afanan Sifa',
        designation: 'Accounts Manager',
    },
    {
        image: 'team-07',
        name: 'Afanan Sifa',
        designation: 'Accounts Manager',
    },
    {
        image: 'team-07',
        name: 'Afanan Sifa',
        designation: 'Accounts Manager',
    },
    {
        image: 'team-07',
        name: 'Afanan Sifa',
        designation: 'Accounts Manager',
    },
]





const TeamThree = ({column , teamStyle}) => {
                        
    const settings = {
        dots: false,
        centerMode: true,
        infite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    };
    
    return (
        <div className="row row--30" style={{display:'flex', gap:'20px'}}>
          <Slider {...settings}>

            {teamData.map((data, index) => (
                <div key={index}>
                   
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img style={{borderRadius:'100%'}}src={`./images/team/team-01.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                </figcaption>
                            </div>
                        </div>
            
            </div>
            ))}
            </Slider>
        </div>
    )
}

export default TeamThree;
