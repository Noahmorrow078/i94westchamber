



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const AdSlider = ({ column, teamStyle, teamData }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get('https://business.i94westchamber.org/sponsors/ads?context=299')
      .then(response => {
        const  Data  = response.data;
        console.log(response.data)
        if(Data) {
          setData(Data);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
  <>
    {loading ? (
      <div>Loading...</div>
    ) : (
      <div style={{ display: 'flex', gap: '20px' }}>
        <Swiper
        style={{'width':'100%'}}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            stopOnLastSlide: false,
          }}
          speed={4000}
          slidesPerView={1}
          initialSlide={0}
          breakpoints={{ 768: { slidesPerView: 3 } }}
        >
          {data.filter(data => data.Type === 'image').map((data, index) => (
            <SwiperSlide key={`${index}_${data.name}`} className="swiper-ad-item">
              <div className="ad-item">
                <figure className="ad-image">
                  <a href={data.url} target='_blank'>
                    <img
                      style={{ borderRadius: '0%', position: 'relative'}}
                      src={data.Source}
                      alt="Corporate React Template"
                    />
                  </a>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )}
  </>
);
};

export default AdSlider;
