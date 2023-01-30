import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [count, setCount] = useState(0);
  const [interacted, setInteracted] = useState(false);

  const sections = [
    { num: 0, title: 'GET BUSINESS SUPPORT', color: '#fcb443', text: 'The chamber is the region’s #1 business concierge, from bulk mailings to notary public. Certificate Of Origin Services'},
    { num: 1, title: 'EXPAND YOUR NETWORK', color: '#f7941d', text: 'It is not just who you know, its who others know. Networking is powerful. Add 470+ professionals to your network.' },
    { num: 2, title: 'ATTEND YOUR EVENTS', color: '#f26c67', text: 'The Chamber supports 4 monthly networking groups, host 8 annual signature events, and more! 3x the exposure for your business through the chamber.' },
    { num: 3, title: 'EARN CREDIBILITY', color: '#023a5a', text: 'Raise your reputation through membership. Learn More' },
    { num: 4, title: 'IMPROVE YOUR SKILLS', color: '#2f97d3',text: 'The Chamber offers education & training throughout the year and online.' },
    { num: 5, title: 'INCREASE YOUR VISIBILITY', color: '#32bfbf', text:'social media, chamber website, bigfoot, sponsorships, & Aspire Guide and more!' },
    { num: 6, title: 'GAIN AN ADVOCATE', color: '#a0b452', text:'The chamber is a strong, unified voice that advocates for your business.' },
    { num: 7, title: 'SHOP CHAMBER', color: '#fcb443', text:'It pays to do business with a member & share your hot deals.' },
    { num: 8, title: 'RECRUIT TOP TALENT', color: '#3a3a3c', text:'List your job openings on the chamber website to recruit your next team member.' },
    { num: 9, title: 'MAKE MORE MONEY', color: '#16ab8f', text:'Build your brand, expand your business. Referrals & recommendations pay!' },
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

  return (
    <div className="slider-wrapper">
        <div className="container">
        <div className="row rn-section-gap">

            <div className="col-lg-6" style={{position:'relative'}}>
                <div className="slider-inner" style={{ width: '525px', height: '525px' }}>
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
                                <span className="num">{section.num + 1}</span>
                                <p>{section.title.split(' ')[0]}</p>
                                <p></p>
                                <h2>{section.title.split(' ').slice(1).join(' ')}</h2>
                        

                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
            {sections.map((section, index) => (
                section.num  == activeIndex ? 
                            <div key={section.title}>
                            <h3 style={{color:'black'}}>{section.title}</h3>
                            <p style={{color:'var(--color-primary)', fontWeight:'800'}}>{section.text}</p>
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