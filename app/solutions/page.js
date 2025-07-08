"use client";
import React from "react";

const solutions = [
  {
    title: "Custom Software Development",
    description:
      "Tailor-made solutions built to meet specific business goals, system integrations, and operational efficiency.",
    video: "/assets/s1.mp4",
  },
  {
    title: "SaaS-Based Applications",
    description:
      "Scalable cloud-based applications with global access, analytics, and multi-tenant support.",
    video: "/assets/s2.mp4",
  },
  {
    title: "Enterprise Automation",
    description:
      "AI-powered systems to streamline workflows, reduce manual effort, and boost productivity.",
    video: "/assets/s3.mp4",
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
      "Cloud-native deployments, CI/CD pipelines, and infrastructure management on AWS, Azure, or GCP.",
    video: "/assets/s4.mp4",
  },
];

const Solutions = () => {
  return (
    <section className="bg-gray-100" id="solutions">
      <div className="">
        {solutions.map((sol, index) => (
          <div
            key={index}
            className={`md:min-h-screen  flex  md:gap-0 gap-10 pb-16 md:pb-0 flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Video */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen ">
              <video
                src={sol.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 md:h-screen flex items-center justify-center px-8">
              <div className="text-center max-w-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                  {sol.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {sol.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
