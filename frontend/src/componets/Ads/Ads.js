import Script from "next/script";
import React from "react";

const Ads = () => {
  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4434411269474085"
    />
  );
};

export default Ads;
