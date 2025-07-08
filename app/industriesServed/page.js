'use client';
import React from 'react';

const industries = [
  {
    name: 'Consumer Packaged Goods',
    image: 'https://www.shutterstock.com/image-photo/african-american-woman-taking-milk-600nw-2493027475.jpg',
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
    <div className="bg-gray-50 py-14 px-6">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-3">
          <div className="h-[2px] w-24 bg-red-700 mx-2" />
          <h2 className="text-3xl uppercase tracking-wide text-gray-800 font-bold">
            Industries We Serve
          </h2>
          <div className="h-[2px] w-24 bg-red-700 mx-2" />
        </div>
        <p className="text-gray-500 text-sm">
          Serving a wide spectrum of industries with innovative solutions.
        </p>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4 py-6 w-max mx-auto">
          {industries.map((item, index) => (
            <div
              key={index}
              className="min-w-[240px] max-w-[240px] rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transform hover:scale-[1.03] hover:border-red-600 transition duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-44 w-full object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-base font-semibold text-gray-800 leading-snug">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
