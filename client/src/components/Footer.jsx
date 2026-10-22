import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-linear-to-b from-white to-blue-50/60 px-4">
      <div className="mx-auto max-w-2xl">
        {/* Top Section */}

        <div className="flex items-center justify-center border-b border-gray-200 py-3 sm:justify-start sm:py-4">
          <a href="/" className="inline-flex items-center gap-1.5 sm:gap-2">
            <img
              src={assets.logo}
              alt="BGRemover logo"
              className="h-5 w-auto shrink-0 object-contain sm:h-7 md:h-8"
            />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-2 py-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BGRemover. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Made with <span className="text-red-500">♥</span> for better images.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
