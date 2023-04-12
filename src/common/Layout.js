import React from 'react';
import HeaderOne from "./header/HeaderOne";
import HeaderTopNews from "./header/HeaderTopNews";
import FooterOne from "./footer/FooterOne";
import Copyright from "./footer/Copyright";
import HeaderTopBar from './header/HeaderTopBar';
const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                    <HeaderTopBar />
                    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent" />


                {children}
                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}
export default Layout;
