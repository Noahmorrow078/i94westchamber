import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
    const thingsToDo = [
        {title:'EAT', image:'eat.png', link:'https://business.i94westchamber.org/list/ql/restaurants-food-beverages-22'},
        {title:'WORK', image:'work.png', link:'https://business.i94westchamber.org/jobs'},
        {title:'STAY', image:'stay.png', link:'https://business.i94westchamber.org/list/ql/lodging-travel-15'},
        {title:'DO', image:'do.png', link:'https://business.i94westchamber.org/list/ql/arts-culture-entertainment-3'},

    ]
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="todo-wrapper">
                    {thingsToDo.map((section, index) => (
                        <div key={`${section.index}_${section.title}`} className="todo" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/todo/${section.image})`}}>
                            <a href={section.link}>
                            <span>{section.title}</span>
                            <div className="gradient"></div>
                            </a>
                        </div>
                    ))}
                </div>   
            </div>
        </div>
    )
}

export default AboutTwo;
