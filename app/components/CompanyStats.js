"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: "🚀", target: 200, label: "Referral Clients", suffix: "+" },
  { icon: "🏢", target: 14, label: "Tech Partners", suffix: "+" },
  { icon: "🎯", target: 8, label: "Int. Gold Partners", suffix: "+" },
  { icon: "📈", target: 25, label: "Revenue Increased", suffix: "M+" },
];

const StatCard = ({ icon, target, label, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div
      ref={ref}
      className="bg-white/5 backdrop-blur-lg border border-white/20 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-5xl mb-2">{icon}</div>
      <div className="text-4xl font-extrabold text-cyan-300">
        {count}
        {count === target && suffix}
      </div>
      <p className="text-sm mt-2 text-gray-300">{label}</p>
    </div>
  );
};

const CompanyStatsPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".stat-card");
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 bg-gradient-to-bl from-gray-300 via-gray-800 to-gray-300 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center ju">
        {/* Left: Heading + Stats */}
        <div>
            <div className="flex items-center justify-center my-4">
  <div className="h-[2px] w-28 bg-red-700 mx-4"></div>
  <p className="text-2xl  uppercase tracking-widest text-white font-bold">
   Impact in numbers
  </p>
  <div className="h-[2px] w-28 bg-red-700 mx-4"></div>
</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center py-10">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Video */}
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/assets/company-stats.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default CompanyStatsPage;
