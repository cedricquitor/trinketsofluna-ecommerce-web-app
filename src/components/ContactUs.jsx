import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail, HiOutlineChatAlt2 } from "react-icons/hi";
import { BiBuildings, BiBookBookmark } from "react-icons/bi";
import { BsQuestionSquare } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="mt-12 mx-auto container">
      <div className="pb-14 text-center border-b-[1px] border-gray-500 dark:border-gray-400">
        <p className="text-gray-500 text-sm font-lato uppercase tracking-widest dark:text-gray-400">We expect to hear from you soon.</p>
        <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 dark:text-zinc-100">Contact Us</h1>
      </div>
      <div className="mt-8 w-5/6 mx-auto">
        <p className="mt-4 font-lato text-gray-500 text-xl dark:text-gray-400">
          For questions and concerns, please leave a message on our
          <a
            href="https://www.facebook.com/messages/t/218950794836813"
            target="_new"
            className="ml-1 font-medium text-sky-300 transition border-b-[1px] border-sky-300 hover:text-sky-500 hover:border-sky-500 active:text-sky-600 active:border-sky-600 dark:text-sky-500 dark:border-sky-500"
          >
            Messenger
          </a>
          .
        </p>
        <p className="font-lato text-gray-500 text-xl dark:text-gray-400">
          We'll be glad to address your concerns and queries between <span className="font-medium text-sky-300 dark:text-sky-500">8:00AM and 10:00PM</span>, from{" "}
          <span className="font-medium text-sky-300 dark:text-sky-500">Mondays through Saturdays.</span>
        </p>
        <p className="mt-12 font-lato text-gray-500 text-xl dark:text-gray-400">Alternatively, you could also reach us at:</p>
        <div className="mt-8 grid gap-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex">
              <FiPhoneCall className="w-6 h-6 mr-4 my-auto text-sky-300 dark:text-sky-500" />
              <h2 className="font-lato font-semibold text-lg text-gray-900 uppercase dark:text-zinc-100">Call Us</h2>
            </div>
            <p className="font-lato text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus laudantium nisi laborum similique, animi cum fugiat exercitationem eos reiciendis non incidunt quisquam repudiandae laboriosam, consequatur eius maiores facilis
              harum!
            </p>
          </div>
          <div>
            <div className="flex">
              <HiOutlineMail className="w-6 h-6 mr-4 my-auto text-sky-300 dark:text-sky-500" />
              <h2 className="font-lato font-semibold text-lg text-gray-900 uppercase dark:text-zinc-100">Email Us</h2>
            </div>
            <p className="font-lato text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga ut iure porro! Consectetur accusamus, ut doloremque in eveniet sed dignissimos enim unde. Deleniti non magnam saepe quod veritatis quasi?
            </p>
          </div>
          <div>
            <div className="flex">
              <BiBuildings className="w-6 h-6 mr-4 my-auto text-sky-300 dark:text-sky-500" />
              <h2 className="font-lato font-semibold text-lg text-gray-900 uppercase dark:text-zinc-100">Visit Us</h2>
            </div>
            <p className="font-lato text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui at culpa corrupti a odit eius rerum id sunt ducimus laboriosam, modi quas atque repudiandae consequatur voluptatibus illum incidunt molestiae.
            </p>
          </div>
          <div>
            <div className="flex">
              <HiOutlineChatAlt2 className="w-6 h-6 mr-4 my-auto text-sky-300 dark:text-sky-500" />
              <h2 className="font-lato font-semibold text-lg text-gray-900 uppercase dark:text-zinc-100">Live Chat</h2>
            </div>
            <p className="font-lato text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, libero possimus quae laborum ex facere temporibus tenetur ullam hic! Eaque labore corrupti quod dicta cupiditate vero voluptatibus. Deserunt, itaque in.
            </p>
          </div>
          <div>
            <div className="flex">
              <BiBookBookmark className="w-6 h-6 mr-4 my-auto text-sky-300 dark:text-sky-500" />
              <h2 className="font-lato font-semibold text-lg text-gray-900 uppercase dark:text-zinc-100">Appointments</h2>
            </div>
            <p className="font-lato text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eligendi excepturi deleniti architecto quae soluta, assumenda quidem ipsum distinctio iure officia repellendus nemo delectus omnis id itaque hic, vero incidunt!
            </p>
          </div>
          <div>
            <div className="flex">
              <BsQuestionSquare className="w-6 h-6 mr-4 my-auto text-sky-300 dark:text-sky-500" />
              <h2 className="font-lato font-semibold text-lg text-gray-900 uppercase dark:text-zinc-100">FAQ's</h2>
            </div>
            <p className="font-lato text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus laboriosam delectus consequuntur excepturi quia libero, placeat assumenda veniam, recusandae cum laborum beatae voluptatibus in ducimus possimus odio quas totam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
