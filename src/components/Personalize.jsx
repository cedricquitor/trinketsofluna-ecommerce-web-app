import React from "react";

const Personalize = () => {
  return (
    <section className="container bg-white bg-opacity-70 rounded-md mt-36 pt-4 md:pt-12 pb-14 justify-center w-10/12 mx-auto dark:bg-gray-800">
      <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl tracking-tight font-playfair mx-auto font-extrabold text-gray-900 mt-8 w-2/3 text-center dark:text-zinc-100">We make it possible for you to discover your own style.</h1>
      <p className="mt-6 mb-12 w-4/5 mx-auto text-center font-lato text-sm md:text-xl text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati adipisci et. Sed dolor, maiores qui rerum molestiae laborum dolores necessitatibus corporis quisquam alias consequatur perspiciatis iure nostrum fugit nihil!</p>
      <div className="mt-8 px-8 md:px-0 flex flex-col lg:flex-row justify-center">
        <input type="text" className="mx-auto mb-2  w-full py-2 md:w-2/3 lg:mx-0 lg:mr-8 px-4 md:py-3 lg:w-1/4 text-lg md:text-xl border-2 border-sky-200 transition placeholder:italic focus:outline-none focus:border-sky-400 hover:border-sky-300" placeholder="Enter your email" />
        <div>
          <button className="btn--primary w-full md:w-2/3 py-3 mx-auto lg:w-full md:py-3 md:px-10 active:outline-none">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Personalize;
