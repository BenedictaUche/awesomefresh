import React from "react";


const Whoweare = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:flex-shrink-0">
            <img className="h-64 w-64 rounded-full object-cover object-center lg:w-72 lg:h-72" src='./images/happygirl.jpg' alt="Agriculture" />
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
              Who We Are
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              At Awesome Fresh, we are dedicated to helping the
              world and its people live healthier and happier by making food
              cheaper, fresher, nutritious, and accessible to the growing urban
              communities of the world, bringing innovation and organization in
              agriculture and food distribution.
              Our organization was founded on the belief that [Core Beliefs]. Through our work in the agricultural industry, we strive to [Achievements and Goals].
            </p>
            <div className="mt-8 flex">
              <div className="inline-flex rounded-md shadow">
                <a href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600" style={{ textDecoration: 'none' }}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
