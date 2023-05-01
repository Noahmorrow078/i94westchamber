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
                <iframe allow="clipboard-write" allowfullscreen="" id="DocPageReaderIframe" src="https://issuu.com/rdr?p=1&amp;d=aspire_2023_interactive&amp;u=i94westchamber" ></iframe>
                 
                </div>
            </Layout>
        </>
    )
}
export default Page;