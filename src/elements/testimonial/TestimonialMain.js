import React from 'react';

const testimonialData = [
    {
        image: 'testimonial-01',
        name: 'Sr Janen Sara',
        designation: 'Sr Product Designer',
        location: 'CO Miego, AD, USA', 
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.„',
       
    }
]


const TestimonialMain = ({column , teamStyle}) => {
    return (
        <>
            {testimonialData.map((data, index) => (

                        <div className={`rn-box-card ${teamStyle}`} key={index}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <p className="description mt--100">{data.description}</p>
                                    <h2 className="title mt--100">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                </figcaption>
                            </div>
                        </div>

            ))}
        </>
    )
}

export default TestimonialMain;
