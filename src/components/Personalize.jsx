import React from "react";

const Personalize = () => {
  return (
    <section className="container bg-sky-100 rounded-md mt-36 pt-12 pb-14 justify-center w-10/12 mx-auto">
      <h1 className="text-4xl tracking-tight font-playfair mx-auto font-extrabold text-gray-900 mt-8 w-2/3 text-center">We make it possible for you to discover your own style.</h1>
      <p className="mt-6 mb-12 w-4/5 mx-auto text-center font-lato text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati adipisci et. Sed dolor, maiores qui rerum molestiae laborum dolores necessitatibus corporis quisquam alias consequatur perspiciatis iure nostrum fugit nihil!</p>
      <div className="mt-8 flex justify-center">
        <input type="text" className="mr-8 px-4 w-1/4 text-xl border-2 border-sky-200 transition placeholder:italic focus:outline-none focus:border-sky-400 hover:border-sky-300" placeholder="Enter your email" />
        <div className="rounded-md shadow">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium shadow-md transition duration-300 hover:shadow-2xl text-white bg-sky-300 hover:bg-sky-500 md:py-3 md:text-lg md:px-10 focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 active:bg-sky-600">
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Personalize;
