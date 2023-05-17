import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";

const Origin = () => {
    return (
        <>
            <SEO title="Certificate of Origin" />
            <Layout>
           
                <div className="main-content">
                <div className="container mt--30">
                <img src="./images/cert.png" className="mb--50 mt--100" style={{'margin':'auto','display':'block','maxWidth':'400px'}} />
                <p>Chambers of Commerce play a central role in facilitating global trade.  Use of  essCert turns the paper-based process into a streamlined electronic system.  This will save you time and money.  Additionally, this Chamber benefit offers increased compliance, record keeping, and no more missed deadlines.</p>
                <form
                    method="POST"
                    action="https://www.tradecert1.net/cas/login"
                    name="FrontPage_Form1"
                    target="_parent"
                    onSubmit="return FrontPage_Form1_Validator(this)"
                    language="JavaScript"
                    >
                    <p>
                        <strong>Username</strong>
                        <br />
                        <input type="text" name="username" />
                    </p>
                    <p>
                        <strong>Password</strong>
                        <br />
                        <input type="password" name="password" />
                    </p>
                    <p>
                        <input type="submit" value="Submit" name="B1" />
                        <br />
                        <input type="hidden" name="auto" value="true" />
                        <br />
                    </p>
                    </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Origin;