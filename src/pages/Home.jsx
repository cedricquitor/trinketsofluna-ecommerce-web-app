import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-sky-50">
      <Navbar />
      <div className="container mx-auto relative overflow-hidden grid grid-cols-2">
        <div className="relative before:absolute z-10 before:-top-5 before:w-full before:h-full before:bg-sky-300">
          <img className="absolute left-6 top-5 h-full z-10 w-full object-cover lg:w-full lg:h-full inset-0" src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/190472214_4029164170482104_1745585824208856443_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeEEwmHPO99XEJVer8hoEQcrTgAgZRYUaQpOACBlFhRpCguUA9YwjUb4cT5BSOBVKy0&_nc_ohc=J4SQk-B-xc8AX_xe_i8&_nc_ht=scontent.fmnl4-6.fna&oh=00_AT_V-2-IhZmuPU3DPPa6Aw_GMbDyuDgHguiMfvyYQjGxzQ&oe=61FF1D82" alt="" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-playfair font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span> <span className="block text-indigo-600 xl:inline">online business</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      View Shop
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
