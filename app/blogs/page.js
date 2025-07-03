"use client";
import React from "react";
import Link from "next/link";

const blogs = [
  {
    title: "7 Reasons Why Logistics Companies Need an ERP System for Success",
    excerpt:
      "Logistics companies operate in a fast-paced environment where efficiency, accuracy, and customer satisfaction are key. ERP helps streamline inventory, fleet, orders, and more...",
    image:
      "https://www.bsquare.in/blog/wp-content/uploads/2023/07/erp-software-development.jpg",
    author: "Basant Mahar",
    date: "13 November 2024",
    readTime: "4 min read",
    url: "https://multark.com/blog/business/7-reasons-why-logistics-companies-need-an-erp-system-for-success",
  },
  {
    title:
      "Leveraging ERP for Streamlined Operations in Construction Companies",
    excerpt:
      "Managing multiple projects, schedules, and budgets in construction is tough. ERP centralizes everything — from resource management to real-time insights and compliance...",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80",
    author: "Akshay Patil",
    date: "13 November 2024",
    readTime: "4 min read",
    url: "https://multark.com/blog/business/leveraging-erp-for-streamlined-operations-in-construction-companies-with-multark",
  },
];

const BlogsPage = () => {
  return (
    <section className="bg-gray-50 py-24 px-6" id="blogs">
      <div className=" mx-auto text-center mb-10">
       
 <div className="flex items-center justify-center my-4">
  <div className="h-[2px] w-28 bg-red-700 mx-4"></div>
  <p className="text-2xl  uppercase tracking-widest text-gray-700 font-bold">
    Our Latest Blogs
  </p>
  <div className="h-[2px] w-28 bg-red-700 mx-4"></div>
</div>
        
        <p className="text-gray-500 mt-2">Explore ERP insights across industries</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <Link
            key={idx}
            href={blog.url}
            target="_blank"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">{blog.excerpt}</p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
                    {blog.author.split(" ")[0][0]}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">{blog.author}</p>
                    <p className="text-xs text-gray-500">
                      {blog.date} · {blog.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
