import React from "react";
import ServicesSection from "./services/page";
import AboutPage from "./about/page";
import CompanyStatsPage from "./components/CompanyStats";
import ContactPage from "./contact/page";
import BlogsPage from "./blogs/page";
import HomeHero from "./components/HomePage";
import Industries from "./industriesServed/page";

const page = () => {
  return (
    <>
    <HomeHero/>
      <ServicesSection/>
      <AboutPage/>
      <Industries/>
      <CompanyStatsPage/>
      <BlogsPage/>
      <ContactPage/>
      </>
  );
};

export default page;
