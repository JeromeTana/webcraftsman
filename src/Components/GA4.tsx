"use client";

import Script from "next/script";
import React from "react";

export default function GA4() {
  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H98Z69VQWL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H98Z69VQWL');
      `}
      </Script>
    </div>
  );
}
