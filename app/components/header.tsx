'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = ['JOIN NEWSLETTER', 'MUSIC', 'VIDEO', 'TOUR'] as const;
  type MenuItem = typeof menuItems[number];

  const musicSubItems = ['Albums', 'Singles', 'Playlists', 'Merch'];

  const toggleDropdown = (item: MenuItem) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header className="flex justify-between items-center py-4 border-b border-opacity-10 border-white">
      <Link href='#socials' passHref>
        <div className="text-3xl font-bold text-accent cursor-pointer">GT</div>
      </Link>
      
      {/* Desktop Menu (hidden on mobile) */}
      <nav className="hidden md:block">
        <ul className='flex gap-3 cursor-pointer'>
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`hover:border-b hover:border-black ${
                item === 'JOIN NEWSLETTER' ? 
                'hover:bg-amber-700 hover:border-black px-3 rounded' : 
                ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl focus:outline-none" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div 
            className="absolute top-0 left-0 right-0 bg-white text-black w-full z-50 shadow-lg"
          >
            {/* Close button at the top */}
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl focus:outline-none"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            
            <ul className="px-4 pb-4 space-y-3">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-200 pb-2 last:border-b-0">
                  <div 
                    className="flex justify-between items-center py-2"
                    onClick={() => item === 'MUSIC' ? toggleDropdown(item) : null}
                  >
                    <span className="block w-full">{item}</span>
                    {item === 'MUSIC' && (
                      <span className={`transition-transform ${activeDropdown === 'MUSIC' ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    )}
                  </div>

                  {item === 'MUSIC' && activeDropdown === 'MUSIC' && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {musicSubItems.map((subItem, subIndex) => (
                        <li 
                          key={subIndex} 
                          className="hover:bg-gray-100 p-2 rounded transition-colors"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;