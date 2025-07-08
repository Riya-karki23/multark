"use client";
import React, { useEffect, useState } from "react";
import {
  Users,
  HeartHandshake,
  Handshake,
  TrendingUp,
} from "lucide-react"; // Modern icons

const stats = [
  {
    target: 200,
    label: "Referral Clients",
    suffix: "+",
    icon: <Users size={36} className="text-red-500 mb-3" />,
  },
  {
    target: 14,
    label: "Tech Partners",
    suffix: "+",
    icon: <HeartHandshake size={36} className="text-blue-500 mb-3" />,
  },
  {
    target: 8,
    label: "Int. Gold Partners",
    suffix: "+",
    icon: <Handshake size={36} className="text-yellow-400 mb-3" />,
  },
  {
    target: 25,
    label: "Revenue Increased",
    suffix: "M+",
    icon: <TrendingUp size={36} className="text-green-500 mb-3" />,
  },
];

const StatCard = ({ target, label, suffix, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
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
  }, [target]);

  return (
    <div className="relative group rounded-xl p-[2px] bg-gradient-to-tr from-gray-400 via-gray-500 to-gray-400 shadow-xl hover:shadow-white transition-transform transform hover:scale-105">
      <div className="bg-white/90 text-gray-900 backdrop-blur-lg rounded-xl px-6 py-8 text-center">
        <div className="flex flex-col items-center">
          {icon}
          <div className="text-4xl font-extrabold text-gray-700 tracking-tight drop-shadow-sm">
            {count}
            {count === target && suffix}
          </div>
          <p className="mt-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

const CompanyStatsPage = () => {
  return (
    <section
      className="relative pb-20 pt-10 px-4 text-white bg-black bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('https://www.consultancy.uk/illustrations/news/detail/2024-05-27-122123105-Key_considerations_when_selecting_an_ERP_package.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-[2px] w-24 bg-red-700 mx-4"></div>
          <p className="text-2xl uppercase tracking-widest text-white font-bold text-center">
            Performance Overview
          </p>
          <div className="h-[2px] w-24 bg-red-700 mx-4"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatsPage;
