import React from 'react';
import { assets } from '../assets/assets';

const Steps = () => {
  return (
    <div className="px-4 mt-20 pb-20 lg:px-44 sm:mt-28 sm:pb-28">

      {/* Heading */}
      <h1 className="text-center text-3xl xl:text-4xl font-bold text-neutral-700 leading-tight">
        Steps to remove image background
        <br className="hidden sm:block" />
        <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {' '}in seconds
        </span>
      </h1>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

        {/* Step 1 */}
        <div className="flex items-center gap-4 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <img
            src={assets.upload_icon}
            alt="Upload image"
            className="w-12 h-12 object-contain"
          />
          <div>
            <p className="text-lg font-semibold text-gray-800">
              Upload Image
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Upload your image to get started.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-4 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <img
            src={assets.remove_bg_icon}
            alt="Remove background"
            className="w-12 h-12 object-contain"
          />
          <div>
            <p className="text-lg font-semibold text-gray-800">
              Remove Background
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Remove the background automatically in seconds.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center gap-4 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <img
            src={assets.download_icon}
            alt="Download image"
            className="w-12 h-12 object-contain"
          />
          <div>
            <p className="text-lg font-semibold text-gray-800">
              Download Image
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Download your image with a transparent background.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Steps;
