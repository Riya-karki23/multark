"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex justify-center">
    <section className="py-28 px-6  text-black w-[100vw] md:w-[80vw] " id="contact">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Contact Form */}
        <div>
                <div className="flex items-center justify-center mb-10">
  <div className="h-[2px] flex-1 bg-red-700 mx-4"></div>
  <p className="text-2xl uppercase tracking-widest text-gray-700 font-semibold">
   Get in Touch
  </p>
  <div className="h-[2px] flex-1 bg-red-700 mx-4"></div>
</div>
          <form className="space-y-7">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="bg-black w-full text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="rounded-md overflow-hidden shadow-lg">
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
    </div>
  );
};

export default ContactPage;
