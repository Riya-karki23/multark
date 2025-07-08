"use client";
import React from "react";
import "./ClientMarquee.css";
import Image from "next/image";

const clientLogos = [
  "1.png", "4.png", "5.png", "6.png", "9.png", "10.png", "11.png",
  "13.png", "15.png", "16.png", "19.png"
];

const ClientMarquee = () => {
  return (
    <section className="clients-section">
      {/* Heading */}
      <div className="clients-heading">
        <div className="line" />
        <h2>Our Clients</h2>
        <div className="line" />
      </div>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {clientLogos.concat(clientLogos).map((file, i) => (
            <div
              key={i}
              className="relative h-[60px] w-auto aspect-[2/1] flex-shrink-0"
            >
              <Image
                src={`/clients-img/${file}`}
                alt={`Client ${file}`}
                fill
                className="object-contain grayscale opacity-85 transition-all duration-300 hover:grayscale-0 hover:opacity-60 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
