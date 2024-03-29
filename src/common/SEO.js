import PropTypes from "prop-types";
import React from 'react'


const SEO = ({ title, isHomePage }) => {
    return (
        <>
            <meta charSet="utf-8" />
            {isHomePage ? (
                <title>{title}</title>
            ) : (
                <title>{title} | I94 West Chamber</title>
            )}
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="The I-94 West Chamber of Commerce supports organizations in the northwest Twin Cities through programming, events, marketing, and much more." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    isHomePage: PropTypes.bool
};

export default SEO;
