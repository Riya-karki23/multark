"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Lucide icons
import {
  Rocket,
  Brain,
  Factory,
  Wrench,
  Lightbulb,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    icon: <Rocket size={40} className="text-red-500" />,
    title: "Visionary Tech Partner",
    desc: "Delivering cutting-edge ERP & software for modern business landscapes.",
  },
  {
    icon: <Brain size={40} className="text-blue-500" />,
    title: "Expert-Backed Solutions",
    desc: "Driven by Multark & Ordnungskraft IT Advisory with strategic funding.",
  },
  {
    icon: <Factory size={40} className="text-yellow-400" />,
    title: "Industry-Specific Tools",
    desc: "Tailored for 40+ verticals — logistics, pharma, healthcare & more.",
  },
  {
    icon: <Wrench size={40} className="text-green-400" />,
    title: "Full-Spectrum Services",
    desc: "From mobile apps to enterprise SaaS & custom cloud platforms.",
  },
  {
    icon: <Lightbulb size={40} className="text-amber-300" />,
    title: "Innovation First",
    desc: "Merging tech, design & automation to fuel sustainable growth.",
  },
  {
    icon: <BarChart3 size={40} className="text-purple-400" />,
    title: "Insight-Driven Growth",
    desc: "Empowering decisions with analytics, BI dashboards & reports.",
  },
];

const AboutPage = () => {
  const pointRefs = useRef([]);

  useEffect(() => {
    pointRefs.current.forEach((ref, i) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: i * 0.1,
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
    <section
      id="about"
      className="relative py-24 px-4 text-white bg-black bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpin3TPY9L4AnuWcf-X1v-F1lB1XC21lylTlmZ-c9HyHB5U_2fFiXLO61tZufwuGValTI&usqp=CAU')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
        {/* Heading */}
        <div className="mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="h-[2px] w-20 bg-red-600 mx-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest">
              Who we are
            </h2>
            <div className="h-[2px] w-20 bg-red-600 mx-4" />
          </div>
          <p className="text-gray-300 text-base sm:text-lg">
            Empowering Businesses with Future-Ready ERP & Tech
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {points.map((point, index) => (
            <div
              key={index}
              ref={(el) => (pointRefs.current[index] = el)}
              className="w-full max-w-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md 
                         hover:shadow-red-500/40 transition-all duration-300 hover:scale-[1.02] backdrop-blur-lg"
            >
              <div className="flex flex-col items-center text-center">
                {point.icon}
                <h3 className="text-xl font-semibold mt-4 text-white">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
