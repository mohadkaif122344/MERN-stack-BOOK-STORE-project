import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            About Us
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Welcome to <span className="font-semibold">BookStore</span> — 
            your one-stop destination for learning, books, and online courses.
            We aim to provide quality content that helps students and developers
            grow their skills.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our platform offers carefully curated courses, affordable pricing,
            and a smooth learning experience. We believe learning should be
            simple, accessible, and practical.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
             Learn. Grow. Succeed.
          </p>


        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="About us"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
