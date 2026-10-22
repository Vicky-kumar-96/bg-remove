
import React from "react";
import { testimonialsData } from "../assets/assets.js";

const Testimonials = () => {
  return (
    <section className="px-4 pb-20 sm:pb-28 lg:px-44">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold leading-tight text-neutral-700 xl:text-4xl">
        Customer{" "}
        <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Testimonials
        </span>
      </h1>

      {/* Testimonial Cards */}
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-8"
          >
            {/* Quote Icon */}
            <p className="mb-4 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-4xl font-bold leading-none text-transparent">
              ❞
            </p>

            {/* Testimonial Text */}
            <p className="min-h-28 text-base leading-7 text-slate-600">
              {item.text}
            </p>

            {/* Divider */}
            <div className="my-7 h-px bg-linear-to-r from-indigo-100 via-slate-100 to-transparent" />

            {/* Author Details */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.author}
                className="h-14 w-14 shrink-0 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-indigo-100 transition duration-300 group-hover:ring-indigo-300"
              />

              <div className="min-w-0">
                <p className="truncate text-base font-bold text-slate-900">
                  {item.author}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
