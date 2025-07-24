import React from "react";
import { useEffect, useRef, useState } from "react";

export function AccordionItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="bg-[#131313] text-white mb-4">
      <div
        className="flex justify-between items-center cursor-pointer border-b border-gray-700 py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold" style={{ fontFamily: '"Playfair Display"' }}>{title}</h3>
        <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div className="text-sm text-gray-300 leading-relaxed py-3">
          {description}{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Let’s get started today!
          </span>
        </div>
      </div>
    </div>
  );
}
