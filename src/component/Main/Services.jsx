import { IMAGE } from "../../const/images";
import { AccordionItem } from "../Base/Accordion";
import React from "react";

export const ServiceSection = () => {
  const accordionData = [
    {
      title: "Flutter App Development",
      description:
        "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience?",
    },
    {
      title: "UI/UX Design",
      description:
        "Create responsive and dynamic websites using React. Build reusable components and manage complex state easily. Jump into the modern web development experience.",
    },
    {
      title: "Customization & integration",
      description:
        "Develop fast and scalable server-side applications using Node.js. Handle thousands of requests efficiently and power your APIs with ease.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Develop fast and scalable server-side applications using Node.js. Handle thousands of requests efficiently and power your APIs with ease.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Develop fast and scalable server-side applications using Node.js. Handle thousands of requests efficiently and power your APIs with ease.",
    },
    {
      title: "Consulting & Training",
      description:
        "Develop fast and scalable server-side applications using Node.js. Handle thousands of requests efficiently and power your APIs with ease.",
    },
    {
      title: "Migration & Upgrades",
      description:
        "Develop fast and scalable server-side applications using Node.js. Handle thousands of requests efficiently and power your APIs with ease.",
    },
  ];
  return (
    <>
      <div className="bg-[#131313]">
        <div className=" text-white py-16 px-4 text-center">
          <h2
            className="text-4xl font-semibold mb-2"
            style={{ fontFamily: '"Playfair Display"' }}
          >
            Our Dynamic Services Suite!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Embrace Innovation: Let’s Create Together!
          </p>
          <p className="text-sm text-gray-400">
            Step into innovation! Explore our range of services and let’s create
            something extraordinary together.
            <br />
            Your vision, our expertise. Let’s begin!
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="px-6">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="pr-6 hidden md:flex">
            <img
              src={IMAGE.PhonePCImg}
              alt="Background Code"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};
