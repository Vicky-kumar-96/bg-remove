import React from 'react';
import { assets } from '../assets/assets';

const Upload = () => {
  return (
    <section className="px-4 pb-20 sm:pb-28 lg:px-44">
      <h1 className="text-center text-3xl font-bold leading-tight text-neutral-700 xl:text-4xl">
        See the{' '}
        <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Magic.
        </span>{' '}
        Try now
      </h1>

      {/* Upload Button */}
      <div className="mt-10 flex justify-center sm:mt-12">
        <input type="file" id="upload2" accept="image/*" className="hidden" />

        <label
          htmlFor="upload2"
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg
          bg-linear-to-r from-purple-500 to-pink-500 px-5 py-3
          font-medium text-white shadow-sm transition-all duration-300
          ease-in-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md"
        >
          <img src={assets.upload_btn_icon} alt="" className="h-5 w-5" />
          <span className="text-sm">Upload your image</span>
        </label>
      </div>
    </section>
  );
};

export default Upload;
