
import React from 'react';
import { assets, plans } from '../assets/assets.js';

const BuyCredit = () => {
  return (
    <section className="mx-3 mt-8 min-h-[75vh] sm:mx-6 sm:mt-12 lg:mx-44 mb-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Choose your plan
          </h1>
          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            Simple pricing. More creativity. Get started today.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((item, index) => (
            <div
              key={item.id ?? index}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-300"
            >
              {/* Icon */}
              <img
                src={assets.logo_icon}
                alt=""
                className="mb-6 h-10 w-10 object-contain"
              />

              {/* Plan info */}
              <h2 className="text-lg font-semibold text-gray-900">
                {item.id}
              </h2>

              <p className="mt-2 min-h-10 text-sm leading-6 text-gray-500">
                {item.desc}
              </p>

              {/* Price */}
              <div className=" flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  ${item.price}
                </span>
                <span className="text-sm text-gray-500">
                  / {item.credits} credits
                </span>
              </div>

              <div className="my-7 h-px bg-gray-100" />

              {/* Features */}
              <div className="mb-8 flex items-center gap-3 text-sm text-gray-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-700">
                  ✓
                </span>
                {item.credits} image generation credits
              </div>

              {/* Button */}
              <button
                type="button"
                className="mt-auto w-full rounded-xl border border-violet-600 bg-violet-600 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:bg-violet-700 active:scale-[0.98]"
              >
                Purchase plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyCredit;
