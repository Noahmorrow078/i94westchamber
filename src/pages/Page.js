import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";

const Page = () => {
    return (
        <>
            <SEO title="Title" />
            <Layout>
                <BreadcrumbOne 
                    title="Page Title"
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