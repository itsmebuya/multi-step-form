"use client";

import { useState } from "react";
import { stepThreeSchema } from "@/schema/validationSchemas";

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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Step 3: Profile Details</h2>
      </div>
      
      <div className="flex flex-col gap-3 mb-24">
        {/* Date of Birth Input */}
        <div className="flex flex-col">
          <label>Date of Birth</label>
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
          <label>Profile Image</label>
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
          className="bg-gray-300 text-black p-2 rounded"
        >
          Back
        </button>
        
        {/* Continue Button */}
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={!!error.date || !!error.profileImage} // Disable button if there are validation errors
        >
          Continue 3/3
        </button>
      </div>
    </div>
  );
};

export default StepThree;
