"use client";

import { useState } from "react";
import { stepThreeSchema } from "@/schema/validationSchemas";
import Header from "./Header";

const StepThree = ({ onClick, backClick, profile, setProfile }) => {
  const [error, setError] = useState({
    date: "",
    profileImage: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setProfile((prev) => ({
        ...prev,
        [name]: files[0], 
      }));
    } else {
      setProfile((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNext = async () => {
    try {
      await stepThreeSchema.validate(profile, { abortEarly: false });
      setError({}); // Clear errors if validation passes
      onClick(); // Proceed to next step
    } catch (err) {
      const errorObj = {};
      err.inner.forEach((e) => {
        errorObj[e.path] = e.message;
      });
      setError(errorObj); // Set errors if validation fails
    }
  };

  return (
    <div className="bg-white p-8 flex flex-col rounded-lg">
      {/* Custom Header */}
      <Header/>
      
      <div className="flex flex-col gap-3 mb-24">
        {/* Date of Birth Input */}
        <div className="flex flex-col">
          <label className="font-semibold leading-4 text-sm">Date of birth<span className="text-red-500">*</span></label>
          <input
            type="date"
            name="date"
            value={profile.date || ""}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          {error.date && <p className="text-red-500 text-sm">{error.date}</p>}
        </div>

        {/* Profile Image Input */}
        <div className="flex flex-col">
          <label className="font-semibold leading-4 text-sm">Profile image<span className="text-red-500">*</span></label>
          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          {error.profileImage && (
            <p className="text-red-500 text-sm">{error.profileImage}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between gap-2">
        {/* Back Button */}
        <button
          onClick={backClick}
          className={`py-2.5 px-3 flex justify-center items-center rounded-md bg-white text-[#202124] w-1/3 border border-[#CBD5E1]`}
        >
          Back
        </button>
        
        {/* Continue Button */}
        <button
          onClick={handleNext}
          className={`py-2.5 px-3 flex justify-center items-center rounded-md bg-[#121316] text-white w-full`}
          disabled={!!error.date || !!error.profileImage} // Disable button if there are validation errors
        >
          Continue 3/3
        </button>
      </div>
    </div>
  );
};

export default StepThree;
