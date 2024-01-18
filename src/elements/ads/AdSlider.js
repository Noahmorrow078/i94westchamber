import React, { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const AdSlider = ({ column, teamStyle, teamData }) => {
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
      <Swiper modules={[Autoplay]}   loop={true}
  autoplay={{
    delay:0,
   stopOnLastSlide: false,
  }}  
  speed={5000}
slidesPerView={1} initialSlide={0} breakpoints={{ 768: { slidesPerView: 3 } }}>
        {teamData.map((data, index) => (
          <SwiperSlide key={`${index}_${data.name}`} className="swiper-ad-item">
          
              <div className="ad-item">
                <figure className="ad-image">
                  <a href={data.url} target='_blank'>
                  <img
                    style={{ borderRadius: '0%', position: 'relative', top: hasImageError(index) ? '-40px' :'-20px' }}
                    src={hasImageError(index) ? getPlaceholderImage() : data.image}
                    alt="Corporate React Template"
                    onError={() => handleImageLoad(index)}
                    />
                    </a>
                </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdSlider;
