
import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className=" px-4 pb-20 sm:pb-28 lg:px-44">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold leading-tight text-neutral-700 xl:text-4xl">
        Remove{" "}
        <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Background
        </span>{" "}
        With High
        <br className="hidden sm:block" /> Quality And Accuracy
      </h1>

      {/* Image Comparison Slider */}
      <div className="relative mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-xl shadow-xl">
        {/* Background Image */}
        <img
          src={assets.image_w_bg}
          alt="Image with background"
          className="block h-auto w-full select-none"
          draggable="false"
        />

        {/* Foreground Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={assets.image_wo_bg}
            alt="Image without background"
            className="absolute inset-0 h-full w-full select-none object-cover"
            draggable="false"
          />
        </div>

        {/* Slider Line */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 z-10 w-1 bg-white shadow-md"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white shadow-lg">
            <span className="text-lg font-bold text-gray-700">
              ↔
            </span>
          </div>
        </div>

        {/* Range Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          aria-label="Compare images"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        {/* Labels */}
        <span className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-md bg-black/60 px-3 py-1 text-sm font-medium text-white">
          Without Bg
        </span>

        <span className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-md bg-black/60 px-3 py-1 text-sm  font-medium text-white">
          With Bg
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 text-center text-sm text-neutral-500 sm:text-base">
        Drag the slider left or right to compare the images.
      </p>
    </div>
  );
};

export default BgSlider;
