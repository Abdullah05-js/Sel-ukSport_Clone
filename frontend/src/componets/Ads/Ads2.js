'use client';

import { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = "//pl25831760.effectiveratecpm.com/55e89107e0d7884037dd05eac546fb71/invoke.js";
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return <div id="container-55e89107e0d7884037dd05eac546fb71" />;
};

export default AdComponent;
