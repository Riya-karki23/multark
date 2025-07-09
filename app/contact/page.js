"use client";
import React from "react";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="relative w-full text-white py-28 px-6 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/contact-bg.webp')`, 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div>
          <div className="flex items-center justify-center mb-10">
            <div className="h-[2px] flex-1 bg-red-600 mx-4"></div>
            <p className="text-2xl uppercase tracking-widest font-semibold text-white">
              Get in Touch
            </p>
            <div className="h-[2px] flex-1 bg-red-600 mx-4"></div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-500 rounded-md bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-500 rounded-md bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-500 rounded-md bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="bg-white w-full text-black font-bold cursor-pointer px-6 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Map */}
        <div className="rounded-md overflow-hidden shadow-lg border border-white/10">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Kamdhenu%2023%20West,%20Koparkhairane,%20Navi%20Mumbai,%20Maharashtra&output=embed"
            width="100%"
            height="100%"
            style={{ minHeight: "400px", border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
