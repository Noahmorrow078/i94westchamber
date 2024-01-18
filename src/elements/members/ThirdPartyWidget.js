import React, { useEffect } from 'react';

const ThirdPartyWidget = () => {
  useEffect(() => {
    // Define the widget configuration
    var widgetConfig = [
      ["1697043324297.type","business_new"],["1697043324297.display","text"],["1697043324297.limit",10],["1697043324297.marquee",true],["1697043324297.showLinks",true],["1697043489690.popUp",true],["1697043324297.styleTemplate","#@id .mn-scroll-container{font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:130%;margin:8px;position:relative;height:205px;overflow:hidden}#@id .mn-scroll-item{-moz-border-radius:5px;-webkit-border-radius:5px;background-clip:padding-box;background-color:#2D548B;border-radius:5px;color:#FFFFFF;margin:0 0 4px;position:relative}#@id .mn-scroll-item:hover{background-color:#406BA8;color:#FFFFFF}#@id .mn-scroll-name,#@id .mn-scroll-teaser{display:block;padding:5px 3px 5px 3px;position:relative}#@id .mn-scroll-link{color:inherit;text-decoration:none}#@id .mn-scroll-link:hover{text-decoration:underline}#@id .mn-scroll-slider{position:absolute;width:100%}"],["1697043324297.create","mni-widgets-1697043324297"]
    ];

    // Create a script element and insert it into the DOM
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://business.i94westchamber.org/Content/Script/Widgets.js';
    document.body.appendChild(script);

    // Initialize the widget
    script.onload = function () {
      var _mniwq = window._mniwq || [];
      _mniwq.push.apply(_mniwq, widgetConfig);
    };
  }, []);

  return (
    <div className="members-wrapper">
        <div className="container">
        <div className="row row--30 align-items-center">
                <div className="col-lg-6">
                    <h1 className="member-text">THANK YOU TO OUR MEMBERS!</h1>
                </div>
                <div className="col-lg-6">
                    <div className="members">
                        <h2>OUR NEW MEMBERS</h2>
                        <div className="members" id="mni-widgets-1697043324297"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default ThirdPartyWidget;

