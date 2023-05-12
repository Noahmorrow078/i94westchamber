import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


import { useRef, useEffect } from 'react';






const TeamThree = ({column , teamStyle, teamData}) => {

    
    return (
       
        <div style={{display:'flex', gap:'20px'}}>
          <Swiper modules={[Navigation]} navigation slidesPerView={1}  centeredSlides={true}  initialSlide={1} breakpoints={{  768: {slidesPerView: 3,}}}>

            {teamData.map((data, index) => (
                <SwiperSlide key={`${index}_${data.name}`} >
                   
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
            
                 </SwiperSlide>

            ))}
        </Swiper>
        </div>
    )
}

export default TeamThree;
