'use client';
import Image from 'next/image';
import React from 'react';

const industries = [
  {
    name: 'Consumer Packaged Goods',
    image: '/industries-img/consumer-packed-goods.webp',
  },
  {
    name: 'Pharmaceuticals',
    image: '/industries-img/pharma.jpg',
  },
  {
    name: 'Automotive',
    image: '/industries-img/automotive.jpg',
  },
  {
    name: 'Construction',
    image: '/industries-img/construction.jpg',
  },
  {
    name: 'Retail and e-Commerce',
    image: '/industries-img/retail-commerce.png',
  },
  {
    name: 'Engineering',
    image: '/industries-img/engineering.webp',
  },
  {
    name: 'Healthcare',
    image: '/industries-img/healthcare.jpg',
  },
  {
    name: 'Education',
    image: '/industries-img/education.jpg',
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
        <div className="flex gap-7 px-4 py-6 w-max mx-auto">
          {industries.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-[280px] rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transform hover:scale-[1.04] 0 transition duration-300 cursor-pointer"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
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
