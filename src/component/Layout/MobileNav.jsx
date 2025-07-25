import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LeftSection } from "./LeftSection";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden p-4">
        <Bars3Icon
          className="h-8 w-8 text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#111] text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <XMarkIcon
            className="h-8 w-8 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <LeftSection />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
