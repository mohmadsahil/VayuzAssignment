import React from "react";
import { MobileNav } from "./MobileNav";

const Header = () => {
  return (
    <div className="bg-[#131313] px-6 py-4 border-b border-white">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-lg">
          Securing Your Flutter App: Best Practices and Techniques
        </h2>
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
