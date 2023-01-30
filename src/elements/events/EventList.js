import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";
import Slider from 'react-slick';

const EventList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

                    
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000
        };
        
            
            return (
            <>
            {loading ? (
                <div>Loading...</div>
                ) : (
                    <Slider {...settings}>
                {data.map(item => (
                    <div key={item.id} class="event-item">
                        <a href={item.URL}></a>

                        <div class="event-name">{item.Name}</div>
                        <div className="event-time">
                            <span className="event-month">{moment(item.StartDate).format("MMMM")}</span>
                            <span className="event-day">{moment(item.EndDate).format(" D")}</span>
                        </div>
                        <div class="event-cta">CLICK FOR MORE INFO</div>
                    </div>
                ))}
            </Slider>
            )}

            <div id="mni-widgets-1674517252651"></div>

            </>

            
            );
            };
            
            export default EventList;