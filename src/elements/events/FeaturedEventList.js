import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import "swiper/css/navigation";

const FeaturedEventList = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get('https://business.i94westchamber.org/events/FeaturedEventsImages?rendermode=json')
      .then(response => {
        const Data = response.data;

        if(Data) {
                    setData(Data);
                    setLoading(false);
                    console.log(Data)
                }
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                });
            }, []);

            const handleSlideChange = (swiper) => {
              setCurrentSlide(swiper.activeIndex);
            }
          
        
            
            return (
            <>
            {loading ? (
                <div>Loading...</div>
                ) : (
                <Swiper 
                spaceBetween={20}
                modules={[Navigation]}            
                slidesPerView={currentSlide > 0 ? 1 : 1.20} 
                navigation
                 breakpoints={{  
                  768: {
                    slidesPerView: 3,
                    navigation:true
                    }
                  }}
                  onSlideChange={handleSlideChange}
                  >

                    {data.map((item, index) => (
                                        <SwiperSlide key={index} >

                    <div key={item.id} class="featured-event-item" >
                        <a href={item.Url}></a>
                    <div style={{backgroundImage: item.Image != null ? `url(${item.Image})` :  `url(${process.env.PUBLIC_URL}/images/bg/bg.jpg)`}}>
                        <div className="event-time" >
                            <span className="event-month">{moment(item.AltData).format("MMMM")}</span>
                            <span className="event-day">{moment(item.AltData).format(" Do")}</span>
                        </div>
                    </div>

                    </div>
                    </SwiperSlide>

                ))}
            </Swiper>
            )}

            <div id="mni-widgets-1674517252651"></div>

            </>

            
            );
            };
            
            export default FeaturedEventList;