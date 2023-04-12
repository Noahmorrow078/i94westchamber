import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";

const Page = () => {
    return (
        <>
            <SEO title="Team || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Team"
                />
                <div className="main-content">

                 
                </div>
            </Layout>
        </>
    )
}
export default Page;