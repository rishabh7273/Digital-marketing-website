import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";


export default function Footer() {

const navigate = useNavigate();
  
      const handleClick = () => {
          navigate('/contact');
      };

  return (
    <footer className="bg-[#3B2F2F] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* --- Company Info --- */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Opyra Digital Marketing <span className="font-normal italic" >cum AI agency</span></h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Opyra is a digital marketing & AI-powered agency helping brands grow through creativity,
            data, and intelligent automation. We bridge innovation with strategy to drive real results.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-bold italic text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="home" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-[#FFD740]">
                Home
              </Link>
            </li>
            <li>
              <Link to="about-us" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-[#FFD740]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="Services" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-[#FFD740]">
                Services
              </Link>
            </li>
            <li>
              <Link to="Testimonials" smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-[#FFD740]">
                Testimonials
              </Link>
            </li>
            <li>
              <button
               onClick={handleClick} className="cursor-pointer hover:text-[#FFD740]">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* --- Our Expertise --- */}
        <div>
          <h3 className="text-lg font-bold italic text-white mb-3">Our Expertise</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#seo" className="hover:text-[#FFD740]">Search Engine Optimization (SEO)</a></li>
            <li><a href="#ads" className="hover:text-[#FFD740]">Performance Marketing (Google & Meta Ads)</a></li>
            <li><a href="#branding" className="hover:text-[#FFD740]">Brand Strategy & Identity</a></li>
            <li><a href="#ai" className="hover:text-[#FFD740]">AI-Powered Marketing Solutions</a></li>
            <li><a href="#webdev" className="hover:text-[#FFD740]">Web & App Development</a></li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div>
          <h3 className="text-lg font-bold text-white italic  mb-3">Get in Touch</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#FFD740]" />
              <span>contact@opyraagency.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#FFD740]" />
              <span>+91 9335501806 </span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-[#FFD740]" />
              <span>Varanasi, Uttar Pradesh, India</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://github.com/rishabh72736"
              className="p-2 bg-[#FFD740] rounded-full hover:bg-white transition flex items-center justify-center"
            >
              <Facebook size={18} className="text-[#0C0F16]" />
            </a>

            <a
              href="#"
              className="p-2 bg-[#FFD740] rounded-full hover:bg-white transition flex items-center justify-center"
            >
              <Instagram size={18} className="text-[#0C0F16]" />
            </a>

            <a
              href="https://wa.me/919335501806?text=Hello%20Opyra%20Digital%20Marketing!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2  rounded-full hover:bg-white transition flex items-center justify-center"
            >
              <img
                src="/Images/whatsapp.jpg"
                alt="WhatsApp"
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
            </a>
          </div>

        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Opyra Digital Marketing. All rights reserved.
        | Crafted by Rishabh
      </div>
    </footer>
  );
}
