import React, { useState } from "react";

export const Footer = () => {
  const links = ["About", "Insights", "Community", "Privacy & Policies"];
  return (
    <>
      <div className="bg-[#131313] py-4 pb-16">
        <ul className="flex gap-8 px-6 text-sm text-white">
          {links.map((link, index) => (
            <li key={index} className="hover:underline cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
