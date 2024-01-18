import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";

const EventList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get('https://business.i94westchamber.org/events/UpcomingEventImages?category=6&limit=10&daysForward=30&renderMode=json')
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
          slidesPerView={1}
          navigation 
          spaceBetween={20}  
          className="event-swiper"
          breakpoints={{  
            768: {
              slidesPerView: 3.5,
            },
            320: {
              slidesPerView: 1,
            }
          }}
          onSlideChange={handleSlideChange}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div key={item.id} class="event-item">
                <a href={item.Url}></a>
                <div class="event-name">{item.Name}</div>
                <div className="event-time">
                  <span className="event-month">{moment(item.AltData).format("MMMM")}</span>
                  <span className="event-day">{moment(item.AltData).format(" D")}</span>
                </div>
                <div class="event-cta">CLICK FOR MORE INFO</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="read-more-btn mt--40">
           <a className="btn-default" style={{'margin':'auto', 'display':'block','maxWidth':'240px'}} href="https://business.i94westchamber.org/events/search?q=&c=6&l=&Lookahead="><span>View All Events</span></a>
      </div>    
                                </>
  );
};

export default EventList;
