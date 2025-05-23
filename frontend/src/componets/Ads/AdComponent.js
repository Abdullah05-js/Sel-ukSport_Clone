'use client';

import { useEffect, useRef } from 'react';

const AdComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//pl25831865.effectiveratecpm.com/6c/43/97/6c439764be729818e32cf338738523c6.js'; // burda reklamını koy örnek adsterra
      adRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) ||
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    })

    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });



    setInterval(() => {
      (function () {
        if (window.console && (console.profile || console.clear)) {
          console.profile();
          console.clear();

        }
        try {
          debugger;
        } catch (e) {
          window.location.href = "https://google.com";
        }
      })();
    }, 100);

  }, [])



  return <div ref={adRef} />;
};

export default AdComponent;
