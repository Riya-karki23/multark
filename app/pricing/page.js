"use client";

import React from "react";

const plans = [
  {
    name: "Classic Bronze",
    price: "Rs. 15.5 Lakh",
    highlight: false,
    features: [
      "Lifetime Subscription",
      "ERP: Niche RTU",
      "Implementation: 1 Week",
      "Modules: 7",
      "Power Users: 7",
      "Basic Users: 3",
      "Source Code: No",
      "Mobile App: No",
      "Hypercare Support: No",
      "Cyber Security: No",
      "Testing: Basic",
      "Custom Print Format: 7",
      "Reports: No",
      "Data Import: No",
      "Consultant: 1 day Online",
      "Integration: No",
      "Support Tickets: 30/month",
      "Phone Support: 30/month"
    ]
  },
  {
    name: "Pro Silver",
    price: "Rs. 35.5 Lakh",
    highlight: true,
    features: [
      "Lifetime Subscription",
      "ERP: SUPER Niche RTU",
      "Implementation: 4 Weeks",
      "Modules: 10",
      "Power Users: 10",
      "Basic Users: 10",
      "Source Code: Yes",
      "Mobile App: Yes",
      "Hypercare Support: 1 Week",
      "Cyber Security: Basic",
      "Testing: Inhouse Manual",
      "Custom Print Format: 15",
      "Reports: 4",
      "Data Import: 1 Year",
      "Consultant: 4 days Online",
      "Integration: 1",
      "Support Tickets: 150/month",
      "Phone Support: 150/month"
    ]
  },
  {
    name: "Ultra Gold",
    price: "Rs. 90 Lakh",
    highlight: false,
    features: [
      "Lifetime Subscription",
      "ERP: Customised Niche",
      "Implementation: 20 Weeks",
      "Modules: 14",
      "Power Users: 28",
      "Basic Users: 28",
      "Source Code: Yes",
      "Mobile App: Native",
      "Hypercare Support: 4 Weeks",
      "Cyber Security: Complete",
      "Testing: Inhouse Auto & Manual",
      "Custom Print Format: 40",
      "Reports: 30",
      "Data Import: 4 Years",
      "Consultant: 2 days Onsite",
      "Integration: 3",
      "Support Tickets: 400/month",
      "Phone Support: 500/month"
    ]
  },
  {
    name: "Super Platinum",
    price: "Rs. 2.5 Crore",
    highlight: false,
    features: [
      "Lifetime Subscription",
      "ERP: Customised Super Niche",
      "Implementation: 36 Weeks",
      "Modules: 22",
      "Power Users: 66",
      "Basic Users: 88",
      "Source Code: Yes",
      "Mobile App: Complete Bespoke",
      "Hypercare Support: 12 Weeks",
      "Cyber Security: Military Grade",
      "Testing: Inhouse & External",
      "Custom Print Format: 80",
      "Reports: 50",
      "Data Import: 8 Years",
      "Consultant: 7 days Onsite",
      "Integration: 8",
      "Support Tickets: 1200/month",
      "Phone Support: 1000/month"
    ]
  }
];

export default function PricingTable() {
  return (
    <section className=" px-4 bg-gradient-to-br from-gray-50 to-white text-gray-800  py-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center mb-12">
          <div className="h-[2px] w-24 bg-red-700 mx-4"></div>
          <p className="text-3xl uppercase tracking-widest text-black font-bold">
            Choose your plan
          </p>
          <div className="h-[2px] w-24 bg-red-700 mx-4"></div>
        </div>

        <p className="text-gray-600">Flexible ERP packages tailored to your business needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl shadow-xl border transition hover:scale-[1.02] duration-300 ease-in-out bg-white ${
              plan.highlight ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Best Choice
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
            <p className="text-3xl font-extrabold text-blue-600 mb-4">{plan.price}</p>

            <ul className="text-sm h-64 overflow-y-auto text-left scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 pr-2">
              {plan.features.map((feat, i) => (
                <li key={i} className="py-1 border-b border-gray-100">
                  ✓ {feat}
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md w-full hover:bg-blue-700 transition font-semibold">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
