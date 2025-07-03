import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 px-4 space-y-6">
      
      <div className="flex flex-col md:flex-row gap-12 justify-between items-center md:px-44 md:pt-10 ">
      <div className="md:flex-1 flex flex-col  justify-center items-center gap-6 pr-4 b md:border-r-0 text-gray-400">
        <Link href="/">
          <img
            src="https://erp.multark.com/files/multark-website-logo.png"
            alt="logo-img"
            className="h-8 md:h-12"
          />
          </Link>
        <div>
          <p className="text-sm text-gray-200">Branded By</p>
          <p className="font-semibold text-sm">
            ORDNUNGSKRAFT IT ADVISOR <br /> PRIVATE LIMITED
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-200">Funded By</p>
          <p className="font-semibold text-md">CRISCO CONSULTING</p>
        </div>
      </div>

      {/* Important Links */}
      <div className="md:flex-1 flex justify-center text-left pl-4">
  <ul className="flex gap-3 flex-col text-gray-400">
    {[
      { label: "Refund Policy", href: "/refundPolicy" },
      { label: "GDPR Compliance", href: "/gdprCompliance" },
      { label: "Terms & Conditions", href: "/terms&conditions" },
      { label: "Privacy Policy", href: "/privacyPolicy" },
      { label: "Cancellation Policy", href: "/cancellationPolicy" },
    ].map((item, idx) => (
      <li key={idx}>
        <Link
          href={item.href}
          className=" pb-1 relative w-fit text-gray-400 transition-all duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-600 after:transition-all after:duration-400"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

     <div className="md:flex-1 flex flex-col gap-2 text-gray-400 ">
      <div className="flex gap-5 items-center justify-center">
  <p className="text-white text-2xl font-semibold mb-1">Let's Connect</p>
  <div className="relative w-[60px] h-[60px] rotate-180">
  <button
    className="group relative w-full h-full outline-none border-none bg-transparent cursor-pointer overflow-hidden"
  >
    {/* Circle Border Before */}
    <span className="absolute inset-[7px] rounded-full border-4 border-white transition-all duration-500 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] opacity-100 group-hover:opacity-0 group-hover:scale-75"></span>

    {/* Circle Border After (green) */}
    <span className="absolute inset-[7px] rounded-full border-4 border-[#f34d1a] scale-[1.3] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:opacity-100 group-hover:scale-100"></span>

    {/* Arrow icons wrapper */}
    <div className="absolute top-0 left-0 flex transition-transform duration-500 group-hover:-translate-x-[69px]">
      <span className="block w-[30px] h-[30px] mt-4 ml-[16px] mr-[12px]">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="white"
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
      </span>
      <span className="block w-[30px] h-[30px] mt-4 ml-[20px] mr-[22px]">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="white"
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
      </span>
    </div>
  </button>
</div>
</div>
<div>
  <p>Tell us about your business — we're excited to help you grow with smart ERP solutions.</p>
  <p>
    Reach out at &nbsp;
    <a
      href="mailto:support@multark.com"
      className="text-white underline hover:text-blue-400 transition"
    >
      support@multark.com
    </a>
  </p>
  </div>
   <div className="border-t border-gray-800 pt-2 md:border-0 hidden md:block ">
        <ul className="flex justify-center  items-center gap-6 ">
          <li className="hover:bg-white hover:rounded-full flex justify-center items-center p-2 ">
            <a
              href="https://www.linkedin.com/company/multark/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5s-1.98-.9-1.98-2S1.91 1.5 3 1.5s1.98.9 1.98 2zM1 6h4v12H1zM7 6h3.6v1.8h.1c.5-1 1.7-2.1 3.5-2.1 3.8 0 4.5 2.5 4.5 5.7V18h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V18H7z" />
              </svg>
            </a>
          </li>
          <li className="hover:bg-white hover:rounded-full flex justify-center items-center p-2 ">
            <a
              href="https://x.com/multarkit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.6-2.46.7a4.3 4.3 0 001.9-2.37 8.59 8.59 0 01-2.7 1.03 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 5.1a4.27 4.27 0 001.3 5.7 4.24 4.24 0 01-1.94-.54v.05a4.29 4.29 0 003.44 4.2 4.24 4.24 0 01-1.93.07 4.29 4.29 0 004 2.97A8.61 8.61 0 012 19.54a12.14 12.14 0 006.29 1.85c7.55 0 11.68-6.26 11.68-11.68v-.53A8.33 8.33 0 0022.46 6z" />
              </svg>
            </a>
          </li>
          <li className="hover:bg-white hover:rounded-full flex justify-center items-center p-2 ">
            <a
              href="https://www.facebook.com/multarkit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.88V15.4h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.2.5-1.2 1.1V12h2.4l-.4 3H14v6.48A10 10 0 0022 12z" />
              </svg>
            </a>
          </li>
          <li className="hover:bg-white hover:rounded-full flex justify-center items-center p-2 ">
            <a
              href="https://www.instagram.com/multarkit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1.1.5 1.6 1s.8 1 .9 1.6c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1.1-1 1.6s-1 .8-1.6.9c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.6-1s-.8-1-.9-1.6c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1.1 1-1.6s1-.8 1.6-.9c.5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.7.7 2.6 1 1.8 1.5 1.1 2.2.4 2.9-.1 3.7-.4 4.8c-.3.9-.5 2-.6 3.3C0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .1 1.3.3 2.4.6 3.3.3 1.1.8 1.9 1.5 2.6.7.7 1.5 1.2 2.6 1.5.9.3 2 .5 3.3.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.3-.6 1.1-.3 1.9-.8 2.6-1.5.7-.7 1.2-1.5 1.5-2.6.3-.9.5-2 .6-3.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.3-.3-1.1-.8-1.9-1.5-2.6C21.4 1.5 20.6 1 19.5.7 18.6.4 17.5.2 16.2.1 14.9 0 14.5 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S20 7.6 20 6.9s-.7-1.6-1.6-1.6z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>



  
</div>




      </div>

      {/* Social Media Links */}
      <div className="border-t border-gray-800 pt-6 md:border-0 md:hidden">
        <ul className="flex justify-center  gap-10 ">
          <li>
            <a
              href="https://www.linkedin.com/company/multark/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5s-1.98-.9-1.98-2S1.91 1.5 3 1.5s1.98.9 1.98 2zM1 6h4v12H1zM7 6h3.6v1.8h.1c.5-1 1.7-2.1 3.5-2.1 3.8 0 4.5 2.5 4.5 5.7V18h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V18H7z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/multarkit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.6-2.46.7a4.3 4.3 0 001.9-2.37 8.59 8.59 0 01-2.7 1.03 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 5.1a4.27 4.27 0 001.3 5.7 4.24 4.24 0 01-1.94-.54v.05a4.29 4.29 0 003.44 4.2 4.24 4.24 0 01-1.93.07 4.29 4.29 0 004 2.97A8.61 8.61 0 012 19.54a12.14 12.14 0 006.29 1.85c7.55 0 11.68-6.26 11.68-11.68v-.53A8.33 8.33 0 0022.46 6z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/multarkit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.88V15.4h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.2.5-1.2 1.1V12h2.4l-.4 3H14v6.48A10 10 0 0022 12z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/multarkit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1.1.5 1.6 1s.8 1 .9 1.6c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1.1-1 1.6s-1 .8-1.6.9c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.6-1s-.8-1-.9-1.6c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1.1 1-1.6s1-.8 1.6-.9c.5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.7.7 2.6 1 1.8 1.5 1.1 2.2.4 2.9-.1 3.7-.4 4.8c-.3.9-.5 2-.6 3.3C0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .1 1.3.3 2.4.6 3.3.3 1.1.8 1.9 1.5 2.6.7.7 1.5 1.2 2.6 1.5.9.3 2 .5 3.3.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.3-.6 1.1-.3 1.9-.8 2.6-1.5.7-.7 1.2-1.5 1.5-2.6.3-.9.5-2 .6-3.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.3-.3-1.1-.8-1.9-1.5-2.6C21.4 1.5 20.6 1 19.5.7 18.6.4 17.5.2 16.2.1 14.9 0 14.5 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S20 7.6 20 6.9s-.7-1.6-1.6-1.6z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Note */}
      <div className="border-t border-gray-800 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © 2024 Multark. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
