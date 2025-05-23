// components/AdsterraAd.js
'use client';

import { useEffect, useRef } from 'react';

const Ads = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      // Define the atOptions object
      window.atOptions = {
        key: 'ff296d351669c4e2837854e5d4890ab2',
        format: 'iframe',
        height: 250,
        width: 300,
        params: {},
      };

      // Create the script element
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//www.highperformanceformat.com/ff296d351669c4e2837854e5d4890ab2/invoke.js';  // burda reklamını koy örnek adsterra
      script.async = true;

      // Append the script to the ad container
      adRef.current.appendChild(script);
    }
  }, []);

  return <div ref={adRef} style={{ width: '300px', height: '250px' }} />;
};

export default Ads;
