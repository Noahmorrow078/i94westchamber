import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const AdSlider = ({ context = 299, max = 5, secure = true }) => {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const callbackName = `MNI_Ads_jpc${new Date().getTime()}`; // Unique callback name
        const protocol = secure ? 'https' : 'http';
        const domain = 'business.i94westchamber.org';
        const scriptUrl = `${protocol}://${domain}/sponsors/ads?context=${context}&max=${max}&secure=${secure}&jsonpcallback=${callbackName}`;
        
        // Define the callback function globally
        window[callbackName] = function(data) {
            setAds(data);
            setLoading(false);
        };

        // Create a script element to load the JSONP script
        const script = document.createElement('script');
        script.src = scriptUrl;
        document.body.appendChild(script);

        // Clean up
        return () => {
            document.body.removeChild(script); // Remove the script element
            window[callbackName] = undefined; // Cleanup global function
        };
    }, [context, max, secure]);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div style={{ display: 'flex', width: '100%' }} class="ad-slider">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        speed={4000}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            }
                        }}
                    >
                        {ads.filter(ad => ad.Type === 'image').map((ad, index) => (
                            <SwiperSlide key={`${index}_${ad.Name}`}>
                                <div className="ad-item">
                                    <figure className="ad-image">
                                        <a href={ad.URL} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={ad.Source}
                                                alt={ad.Alternate}
                                                style={{ width: '100%', height: 'auto' }}
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
