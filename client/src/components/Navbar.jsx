import React from 'react';
import { assets } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import { UserButton, useClerk, useUser } from '@clerk/react';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <nav className="flex items-center justify-between gap-3 mx-4 py-3 sm:mx-8 lg:mx-44">
      {/* Logo */}
      <Link to="/" className="shrink-0">
        <img
          className="w-20 xs:w-24 sm:w-32 md:w-40 lg:w-44"
          src={assets.logo}
          alt="Logo"
        />
      </Link>

      {/* Get Started Button */}
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          type="button"
          className="flex shrink-0 items-center justify-center gap-2 sm:gap-4
        rounded-full bg-zinc-800 px-3 py-2 text-xs text-white
        transition-all duration-300 hover:bg-zinc-700
        sm:px-6 sm:py-3 sm:text-sm md:px-8"
        >
          Get Started
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
