import React from "react";
import { IMAGE } from "../../const/images";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen bg-[#131313] text-white font-sans">
        <div className="flex flex-col md:flex-row">
          <main className="w-full p-6">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2 space-y-4">
                <h1
                  className="text-4xl font-bold"
                  style={{ fontFamily: '"Playfair Display"' }}
                >
                  Unlock the Potential of Flutter
                </h1>
                <p className="text-gray-300 text-lg">
                  Your Premier Partner for Cross-Platform App Excellence!
                </p>
                <button className="bg-[#08A7CE] hover:bg-cyan-500 text-white px-5 py-2 rounded-full">
                  UPGRADE YOUR TECH
                </button>
              </div>
              <div className="md:w-[80%] w-[90%] h-auto mt-5 md:mt-0">
                <img src={IMAGE.HeroBanner} alt="Background Code" />
              </div>
            </div>

            <div className="text-white flex flex-col md:flex-row justify-between mt-15 gap-6">
              <div className="mb-4 md:mb-0">
                <h2
                  className="text-3xl md:text-4xl font-bold w-full md:w-1/2"
                  style={{ fontFamily: '"Playfair Display"' }}
                >
                  Flutter's Dawn
                </h2>
                <p className="text-sm text-gray-400 mt-1">History of flutter</p>
              </div>

              <div className="flex flex-col items-end md:flex-row md:items-start justify-between md:w-2/3 gap-4">
                <div className="text-gray-300 md:w-3/4">
                  <p>
                    Uncover the fascinating story of Flutter in ‘Flutter's Dawn:
                    History of Flutter.’ From humble origins to global acclaim,
                    delve into its captivating narrative. Explore milestones,
                    triumphs, and challenges. Whether tech enthusiast or curious
                    mind, join us on this captivating journey!{" "}
                    <span className="text-cyan-400 hover:underline cursor-pointer">
                      Click to begin!
                    </span>
                  </p>
                </div>

                <div className="ml-6 md:mt-[50px]">
                  <button className="bg-[#08A7CE] hover:bg-cyan-500 text-white px-6 py-2 rounded-full flex items-center gap-2 transition">
                    BEGIN
                    <ArrowUpRightIcon class="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
