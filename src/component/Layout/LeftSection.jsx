import React from "react";
import { ICON } from "../../const/icons";
import { IMAGE } from "../../const/images";

export const LeftSection = () => {
  return (
    <div className=" w-full h-screen bg-[#111] px-6 py-8 flex flex-col justify-between">
      <div className="flex flex-col items-center text-center">
        <img src={ICON.vayuzLogo} alt="logo" className="w-44 mb-8" />
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#76f947] via-[#f5198e] to-[#0af7f4] inline-block mb-10">
          <button className="bg-[#111] text-white text-sm font-semibold rounded-full px-6 py-2 w-full">
            CONTACT US
          </button>
        </div>

        <nav className="space-y-6 text-white text-sm font-normal text-left">
          <p className="hover:text-gray-400 cursor-pointer">App Development</p>
          <p className="hover:text-gray-400 cursor-pointer">Challenges</p>
          <p className="hover:text-gray-400 cursor-pointer">Hire Developer</p>
          <p className="hover:text-gray-400 cursor-pointer">Community</p>
        </nav>
      </div>
      <div className="mt-10">
        <img
          src={IMAGE.PCImg}
          alt="workspace"
          className="rounded-md mb-3 w-full"
        />
        <p className="text-md text-white">
          Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
        </p>
      </div>
    </div>
  );
};
