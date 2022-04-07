import React from "react";

const Collections = () => {
  return (
    <section className="relative container lg:mt-36 w-10/12 2xl:w-8/12 mx-auto">
      <div className="text-center mt-12 md:my-20">
        {/* TODO: Fill the placeholder here. */}
        <p className="text-gray-500 text-xs text-center 2xl:text-sm font-lato uppercase tracking-widest dark:text-gray-400">Lorem ipsum. Just a placeholder.</p>
        <h1 className="text-4xl md:text-7xl lg:text-8xl text-gray-900 font-playfair font-extrabold tracking-tight dark:text-zinc-100">Our Collections</h1>
      </div>
      <div className="mt-8 mb-24 flex flex-col-reverse lg:flex-row relative 2xl:left-20">
        <div className="block mt-12 basis-1/2">
          <h2 className="text-gray-900 text-5xl font-playfair font-extrabold tracking-tight dark:text-zinc-100">First Collection</h2>
          <p className="mt-6 lg:pr-24 font-lato text-xl text-gray-500 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur deleniti qui eaque ut sequi unde debitis libero modi tenetur. Laboriosam ipsam porro libero iure eius doloremque voluptate repellendus atque deleniti!
          </p>
          <p className="mt-6 lg:pr-24 font-lato text-xl text-gray-500 dark:text-gray-400">
            Non distinctio eius modi earum provident qui, nesciunt fugit libero quo ex inventore officia, exercitationem tempora ullam necessitatibus porro maxime totam sapiente!
          </p>
        </div>
        <div className="block basis-1/2 my-auto mx-auto">
          <img className="2xl:w-3/4 object-cover drop-shadow-2xl" src="https://pbs.twimg.com/media/FEzJSkyVIAcTBeq?format=jpg&name=medium" alt="A jewelry from Collection 1" />
        </div>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row relative 2xl:left-20">
        <div className="block basis-1/2 my-auto mx-auto">
          <img className="2xl:w-3/4 object-cover drop-shadow-2xl float-left" src="https://pbs.twimg.com/media/FEzJSkyVIAcTBeq?format=jpg&name=medium" alt="A jewelry from Collection 2" />
        </div>
        <div className="block mt-12 basis-1/2 lg:pl-20 2xl:pl-0">
          <h2 className="text-gray-900 text-5xl font-playfair font-extrabold tracking-tight dark:text-zinc-100">Second Collection</h2>
          <p className="mt-6 lg:pr-4 2xl:pr-24 font-lato text-xl text-gray-500 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur deleniti qui eaque ut sequi unde debitis libero modi tenetur. Laboriosam ipsam porro libero iure eius doloremque voluptate repellendus atque deleniti!
          </p>
          <p className="mt-6 lg:pr-4 2xl:pr-24 font-lato text-xl text-gray-500 dark:text-gray-400">
            Non distinctio eius modi earum provident qui, nesciunt fugit libero quo ex inventore officia, exercitationem tempora ullam necessitatibus porro maxime totam sapiente!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collections;
