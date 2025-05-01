'use client';
import { useEffect } from "react";

const RedirectOnLoad: React.FC = () => {
  useEffect(() => {
    // Redirect to an external URL on component load
    window.location.href = "https://gradient-week-recap-website.vercel.app/events";
  }, []);

  return null; // No UI needed since this component just redirects
};

export default RedirectOnLoad;
