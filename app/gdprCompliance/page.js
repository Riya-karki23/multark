import React from "react";

const page = () => {
  return (
    <div className=" text-black  w-[100vw] flex justify-center bg-[#9d9b9b] min-h-screen py-24">
      <div className="px-6  mx-3  bg-white text-black shadow-[0_0_10px_rgba(0,0,0,0.5)] p-10  w-[794px] ">
        <h3 className="text-2xl font-bold text-center mb-6 border-b-2 pb-4 border-b-gray-400">
          GDPR - What Ordnungskraft IT Advisory Private Limited is doing about it
        </h3>

        <section className="mb-6">
          <h4 className="text-lg font-semibold mb-2">GDPR Commitment</h4>
          <p>
            Crisco has always honored its users’ rights to data privacy and protection.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-semibold mb-2">What is GDPR?</h4>
          <p>
            GDPR is an EU-wide privacy and data protection law that regulates how EU residents' data is protected by companies and enhances the control the EU residents have over their personal data.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-semibold mb-2">What is Personal Data?</h4>
          <p>
            Any data that relates to an identifiable or identified individual.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold mb-2">Our GDPR Preparedness</h4>
          <p className="mb-4">
            We have taken several steps to ensure full compliance with GDPR:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>We have raised awareness across the organization.</li>
            <li>We have assessed all Ordnungskraft IT Advisory Private Limited products individually against GDPR requirements.</li>
            <li>We have created an Information Management Document (IMD).</li>
            <li>We have evaluated our sub-processors.</li>
            <li>We appointed internal privacy champions for all teams.</li>
            <li>Our application teams have embraced privacy by design.</li>
            <li>We have amended our Data Processing Addendum.</li>
            <li>We conducted Data Protection Impact Assessments (DPIA).</li>
            <li>We audited our products, processes, and operations.</li>
            <li>We improved data security methods based on audit results.</li>
            <li>We cleaned up our databases for accuracy and relevance.</li>
            <li>We follow an internal Privacy Incident Response policy for breach notifications.</li>
            <li>We updated our Privacy Policy to align with current legal requirements.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default page;
