import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import TimelineTwo from '../../elements/timeline/TimelineTwo';

const JoinNow = () => {
    return (
        <>
            <SEO title="Member Benefits" />
            <Layout>
                <div className="main-content">

               
                    <div className="row row--30 align-items-top">
                        <div className="col-lg-12 mt_md--30 mt--70 mb--50 container">
                            <div className="content">
                                <div className="section-title">

                                        <h2 className="title">Member Application</h2>
                                        <p>Memberships are non-refundable. Memberships are good for 12 months or one (1) year. You will renew on your annual anniversary date. Renewal is good for 12 months. We look forward to you getting involved. Consider the add-on packages for the Enhanced Website Option at the Business Builder level (renewed annually with membership dues).</p>
                                    
                                        <TimelineTwo classVar="mb--100 mt--100" />

                            </div>
                        </div>
                    </div>

                </div>
                 
                </div>
            </Layout>
        </>
    )
}
export default JoinNow;