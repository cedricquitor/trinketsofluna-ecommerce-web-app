import React from "react";

const Incentives = () => {
  return (
    <div className="bg-white bg-opacity-70 py-20 mt-28 dark:bg-opacity-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-gray-500 text-sm font-lato uppercase tracking-widest dark:text-gray-400">We built our business around customer service.</p>
          <h1 className="font-playfair font-bold text-6xl tracking-tight text-gray-900 dark:text-zinc-100">Why Trinkets of Luna?</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-16">
          <div className="text-center px-16 transition duration-500 md:hover:-translate-y-4 mb-16 md:mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-sky-300 dark:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            <h1 className="font-lato font-bold text-lg text-gray-900 uppercase mb-6 mt-2 dark:text-zinc-100">Seamless Transaction</h1>
            <p className="text-gray-500 font-lato dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, at blanditiis voluptas unde doloribus doloremque voluptatem quidem, quibusdam aliquid maxime esse. Id ipsa culpa beatae error aut tenetur fugiat magnam!</p>
          </div>
          <div className="text-center px-16 transition duration-500 hover:-translate-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-sky-300 dark:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h1 className="font-lato font-bold text-lg text-gray-900 uppercase mb-6 mt-2 dark:text-zinc-100">Best Value</h1>
            <p className="text-gray-500 font-lato dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate sapiente sit assumenda vitae fugiat repellendus fuga ullam consequatur quas a temporibus hic ducimus adipisci, perspiciatis ipsam quia cum eaque.</p>
          </div>
          <div className="text-center px-16 transition duration-500 hover:-translate-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-sky-300 dark:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <h1 className="font-lato font-bold text-lg text-gray-900 uppercase mb-6 mt-2 dark:text-zinc-100">Responsive Team</h1>
            <p className="text-gray-500 font-lato dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quos odit tenetur iusto, obcaecati, quo similique ab exercitationem unde, veniam voluptates dolorem in temporibus sapiente eius deserunt quisquam. Sunt, molestiae.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incentives;
