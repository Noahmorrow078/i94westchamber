import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
    const thingsToDo = [
        {title:'EAT', image:'eat.png'},
        {title:'WORK', image:'work.png'},
        {title:'STAY', image:'stay.png'},
        {title:'DO', image:'do.png'},

    ]
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="todo-wrapper">
                    {thingsToDo.map((section, index) => (
                        <div key={`${section.index}_${section.title}`} className="todo" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/todo/${section.image})`}}>
                            <span>{section.title}</span>
                            <div className="gradient"></div>
                        </div>
                    ))}
                </div>   
            </div>
        </div>
    )
}

export default AboutTwo;
