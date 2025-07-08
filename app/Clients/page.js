"use client";
import React from "react";
import "./ClientMarquee.css";

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
          <img src="/clients-img/1.png" alt="Client 1" />
          <img src="/clients-img/4.png" alt="Client 4" />
          <img src="/clients-img/5.png" alt="Client 5" />
          <img src="/clients-img/6.png" alt="Client 6" />
          <img src="/clients-img/9.png" alt="Client 9" />
          <img src="/clients-img/10.png" alt="Client 10" />
          <img src="/clients-img/11.png" alt="Client 11" />
          <img src="/clients-img/14.png" alt="Client 14" />
          <img src="/clients-img/16.png" alt="Client 16" />

          {/* Duplicates for smooth loop */}
          <img src="/clients-img/1.png" alt="Client 1" />
          <img src="/clients-img/4.png" alt="Client 4" />
          <img src="/clients-img/5.png" alt="Client 5" />
          <img src="/clients-img/6.png" alt="Client 6" />
          <img src="/clients-img/9.png" alt="Client 9" />
          <img src="/clients-img/10.png" alt="Client 10" />
          <img src="/clients-img/11.png" alt="Client 11" />
          <img src="/clients-img/14.png" alt="Client 14" />
          <img src="/clients-img/16.png" alt="Client 16" />
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
