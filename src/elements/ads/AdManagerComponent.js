import React, { useEffect } from 'react';

const AdManagerComponent = ({ context, rotate, duration }) => {
    const adId = "mni-ads-1713227910863";

    useEffect(() => {
        // Function to dynamically load the Ads script
        const loadScript = () => {
            const scriptId = `${adId}-script`;

            if (document.getElementById(scriptId)) {
                return; // If script is already present, abort the operation.
            }

            const script = document.createElement('script');
            script.id = scriptId;
            script.type = 'text/javascript';
            script.async = true;
            script.src = "https://business.i94westchamber.org/Content/Script/Ads.min.js";

            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(script, firstScript);

            script.onload = () => {
                // Push configurations to the _mnisq queue once the script is loaded
                var _mnisq = window._mnisq || [];
                _mnisq.push(
                    [`${adId}.max`, 100],
                    [`${adId}.context`, context],
                    [`${adId}.rotate`, rotate],
                    [`${adId}.duration`, duration],
                    [`${adId}.create`, adId],
                );
                window._mnisq = _mnisq; // Update the global _mnisq
            };
        };

        loadScript();

        return () => {
            // Cleanup script when component unmounts
            const existingScript = document.getElementById(`${adId}-script`);
            if (existingScript) {
                existingScript.parentNode.removeChild(existingScript);
            }
        };
    }, [context, rotate, duration]); // Re-run effect if these props change

    return <div id={'sponsor-wrapper '+adId}></div>;
};

export default AdManagerComponent;
