import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import Lottie from 'react-lottie';
import animationData from '../../logo.json'

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            <SEO title="Title" />
            <Layout>
           
                <div className="main-content">
                <div className="four-wrap">
                    <Lottie 
                                options={defaultOptions}
                                height={'auto'}
                                width={'100%'}
                            />
                    <h1>PAGE NOT FOUND</h1>
                    <p>Sorry, the page you are looking for is not found.</p>
                    <div className="read-more-btn">
                        <a className="btn-default" href="/"><span>Take Me Home!</span></a>
                    </div>
            </div>
                </div>
            </Layout>
        </>
    )
}
export default NotFound;