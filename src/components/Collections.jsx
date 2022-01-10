import React from "react";

const Collections = () => {
  return (
    <section className="relative container mx-auto mt-48">
      <div className="text-center my-8">
        <p className="text-gray-400 text-sm font-lato uppercase tracking-widest">Be a part of our story. Be a part of the brand.</p>
        <h1 className="text-8xl text-gray-900 font-playfair font-extrabold tracking-tight">Our Collections</h1>
      </div>
      <div className="p-6 mt-8 grid grid-cols-2">
        <div className="block">
          <h1 className="text-gray-900 text-6xl font-playfair font-extrabold tracking-tight">First Collection</h1>
          <p className="mt-6 pr-24 font-lato text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur deleniti qui eaque ut sequi unde debitis libero modi tenetur. Laboriosam ipsam porro libero iure eius doloremque voluptate repellendus atque deleniti!</p>
          <p className="mt-6 pr-24 font-lato text-xl text-gray-500">Non distinctio eius modi earum provident qui, nesciunt fugit libero quo ex inventore officia, exercitationem tempora ullam necessitatibus porro maxime totam sapiente!</p>
          <p className="mt-8 w-fit flex flex-row text-gray-600 text-2xl font-playfair font-extrabold border-b-2 border-gray-600 cursor-pointer transition duration-300 hover:text-cyan-400 hover:border-cyan-400">
            View Collection
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-2 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </p>
        </div>
        <div className="block bg-red-200">
          <h1>Content 2</h1>
        </div>
      </div>
    </section>
  );
};

export default Collections;
