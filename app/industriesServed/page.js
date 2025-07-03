'use client';
import React from 'react';

const industries = [
  {
    name: 'Consumer Packaged Goods',
    image: 'https://www.retailtouchpoints.com/wp-content/uploads/2024/11/Online-shopping-FokkeBaarssen-960x540.jpg',
  },
  {
    name: 'Pharmaceuticals',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjciirxM95AQlD99e5MSg4tXY7s4wMExWUw&s',
  },
  {
    name: 'Automotive',
    image: 'https://images.ctfassets.net/v7wr16nrr0mz/4TDbNAhdMu1Gbl4WBDoHSn/519159862b2319133092f2e833b72aea/automotive-industry-trends-banner-1920x1080.jpg',
  },
  {
    name: 'Construction',
    image: 'https://www.letsbuild.com/wp-content/uploads/2023/07/Depositphotos_89120612_s-2019.jpg',
  },
  {
    name: 'Retail and e-Commerce',
    image: 'https://www.resultfirst.com/wp-content/uploads/2024/04/Untitled-16-1024x576.png',
  },
  {
    name: 'Engineering',
    image: 'https://dropinblog.net/34252894/files/featured/Blog_Heros_10.webp',
  },
  {
    name: 'Healthcare',
    image: 'https://www.t-systems.com/resource/image/1016608/ratio3x2/1440/960/ecb523ac0e35f710bea75a1c42dd9792/AB71527C68B769F6BFE0253C7C21C191/im-cloud-as-enabler-for-healthcare-digitalization.jpg',
  },
  {
    name: 'Education',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLM2RkA2Uipu0Jy-CBqTAtydHs3dB779FLA4Qb3IHVYQCfm4ZYPttldI503OUY3LErYM&usqp=CAU',
  },
];

const Industries = () => {
  return (
    <div className="bg-white py-10">
      <style>
        {`
          @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: scrollMarquee 40s linear infinite;
          }
          .marquee-wrapper:hover .marquee-track {
            animation-play-state: paused;
          }
        `}
      </style>

      

      <div className="flex items-center justify-center my-4">
  <div className="h-[2px] w-28  bg-red-700 mx-4"></div>
  <p className="text-2xl  uppercase tracking-widest text-gray-700 font-bold">
   Industries we served
  </p>
  <div className="h-[2px] w-28 bg-red-700 mx-4"></div>
</div>
        

      <div className="overflow-hidden relative w-full marquee-wrapper">
        <div className="flex gap-6 px-4 whitespace-nowrap w-max marquee-track py-10">
          {[...industries, ...industries].map((item, index) => (
            <div
              key={index}
              className="w-[240px] h-[260px] bg-white rounded-2xl shadow-md hover:shadow-gray-500 transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[70%] object-cover rounded-t-2xl"
              />
              <div className="p-2 text-center font-semibold text-gray-800 text-sm pt-8">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
