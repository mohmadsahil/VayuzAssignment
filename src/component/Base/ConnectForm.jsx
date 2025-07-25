import React, { useState } from "react";

export const ConnectForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone Number: ${formData.phone}`
    );
    setFormData({ fullName: "", email: "", phone: "" });
  };

  return (
    <div className="md:min-h-screen bg-[#131313] text-white flex items-center justify-center md:ml-[140px] ml-0">
      <div className="w-full max-w-md">
        <h2 className="text-6xl" style={{ fontFamily: '"Playfair Display"' }}>
          Connect
          <br />
          With Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-20">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-transparent border-b border-white placeholder-white outline-none py-2"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-transparent border-b border-white placeholder-white outline-none py-2"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full bg-transparent border-b border-white placeholder-white outline-none py-2"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-cyan-700 px-6 py-2 rounded-full text-sm hover:bg-cyan-800 border-2 border-[#08A7CE]"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
