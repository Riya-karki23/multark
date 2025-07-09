import React from "react";
import ServicesSection from "./services/page";
import AboutPage from "./about/page";
import CompanyStatsPage from "./components/CompanyStats";
import ContactPage from "./contact/page";
import HomeHero from "./components/HomePage";
import Industries from "./industriesServed/page";
import ClientPage from "./Clients/page";
import PricingTable from "./pricing/page";

const page = () => {
  return (
    <>
      <HomeHero/>
      <ServicesSection/>
      <AboutPage/>
      <Industries/>
      <CompanyStatsPage/>
      <PricingTable/>
      <ClientPage/>
      <ContactPage/>
      
      </>
  );
};

export default page;
