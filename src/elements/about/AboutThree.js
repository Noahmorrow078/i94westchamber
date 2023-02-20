import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutThree = () => {
    const aboutItems = [
        {title:'Connecting', text:'Chamber members doing business together through referrals and recommendations!'},
        {title:'Communicating', text:'We keep businesses educated and informed!'},
        {title:'Collaborating', text:'Businesses forming alliances and working together accomplish more!'},
        {title:'Celebrating', text:'We celebrate the success of our local businesses through ribbon cuttings, annual awards and more!'},
    ]
    return (
        <div className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
              

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                    <h4 className="subtitle"><span className="theme-gradient">I94 West Chamber</span></h4>
                                    <h2 className="title mt--10">About The Chamber</h2>
                               

                           
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quod autem sequi reprehenderit labore consequuntur excepturi voluptatibus omnis similique qui unde eligendi tempora, ea at, laudantium nostrum minus pariatur quasi!</p>

                                    <ul className="list-numbers">
                                        {aboutItems.map((item, index) => (
                                             <li><span className="number">0{index + 1}</span>
                                              <h4>{item.title}</h4>
                                              <p>{item.text}</p>
                                             </li>
                                        ))}
                                       
                                    </ul>
                               
                                    <div className="read-more-btn mt--40">
                                        <Link className="btn-default btn-icon" to="#">More About Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>

                </div>
            </div>   
        </div>
    )
}

export default AboutThree;
