import React from "react";
import { TbFileCertificate } from "react-icons/tb";
import { BiSolidLockOpen } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";
import LinguaPhoto from "../../assets/linguaPhoto.png";
import { BiLogoTelegram } from "react-icons/bi";
import { MdAddIcCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-[rgba(18,18,18,1)] rounded-tl-[40px] rounded-tr-[40px] md:rounded-tl-[60px] md:rounded-tr-[60px] lg:rounded-tl-[70px] lg:rounded-tr-[70px] h-auto gap-8 lg:gap-12 py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      
      {/* Header text of footer */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Get your translation started today
        </h2>
      </div>

      {/* Order buttons section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
        <button className="w-full sm:w-auto min-w-[180px] p-3 px-6 border-[1px] rounded-full bg-[rgba(8,52,115,1)] cursor-pointer hover:bg-[#083f73] transition-colors duration-300">
          <p className="text-white font-medium">Start Your Order</p>
        </button>

        <button className="w-full sm:w-auto min-w-[180px] p-3 px-6 border-[1px] border-gray-400 rounded-full cursor-pointer bg-[rgba(18,18,18,1)] hover:bg-[rgba(18,18,29,0.1)] hover:border-white transition-all duration-300">
          <p className="text-white font-medium">Get a Quote</p>
        </button>
      </div>

      {/* Features grid */}
         {/* Features grid */}
         <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          
          {/* Professional Quality */}
          <div className="p-4 lg:p-6 rounded-2xl bg-[rgba(31,31,30,1)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] rounded-md bg-[rgba(43,43,43,1)] flex items-center justify-center flex-shrink-0">
                <TbFileCertificate className="text-lg text-white"/>
              </div>
              <h3 className="text-white font-semibold text-base lg:text-lg">Professional Quality</h3>
            </div>
            <p className="text-gray-300 text-xs lg:text-sm leading-tight pl-[42px]">
              Expert translators ensuring accuracy and reliability
            </p>
          </div>

          {/* Speedy Turnarounds */}
          <div className="p-4 lg:p-6 rounded-2xl bg-[rgba(31,31,30,1)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] rounded-md bg-[rgba(43,43,43,1)] flex items-center justify-center flex-shrink-0">
                <RiMailSendFill className="text-lg text-white"/>
              </div>
              <h3 className="text-white font-semibold text-base lg:text-lg">Speedy Turnarounds</h3>
            </div>
            <p className="text-gray-300 text-xs lg:text-sm leading-tight pl-[42px]">
              Fast service with same-day options available
            </p>
          </div>

          {/* Simple Pricing */}
          <div className="p-4 lg:p-6 rounded-2xl bg-[rgba(31,31,30,1)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] rounded-md bg-[rgba(43,43,43,1)] flex items-center justify-center flex-shrink-0">
                <RiMoneyDollarCircleLine className="text-lg text-white"/>
              </div>
              <h3 className="text-white font-semibold text-base lg:text-lg">Simple Pricing</h3>
            </div>
            <p className="text-gray-300 text-xs lg:text-sm leading-tight pl-[42px]">
              Clear pricing with no hidden fees
            </p>
          </div>

          {/* Secure & Confidential */}
          <div className="p-4 lg:p-6 rounded-2xl bg-[rgba(31,31,30,1)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] rounded-md bg-[rgba(43,43,43,1)] flex items-center justify-center flex-shrink-0">
                <BiSolidLockOpen className="text-lg text-white"/>
              </div>
              <h3 className="text-white font-semibold text-base lg:text-lg">Secure & Confidential</h3>
            </div>
            <p className="text-gray-300 text-xs lg:text-sm leading-tight pl-[42px]">
              Your information stays private and protected
            </p>
          </div>

        </div>
      </div>
      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto border-b border-gray-500 border-opacity-30 m-5 md:m-[50px] lg:m-[100px]"></div>

      {/* Footer info links */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Brand & Contact */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8">
            
            {/* Brand */}
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] object-cover flex-shrink-0"
                src={LinguaPhoto}
                alt="World Translate Service Logo"
              />
              <span className="text-xl md:text-2xl font-semibold text-gray-200 leading-tight">
                World Translate Service
              </span>
            </div>

            {/* Description */}
            <div className="text-gray-300 space-y-1">
              <div className="text-base lg:text-lg">Speedy and reliable translation services.</div>
              <div className="text-base lg:text-lg">Quality you can trust.</div>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-2">
              <a 
                href="tel:+998933963097" 
                className="flex items-center text-gray-200 hover:text-gray-100 transition-colors cursor-pointer group"
              >
                <div className="w-[35px] h-[35px] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform"> 
                  <MdAddIcCall/>
                </div>
                <span className="text-sm md:text-base">+998 95 085 71 99</span>
              </a>
              
              <a 
                href="https://t.me/mbmbiznes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-200 hover:text-gray-100 transition-colors cursor-pointer group"
              >
                <div className="w-[35px] h-[35px] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform"> 
                  <BiLogoTelegram />
                </div>
                <span className="text-sm md:text-base">@Odiljon_3097</span>
              </a>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap gap-2 text-sm md:text-base text-gray-300">
              <a href="#" className="hover:text-gray-100 transition-colors">Terms</a>
              <span className="text-gray-500">|</span>
              <a href="#" className="hover:text-gray-100 transition-colors">Refunds</a>
              <span className="text-gray-500">|</span>
              <a href="#" className="hover:text-gray-100 transition-colors">Privacy</a>
              <span className="text-gray-500">|</span>
              <a href="#" className="hover:text-gray-100 transition-colors">Security</a>
            </div>

            {/* Copyright */}
            <div className="text-sm md:text-base text-gray-400">
              © 2025 World Translate Service
            </div>
          </div>

          {/* Right sections */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Certified Translation</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Standard Translation</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Pricing</a></li>
                </ul>
                
                <h4 className="text-lg font-semibold text-gray-200 mt-6 mb-4">For Businesses</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Business Accounts</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">White Label Translation</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Document Translation API</a></li>
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">Solutions</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">By Language</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">By Document</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">By Use Case</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">By Industry</a></li>
                </ul>
                
                <h4 className="text-lg font-semibold text-gray-200 mt-6 mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Help Center</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Refer &amp; Earn</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">API Docs</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Order Lookup</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">About</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Contact Us</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Translation Jobs</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Partnerships</a></li>
                  <li><a href="#" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors block py-1">Guarantee</a></li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;