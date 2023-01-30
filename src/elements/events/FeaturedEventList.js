import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";
import Slider from 'react-slick';

const FeaturedEventList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

                    
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
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
                    <div key={item.id} class="featured-event-item" >
                        <a href={item.Url}></a>
                    <div style={{backgroundImage: item.Image != null ? `url(${item.Image})` :  `url(${process.env.PUBLIC_URL}/images/bg/bg.jpg)`}}>

                        <div className="event-time" >
                            <span className="event-month">{moment(item.AltData).format("MMMM")}</span>
                            <span className="event-day">{moment(item.AltData).format(" Do")}</span>
                        </div>
                    </div>

                    </div>
                ))}
            </Slider>
            )}

            <div id="mni-widgets-1674517252651"></div>

            </>

            
            );
            };
            
            export default FeaturedEventList;