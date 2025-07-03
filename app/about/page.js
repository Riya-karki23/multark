"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const pointRefs = useRef([]);

  const points = [
    {
      icon: "🚀",
      title: "Visionary Technology Partner",
      desc: "We provide cutting-edge ERP and software solutions tailored to modern business needs.",
    },
    {
      icon: "🧠",
      title: "Backed by Expertise",
      desc: "A Multark initiative, led by Ordnungskraft IT Advisory Pvt. Ltd. and funded by Crisco Consulting.",
    },
    {
      icon: "🏭",
      title: "Niche Industry Focus",
      desc: "Offering industry-specific systems for 40+ verticals — from logistics to healthcare.",
    },
    {
      icon: "🛠️",
      title: "Full-Spectrum Services",
      desc: "From SaaS and web applications to enterprise-grade custom software and mobile apps.",
    },
    {
      icon: "💡",
      title: "Innovation with Impact",
      desc: "We blend creativity, automation, and technology to help businesses grow sustainably.",
    },
  ];

  useEffect(() => {
    pointRefs.current.forEach((ref, i) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" className="bg-white text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
         <div className="flex items-center justify-center my-4">
  <div className="h-[2px] w-28 bg-red-700 mx-4"></div>
  <p className="text-2xl  uppercase tracking-widest text-gray-700 font-bold">
    Who we are
  </p>
  <div className="h-[2px] w-28 bg-red-700 mx-4"></div>
</div>
        
          <p className="text-gray-500 mt-2">
            Empowering Businesses with Smart ERP & Software Solutions
          </p>
        </div>

        {/* Layout: Cards Left - Video Right */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Points */}
          <div className="grid gap-6 h-full">
            {points.map((point, index) => (
              <div
                key={index}
                ref={(el) => (pointRefs.current[index] = el)}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                  <span className="text-xl">{point.icon}</span> {point.title}
                </h3>
                <p className="text-gray-700 text-sm">{point.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Full-height Video */}
          <div className="h-full flex items-stretch">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg shadow-lg"
            >
              <source
                src="/assets/about-video.webm"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
