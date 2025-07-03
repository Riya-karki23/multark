"use client";
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "SAAS Development",
      description:
        "Transform your existing application into a promising SaaS model with our expert development services.",
    },
    {
      title: "Enterprise Software",
      description:
        "Build and implement robust Enterprise Software backed by our Long-Term Support (LTS) model for sustained success.",
    },
    {
      title: "Niche Software Solutions",
      description:
        "Tailored industry-specific software for 40 niche verticals to address your unique business challenges.",
    },
    {
      title: "Mobile Applications",
      description:
        "Develop mobile apps that integrate seamlessly with your existing systems for enhanced functionality.",
    },
    {
      title: "CMS & Style Guide",
      description:
        "Align your product’s business model with customer needs using a well-defined CMS and style guide.",
    },
    {
      title: "Web Applications and Portals",
      description:
        "Create efficient web portals to streamline customer and vendor processes with ease.",
    },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
       <div className="text-center mb-10">
  {/* Section Label */}
  <div className="flex items-center justify-center gap-2 mb-2">
    <div className="w-12 h-[2px] bg-red-600" />
    <p className="text-sm uppercase tracking-wider text-red-600 font-semibold">
      What We Do
    </p>
    <div className="w-12 h-[2px] bg-red-600" />
  </div>

  {/* Main Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
    Innovations&nbsp;
    <span className="text-red-600">and</span>&nbsp;Impact
  </h2>

  {/* Subheading */}
  <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
    At Multark, we offer a comprehensive suite of services to meet your ERP and software development needs:
  </p>
</div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-left transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
