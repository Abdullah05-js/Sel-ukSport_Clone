'use client';

import { useEffect, useRef } from 'react';

const AdComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//pl25831865.effectiveratecpm.com/6c/43/97/6c439764be729818e32cf338738523c6.js';
      adRef.current.appendChild(script);
    }
  }, []);

  return <div ref={adRef} />;
};

export default AdComponent;
