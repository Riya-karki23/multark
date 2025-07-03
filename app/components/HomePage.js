"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HomeHero = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Animate video background
    tl.fromTo(
      videoRef.current,
      { x: "-50%", scale: 1.1, opacity: 0 },
      { x: "0%", scale: 1, opacity: 1, duration: 1.5 }
    )

      // Animate text elements
      .fromTo(headingRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(paraRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
      .fromTo(buttonRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 }, "-=0.4");
  }, []);

  return (
    
    <div className="relative h-[60vh] md:h-[100vh] w-full text-white flex items-center justify-center bg-fixed flex-col px-6 py-12 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/assets/home-videopage.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <p
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold drop-shadow-md"
        >
          Powering Business Growth with ERP Innovation
        </p>
        <p
          ref={paraRef}
          className="text-md md:text-lg py-6 max-w-xl mx-auto text-gray-200"
        >
          Streamline operations, boost productivity, and unlock insights with our intelligent ERP solutions.
        </p>
        <button
          ref={buttonRef}
          className="bg-white text-black rounded-md px-10 py-3 font-semibold hover:bg-gray-200 transition"
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
