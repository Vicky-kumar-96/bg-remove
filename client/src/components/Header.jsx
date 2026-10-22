import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex justify-between items-center max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">

      {/* ------------ Left side------------- */}
      <div className="left-box">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className='max-md:hidden' /> {" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">
            background
          </span>{" "}
           from <br className='max-md:hidden' /> image for free
        </h1>

        <p className="my-6 text-[15px] text-gray-500">
          Remove image backgrounds instantly for free with our easy-to-use tool.
          <br className='max-sm:hidden' />
          Upload your image, remove the background, and download your result
          effortlessly.
        </p>

        <div>
          <input type="file" id="upload1" accept="image/*" className='hidden'  />

          <label
            htmlFor="upload1"
            className="inline-flex items-center gap-2 px-5 py-3
            bg-linear-to-r from-purple-500 to-pink-500
           text-white font-medium rounded-lg cursor-pointer
           shadow-sm hover:shadow-md hover:brightness-110
           hover:-translate-y-0.5
            transition-all duration-300 ease-in-out"
          >
            <img src={assets.upload_btn_icon} className="w-5 h-5" />
            <p className="text-sm">Upload your image</p>
          </label>
        </div>
      </div>

      {/* ------------ Right side------------- */}
      <div className="right-box w-full max-w-md">
        <img src={assets.header_img} alt="" />

      </div>
    </div>
  );
};

export default Header;
