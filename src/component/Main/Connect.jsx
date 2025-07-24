import { ConnectForm } from "../Base/ConnectForm";
import React from "react";

export const ConnectSection = () => {
  const navLinks = ["Events", "Gen AI", "Careers", "Case study", "SME Talks"];

  return (
    <section className="bg-[#131313] text-white px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <nav className="flex space-x-12 mb-8 text-sm font-light">
            {navLinks.map((link, index) => (
              <a key={index} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </nav>

          <p className="text-xl md:text-2xl leading-relaxed font-light mb-4">
            For any collaborative <br />
            projects or enquiries feel free <br />
            to connect with us.
          </p>
          <p className="text-2xl font-medium">vayuz.com</p>
        </div>

        <div>
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};
