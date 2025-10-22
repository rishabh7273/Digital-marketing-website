import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map menu items to routes
  const menuItems = [
    { name: 'About us', id: 'about-us' },
    { name: 'Services', id: 'Services' },
    { name: 'Why Us', id: 'Why-us' },
    { name: 'Testimonials', id: 'Testimonials' },
  ];

  return (
    <nav
      className={`h-20 fixed top-0 left-0 w-full z-50 flex items-center px-8 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      {/* Left: Logo */}
      <div className="text-2xl font-bold">
        <img
          className={`h-12 w-auto border rounded-full border-amber-700 transition`}
          src="Images/Logo.png"
          alt="logo"
        />
      </div>

      {/* Center: Menu */}
      <ul className="flex space-x-6 mx-auto">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`px-4 py-2 rounded-full italic font-bold cursor-pointer transition ${scrolled
                ? 'bg-transparent text-[#92400E] hover:bg-[#E2A16F] hover:text-[#432323]'
                : 'text-white hover:bg-[#E2A16F] hover:text-[#432323]'
              }`}
          >
            <Link to={item.id}
              smooth={true}      // smooth scroll
              duration={600}     // scroll speed
              spy={true}         // active link tracking
              offset={-80}
            >{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Right: Button */}
      <div>
        <a
          href="https://wa.me/919335501806?text=Hello%20Opyra%20Digital%20Marketing!"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full transition flex items-center justify-center w-15 h-15"
        >
          <img
            src="/Images/whatsapp.jpg"  // use transparent PNG
            alt="WhatsApp"
            className="w-full h-full object-cover rounded-full"
          />
        </a>
      </div>
    </nav>
  );
}








