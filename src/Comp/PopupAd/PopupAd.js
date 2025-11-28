"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import API from "@/server/api";

const PopupAd = ({ countdownStart = 8 }) => {
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(countdownStart);
  const [clicks, setClicks] = useState(0);
  const [ad, setAd] = useState(null);

  // // Fetch ads using Axios
  // useEffect(() => {
  //   const fetchAd = async () => {
  //     try {
  //       const res = await API.get("/ads");
  //       const ads = res.data?.ads || [];
  //       // ✅ Filter only active ads
  //       const activeAds = ads.filter((ad) => ad.isActive === true);
  //       if (activeAds.length > 0) {
  //         setAd({
  //           img: activeAds[0].imageUrl,
  //           link: activeAds[0].link || "#",
  //         });
  //       } else {
  //         console.log("No active ads found.");
  //       }
  //     } catch (error) {
  //       console.log("Ad fetch failed ❌", error);
  //     }
  //   };
  //   fetchAd();
  // }, []);

  // // Show popup after 1 second
  // useEffect(() => {
  //   const timer = setTimeout(() => setOpen(true), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // // Load click count
  // useEffect(() => {
  //   const storedClicks = localStorage.getItem("popupAdClicks");
  //   if (storedClicks) setClicks(Number(storedClicks));
  // }, []);

  // // Countdown logic
  // useEffect(() => {
  //   if (!open) return;

  //   const countdownTimer = setInterval(() => {
  //     setCountdown((prev) => {
  //       if (prev <= 1) {
  //         setOpen(false);
  //         clearInterval(countdownTimer);
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(countdownTimer);
  // }, [open]);

  useEffect(() => {
    let popupTimer;
    let countdownTimer;

    // 1. Fetch Ads
    const fetchAd = async () => {
      try {
        const res = await API.get("/ads");
        const ads = Array.isArray(res.data) ? res.data : [];
        const activeAds = ads.filter((ad) => ad.isActive === true);

        if (activeAds.length > 0) {
          setAd({
            img: activeAds[0].imageUrl,
            link: activeAds[0].link || "#",
          });
        }
      } catch (error) {
        console.log("Ad fetch failed ❌", error);
      }
    };

    fetchAd();

    // 2. Load stored clicks
    const storedClicks = localStorage.getItem("popupAdClicks");
    if (storedClicks) setClicks(Number(storedClicks));

    // 3. Timer to show popup after 1 second
    popupTimer = setTimeout(() => {
      setOpen(true);

      // 4. Start countdown AFTER popup opens
      countdownTimer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownTimer);
            setOpen(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1000);

    // CLEANUP
    return () => {
      clearTimeout(popupTimer);
      clearInterval(countdownTimer);
    };
  }, []);



  // Handle ad click
  const handleClick = () => {
    const newCount = clicks + 1;
    setClicks(newCount);
    localStorage.setItem("popupAdClicks", newCount);
  };

  // Don't render until ad exists
  if (!ad || !open) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]" />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              z-[9999] bg-white/80 backdrop-blur-xl shadow-xl border border-white/30 
              rounded-2xl p-3 w-72"
            >
              <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                Closing in {countdown}s
              </div>

              <button
                className="absolute top-2 right-2 bg-black/30 hover:bg-black/60 text-white rounded-full p-1"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>

              <Link href={ad.link} onClick={handleClick}>
                <Image
                  src={ad.img}
                  alt="Ad Image"
                  width={260}
                  height={180}
                  className="rounded-xl cursor-pointer"
                />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopupAd;
