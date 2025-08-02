"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

interface DemoCallBookingProps {
  prefillData?: {
    name?: string;
    email?: string;
  };
}

export default function DemoCallBooking({ prefillData }: DemoCallBookingProps) {
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quick-chat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

      // Listen for booking success events
      cal("on", {
        action: "bookingSuccessful",
        callback: (e: any) => {
          console.log("Booking successful:", e.detail);
          // Redirect to thank you page after successful booking
          setTimeout(() => {
            router.push("/thank-you");
          }, 1000); // Small delay to ensure booking is processed
        },
      });

      // Alternative event listener for different Cal.com versions
      cal("on", {
        action: "linkReady",
        callback: () => {
          // Additional setup can be done here when the calendar is ready
          console.log("Cal.com embed is ready");
        },
      });
    })();

    // Listen for postMessage events from Cal.com iframe
    const handleMessage = (event: MessageEvent) => {
      // Ensure the message is from a trusted Cal.com domain
      if (
        event.origin.includes("cal.com") ||
        event.origin.includes("cal.dev")
      ) {
        const data = event.data;

        // Check for booking success events
        if (
          data.type === "CAL:booking_successful" ||
          data.type === "CAL:BOOKING_SUCCESSFUL" ||
          (data.data && data.data.type === "booking_successful")
        ) {
          console.log("Booking successful via postMessage:", data);

          // Redirect to thank you page
          setTimeout(() => {
            router.push("/thank-you");
          }, 1000);
        }

        // Log other Cal.com events for debugging
        if (data.type && data.type.startsWith("CAL:")) {
          console.log("Cal.com event:", data.type, data);
        }
      }
    };

    // Add event listener
    window.addEventListener("message", handleMessage);

    // Cleanup function
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  return (
    <Cal
      namespace="demo"
      calLink="jerometana/demo"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        name: prefillData?.name || "",
        email: prefillData?.email || "",
        layout: "month_view",
        theme: "light",
      }}
    />
  );
}
