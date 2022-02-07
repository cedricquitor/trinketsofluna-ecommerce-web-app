import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container mx-auto relative overflow-hidden grid lg:grid-cols-2 sm:grid-cols-1">
      <div className="relative before:absolute before:-top-5 before:w-full before:h-full before:bg-sky-300 before:dark:bg-sky-500">
        <img className="hidden lg:block absolute left-6 top-5 h-full w-full object-cover rounded-tl-full lg:w-[100%] inset-0" src="https://pbs.twimg.com/media/FEzJSkyVIAcTBeq?format=jpg&name=medium" alt="A Trinket of Luna jewelry" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-playfair font-extrabold text-gray-900 sm:text-5xl md:text-6xl dark:text-zinc-100">
                <span className="block xl:block">All of the luxury,</span> <span className="block text-sky-300 xl:block dark:text-sky-500">none of the cost</span>
              </h1>
              <p className="mt-3 font-lato text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-lg shadow">
                  {/* TODO: Link to SignUp */}
                  <Link to="/signup" className="btn--primary">
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/shop" className="btn--secondary">
                    View Shop
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Hero;
