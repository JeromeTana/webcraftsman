"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";

export default function Calcom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quick-chat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <Cal
      namespace="quick-chat"
      calLink="jerometana/quick-chat"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
