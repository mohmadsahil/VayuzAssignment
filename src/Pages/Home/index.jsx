import React from "react";
import { LeftSection } from "../../component/Layout/LeftSection";
import Header from "../../component/Layout/Header";
import { HeroSection } from "../../component/Main/Hero";
import { ServiceSection } from "../../component/Main/Services";
import { ConnectForm } from "../../component/Base/ConnectForm";
import { ConnectSection } from "../../component/Main/Connect";
import { Footer } from "../../component/Layout/Footer";

export const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[17%] bg-[#131313] border-r border-white">
          <LeftSection />
        </div>
        <div className="w-[83%]">
          <Header />
          <HeroSection />
          <ServiceSection />
          <ConnectSection />
            <Footer />
        </div>
      </div>
    </>
  );
};
