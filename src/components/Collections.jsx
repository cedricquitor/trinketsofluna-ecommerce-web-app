import React from "react";

const Collections = () => {
  return (
    <section className="relative container mt-48 w-10/12 mx-auto">
      <div className="text-center my-20">
        <p className="text-gray-400 text-sm font-lato uppercase tracking-widest">Be a part of our story. Be a part of the brand.</p>
        <h1 className="text-8xl text-gray-900 font-playfair font-extrabold tracking-tight">Our Collections</h1>
      </div>
      <div className="mt-8 grid grid-cols-2 relative left-28">
        <div className="block mt-12">
          <h1 className="text-gray-900 text-6xl font-playfair font-extrabold tracking-tight">First Collection</h1>
          <p className="mt-6 pr-24 font-lato text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur deleniti qui eaque ut sequi unde debitis libero modi tenetur. Laboriosam ipsam porro libero iure eius doloremque voluptate repellendus atque deleniti!</p>
          <p className="mt-6 pr-24 font-lato text-xl text-gray-500">Non distinctio eius modi earum provident qui, nesciunt fugit libero quo ex inventore officia, exercitationem tempora ullam necessitatibus porro maxime totam sapiente!</p>
          <p className="mt-8 w-fit flex flex-row text-gray-600 text-2xl font-playfair font-extrabold border-b-2 border-gray-600 cursor-pointer transition duration-200 hover:text-cyan-400 hover:border-cyan-400">
            View Collection
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-2 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </p>
        </div>
        <div className="block">
          <img class="w-3/4 object-cover drop-shadow-2xl" src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/189144528_4038192529579268_4664427365204957489_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGSYzsHCdoFgO2mxkJWqYQtLt69Fkc6cB0u3r0WRzpwHXILLpkEWjPSI3Q1F3VSt5k&_nc_ohc=qEEgLLFTRSwAX8maUfL&_nc_ht=scontent.fmnl8-2.fna&oh=00_AT_6xsc209W1gmcYvdzOumelOItO76LJilKz8Ur6I334QA&oe=6203527C" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 relative left-28">
        <div className="block">
          <img class="w-3/4 object-cover float-left" src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/189144528_4038192529579268_4664427365204957489_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGSYzsHCdoFgO2mxkJWqYQtLt69Fkc6cB0u3r0WRzpwHXILLpkEWjPSI3Q1F3VSt5k&_nc_ohc=qEEgLLFTRSwAX8maUfL&_nc_ht=scontent.fmnl8-2.fna&oh=00_AT_6xsc209W1gmcYvdzOumelOItO76LJilKz8Ur6I334QA&oe=6203527C" />
        </div>
        <div className="block mt-12">
          <h1 className="text-gray-900 text-6xl font-playfair font-extrabold tracking-tight">Second Collection</h1>
          <p className="mt-6 pr-24 font-lato text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur deleniti qui eaque ut sequi unde debitis libero modi tenetur. Laboriosam ipsam porro libero iure eius doloremque voluptate repellendus atque deleniti!</p>
          <p className="mt-6 pr-24 font-lato text-xl text-gray-500">Non distinctio eius modi earum provident qui, nesciunt fugit libero quo ex inventore officia, exercitationem tempora ullam necessitatibus porro maxime totam sapiente!</p>
          <p className="mt-8 w-fit flex flex-row text-gray-600 text-2xl font-playfair font-extrabold border-b-2 border-gray-600 cursor-pointer transition duration-200 hover:text-cyan-400 hover:border-cyan-400">
            View Collection
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-2 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collections;
