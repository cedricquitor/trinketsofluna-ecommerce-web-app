import React from "react";

const Collections = () => {
  return (
    <section className="relative container mt-36 w-8/12 mx-auto ">
      <div className="text-center my-20">
        {/* TODO: Fill the placeholder here. */}
        <p className="text-gray-400 text-xs text-center 2xl:text-sm font-lato uppercase tracking-widest">Lorem ipsum. Just a placeholder.</p>
        <h1 className="text-6xl 2xl:text-8xl text-gray-900 font-playfair font-extrabold tracking-tight">Our Collections</h1>
      </div>
      <div className="mt-8 flex flex-col-reverse lg:flex-row relative 2xl:left-20">
        <div className="block mt-12 basis-1/2">
          <h2 className="text-gray-900 text-5xl font-playfair font-extrabold tracking-tight">First Collection</h2>
          <p className="mt-6 2xl:pr-24 font-lato text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur deleniti qui eaque ut sequi unde debitis libero modi tenetur. Laboriosam ipsam porro libero iure eius doloremque voluptate repellendus atque deleniti!</p>
          <p className="mt-6 2xl:pr-24 font-lato text-xl text-gray-500">Non distinctio eius modi earum provident qui, nesciunt fugit libero quo ex inventore officia, exercitationem tempora ullam necessitatibus porro maxime totam sapiente!</p>
          <p className="mt-8 w-fit text-gray-600 text-2xl font-playfair font-extrabold border-b-2 border-gray-600 cursor-pointer transition duration-200 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 active:text-cyan-600 active:border-cyan-600">View Collection</p>
        </div>
        <div className="block basis-1/2">
          <img className="2xl:w-3/4 object-cover drop-shadow-2xl" src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/189144528_4038192529579268_4664427365204957489_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGSYzsHCdoFgO2mxkJWqYQtLt69Fkc6cB0u3r0WRzpwHXILLpkEWjPSI3Q1F3VSt5k&_nc_ohc=qEEgLLFTRSwAX8maUfL&_nc_ht=scontent.fmnl8-2.fna&oh=00_AT_6xsc209W1gmcYvdzOumelOItO76LJilKz8Ur6I334QA&oe=6203527C" alt="A jewelry from Collection 1" />
        </div>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row relative 2xl:left-20">
        <div className="block basis-1/2">
          <img className="2xl:w-3/4 object-cover drop-shadow-2xl float-left" src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/189144528_4038192529579268_4664427365204957489_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGSYzsHCdoFgO2mxkJWqYQtLt69Fkc6cB0u3r0WRzpwHXILLpkEWjPSI3Q1F3VSt5k&_nc_ohc=qEEgLLFTRSwAX8maUfL&_nc_ht=scontent.fmnl8-2.fna&oh=00_AT_6xsc209W1gmcYvdzOumelOItO76LJilKz8Ur6I334QA&oe=6203527C" alt="A jewelry from Collection 2" />
        </div>
        <div className="block mt-12 basis-1/2">
          <h2 className="text-gray-900 text-5xl font-playfair font-extrabold tracking-tight">Second Collection</h2>
          <p className="mt-6 2xl:pr-24 font-lato text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur deleniti qui eaque ut sequi unde debitis libero modi tenetur. Laboriosam ipsam porro libero iure eius doloremque voluptate repellendus atque deleniti!</p>
          <p className="mt-6 2xl:pr-24 font-lato text-xl text-gray-500">Non distinctio eius modi earum provident qui, nesciunt fugit libero quo ex inventore officia, exercitationem tempora ullam necessitatibus porro maxime totam sapiente!</p>
          <p className="mt-8 w-fit text-gray-600 text-2xl font-playfair font-extrabold border-b-2 border-gray-600 cursor-pointer transition duration-200 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 active:text-cyan-600 active:border-cyan-600">View Collection</p>
        </div>
      </div>
    </section>
  );
};

export default Collections;
