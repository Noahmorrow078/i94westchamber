import React, { useEffect } from 'react';

const MyFeaturedImageWidget = () => {
  useEffect(() => {
    // Define the widget configuration
    var widgetConfig = [
      ["1697048354448.type", "business_featured"],
      ["1697048354448.display", "image"],
      ["1697048354448.limit", 10],
      ["1697048354448.orientation", "0"],
      ["1697048354448.animation", "0"],
      ["1697048354448.showLinks", true],
      ["1697048354448.popUp", true],
      ["1697048354448.create", "mni-widgets-1697048354448"]
    ];

    // Create a script element and insert it into the DOM
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://business.i94westchamber.org/Content/Script/ImageFeed.js';
    document.body.appendChild(script);

    // Initialize the widget
    script.onload = function () {
      var _mniiq = window._mniiq || [];
      _mniiq.push.apply(_mniiq, widgetConfig);
    };
  }, []);

  return (
    <div id="mni-widgets-1697048354448"></div>
  );
};

export default MyFeaturedImageWidget;
