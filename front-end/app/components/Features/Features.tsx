"use client";
import Portfolio from "./Portfolio";
import Marketplace from "./Marketplace";
import Transparency from "./Transparency";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.2,
    };
    const targets = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rightChild = entry.target.querySelector(".feat-img-right");
          rightChild && rightChild.classList.add("in-view");
          const leftChild = entry.target.querySelector(".feat-img-left");
          leftChild && leftChild.classList.add("in-view");
        }
      });
    }, options);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion:reduce)"
    ).matches;

    if (targets && prefersReducedMotion === false)
      targets.forEach((target) => {
        observer.observe(target);
      });
    return () => {
      if (targets && prefersReducedMotion === false)
        targets.forEach((target) => {
          observer.unobserve(target);
        });
    };
  }, []);

  return (
<section className="px-6 py-16 md:py-20 md:px-20 flex flex-col gap-12 font-serif items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-purple-200 via-pink-300 to-blue-400 dark:from-purple-700 dark:to-blue-900">
  <div className="text-center">
    <h2 className="text-4xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 drop-shadow-lg">
      Explore Our Features
    </h2>
    <p className="text-lg md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
      Discover the various tools and options we offer to make your experience exceptional. Navigate seamlessly between different features designed to cater to your needs.
    </p>
  </div>

  {/* Individual Feature Sections */}
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-2 feature hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
    <Marketplace />
  </div>

  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-22 feature hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
    <Portfolio />
  </div>

  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-2 feature hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
    <Transparency />
  </div>
</section>

  );
};

export default Features;
