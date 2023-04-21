import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";

const EventList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get('https://business.i94westchamber.org/events_upcoming?rendermode=json&version=3&limit=10&catgid=3')
      .then(response => {
        const { Data } = response.data;
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

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Swiper 
          modules={[Navigation]} 
          slidesPerView={currentSlide > 0 ? 1 : 1.40} 
          navigation 
          spaceBetween={20}  
          breakpoints={{  
            768: {
              slidesPerView: 3,
            }
          }}
          onSlideChange={handleSlideChange}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div key={item.id} class="event-item">
                <a href={item.URL}></a>
                <div class="event-name">{item.Name}</div>
                <div className="event-time">
                  <span className="event-month">{moment(item.StartDate).format("MMMM")}</span>
                  <span className="event-day">{moment(item.EndDate).format(" D")}</span>
                </div>
                <div class="event-cta">CLICK FOR MORE INFO</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div id="mni-widgets-1674517252651"></div>
    </>
  );
};

export default EventList;
