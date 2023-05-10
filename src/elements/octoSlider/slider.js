import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [count, setCount] = useState(0);
  const [interacted, setInteracted] = useState(false);

  const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

  const sections = [
    { num: 0, title: 'GET BUSINESS SUPPORT', color: '#1668b0', text: 'From contacts and connections within local and regional government and elected officials, the chamber is here to connect and support your business.'},
    { num: 1, title: 'EXPAND YOUR NETWORK', color: '#61a9e8', text: 'It’s not just who you know, it’s who others know. Networking is powerful. Add hundreds of professionals to your network.' },
    { num: 2, title: 'ATTEND MORE EVENTS!', color: '#1b86e3', text: 'The chamber hosts several monthly networking groups, as well as annual signature events, that help you network and connect your business. ' },
    { num: 3, title: 'EARN MORE CREDIBILITY', color: '#955c00', text: 'A membership with the chamber is a “good housekeeping seal of approval” of sorts. Chamber members are trusted partners!' },
    { num: 4, title: 'IMPROVE YOUR SKILLS', color: '#e39619',text: 'There are multiple opportunities throughout the year for education and training in a variety of business sectors.' },
    { num: 5, title: 'INCREASE YOUR VISIBILITY', color: '#fdb913', text:'Take advantage of our social media channels, website, weekly newsletter, annual publication, events and more! ' },
    { num: 6, title: 'GAIN AN ADVOCATE', color: '#e3a410', text:'The chamber is a strong, unified voice that advocates for your business.' },
    { num: 7, title: 'SHOP THE CHAMBER', color: '#0b3a61', text:' List your Hot Deals on the chamber website to increase  your exposure within the community.' },
    { num: 8, title: 'RECRUIT TOP TALENT!', color: '#2a4963', text:'List your job openings on the chamber website to recruit your next team member.' },
    { num: 9, title: 'MAKE MORE MONEY', color: '#1668b0', text:'Participation in chamber events and referrals result in increased business.' },
  ];

  useEffect(() => {
if(interacted == false){
const intervalId = setInterval(() => { setActiveIndex((activeIndex + 1) % (sections.length)); }, 4000);
return () => clearInterval(intervalId);
  }
}, [activeIndex, sections.length]);


  const style = {
    inactive: {transform:'rotate(40deg) translateY(-40px)'},
    active: {transform: 'rotate(0deg) translateY(200%) scale(1.6)'}
  }

  const rotate = (index) => (index - 1) * 40;
  const translateY = (index) => (index === 2 ? '200%' : '-40px');
  const scale = (index) => (index === 2 ? '1.6' : '1');

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swiped left
      setActiveIndex((activeIndex + 1) % sections.length);
    }
  
    if (touchStart - touchEnd < -50) {
      // swiped right
      setActiveIndex((activeIndex - 1 + sections.length) % sections.length);
    }
  };


  return (
    <div className="slider-wrapper" style={{backgroundImage:'url(./images/slider-bg.jpg)', backgroundSize:'cover'}}>
        <div className="container">
          <div className="slider-title">
            <h2 style={{color:'var(--orange)'}}>Chamber Benifits</h2>
            <span style={{color:'black'}}>How We Help Your Business</span>
          </div>

        <div className="row rn-section-gap">

            <div className="col-lg-6" style={{position:'relative'}}>
              <div
                className="slider-inner"
                style={{ width: "525px", height: "525px" }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >                        
                    <div className="slider-origin">
                            {sections.map((section, index) => (
                            <div
                                key={section.num}
                                className={`slider-item ${activeIndex === index ? 'active' : ''}`}
                                id={`section${section.num}`}
                                
                                
                                style={{
                                    backgroundColor:`${section.color}`,
                                    transform: activeIndex === index ? `rotate(0deg) translateY(200%) scale(1.6)` : `rotate(${activeIndex > section.num ? rotate(index + 1) : rotate(index )}deg) translateY(-40px) scale(1)` 
                                }}

                                onClick={() => {setActiveIndex(index ); setInteracted(true)}}
                            >
                                <p>{ section.title.split(" ").slice(0,2).join(' ')}</p>
                                <p></p>
                                <h2>{section.title.split(' ').slice(2).join(' ')}</h2>
                        

                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <div className="col-lg-6 slider-text">
            {sections.map((section, index) => (
                section.num  == activeIndex ? 
                            <div key={section.title}>
                            <h3 >{section.title}</h3>
                            <p style={{color:'var(--color-primary)', fontWeight:'200'}}>{section.text}</p>
                            </div>
                            : ''

                        ))}
            </div>
        </div>
        </div>
    </div>
  );
};

export default Slider;