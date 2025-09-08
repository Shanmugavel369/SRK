import React, { useEffect } from "react";

const CalendlyBadge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.Calendly?.initBadgeWidget({
        url: "https://calendly.com/shanmugavel-a-webboombaa/30min",
        text: "Schedule time",
        color: "#0069ff",
        textColor: "#ffffff",
        branding: true,
        alignment: "right", // 👈 bottom-right (default)
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default CalendlyBadge;
