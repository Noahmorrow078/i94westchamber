import React, { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from 'react';

const TeamThree = ({ column, teamStyle, teamData }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [errorImages, setErrorImages] = useState([]);


  const handleImageLoad = (index) => {
    setErrorImages((prevErrorImages) => [...prevErrorImages, index]);
  };

  const hasImageError = (index) => {
    return errorImages.includes(index);
  };

  const isImageLoaded = (index) => {
    return loadedImages.includes(index);
  };

  const getPlaceholderImage = () => {
    // Return the URL or path for the placeholder image
    // Replace 'placeholderImageUrl' with the actual placeholder image URL
    return '/images/placeholder_2.jpg';
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Swiper modules={[Navigation]} navigation slidesPerView={1} centeredSlides={true} initialSlide={1} breakpoints={{ 768: { slidesPerView: 3 } }}>
        {teamData.map((data, index) => (
          <SwiperSlide key={`${index}_${data.name}`}>
            <div className={`rn-team ${teamStyle}`}>
              <div className="inner">
                <figure className="thumbnail">
                <img
                    style={{ borderRadius: '0%', position: 'relative', top: hasImageError(index) ? '-40px' :'-20px' }}
                    src={hasImageError(index) ? getPlaceholderImage() : `/images/headshots/${data.name.replace(/\s/g, '')}.JPG`}
                    alt="Corporate React Template"
                    onError={() => handleImageLoad(index)}
                    />
                </figure>
                <figcaption className="content">
                  <h2 className="title">{data.name}</h2>
                  {data.designation ? (
                    <h6 className="subtitle theme-gradient" style={{ marginBottom: '0px' }}>
                      {data.designation}
                    </h6>
                  ) : (
                    ''
                  )}
                  
                  <h6 className="company" style={{ marginBottom: '0px' }}>{data.company}</h6>
                  {data.email ? (
                    <a href={'mailTo:'+data.email} className="email theme-gradient" style={{ marginBottom: '0px' }}>
                      {data.email}
                    </a>
                  ) : (
                    ''
                  )}
                </figcaption>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamThree;
