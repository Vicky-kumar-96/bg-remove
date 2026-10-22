import React from 'react';
import { assets } from '../assets/assets.js';

const Result = () => {
  return (
    <div className="mx-3 mt-8 min-h-[75vh] sm:mx-6 sm:mt-12 lg:mx-44">
      <div className="rounded-lg bg-white px-4 py-5 shadow-sm sm:px-6 sm:py-6 lg:px-8">
        {/* ---------- Image Container ---------- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {/* ---------- Left Side ---------- */}
          <div className="min-w-0">
            <p className="mb-3 font-semibold text-gray-600">Original Image</p>

            <img
              className="w-full rounded-md border border-gray-300 object-contain"
              src={assets.image_w_bg}
              alt="Original image with background"
            />
          </div>

          {/* ---------- Right Side ---------- */}
          <div className="flex flex-col">
            <p className="mb-3 font-semibold text-gray-600">
              Background Remove
            </p>
            {/* ---------------bg layer is custom class----------------- */}
            <div className="rounded-md border border-gray-300 h-full relative overflow-hidden bg-layer">
              {/* <img src={assets.image_wo_bg}  /> */}

              <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                {/* <div className="h-12 w-12 rounded-full border-4 border-violet-600 border-t-transparent animate-spin"></div> */}
              </div>
            </div>
          </div>
        </div>

        {/* -------------- buttons ------------- */}
        <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button className="px-8 py-2.5 text-violet-600 text-sm border border-voilet-600 rounded-full hover:scale-95 transform-all duration-1000 font-semibold">
            Try Another
          </button>

          <a
            className=" rounded-full border bg-violet-600  px-8 py-2.5 text-sm font-semibold text-white transition-all duration-1000 hover:scale-95 "
            href=""
          >
            Download Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;
