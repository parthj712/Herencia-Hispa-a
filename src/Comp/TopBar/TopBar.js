"use client";
import API from "@/server/api";
import React, { useEffect, useState } from "react";

export default function TopBar() {
  const [tagline, setTagline] = useState("");
  const fetchHeadings = async () => {
    try {
      const res = await API.get("/tagline/active-tags");

      setTagline(res.data[0].text);
    } catch (error) {
      console.log("failed to fetch tags", error.message);
    }
  };
  useEffect(() => {
    fetchHeadings();
  }, []);
  console.log(tagline);
  return (
    <div className="w-full bg-indigo-600 text-white py-2 overflow-hidden sticky top-0 z-50 shadow-sm">
      <div className="marquee-wrapper">
        {(tagline ? tagline : "Loading Announcement...") && (
          <>
            <div className="marquee-content">
              {tagline} &nbsp; {tagline} &nbsp; {tagline} &nbsp;
            </div>
            <div className="marquee-content">
              {tagline} &nbsp; {tagline} &nbsp; {tagline} &nbsp;
            </div>
          </>
        )}
      </div>
    </div>
  );
}
