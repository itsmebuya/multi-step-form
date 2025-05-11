"use client";

import Header from "@/components/Header";
import Button from "@/components/Button";
import { useState } from "react";
import { stepTwoSchema } from "@/schema/validationSchemas";


const StepTwo = ({ onClick, backClick, profile, setProfile }) => {
  const [error, setError] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = async () => {
    // Prepare the data for validation, including confirmPassword
    const data = {
      ...profile,
      confirmPassword: profile.confirmPassword || "", // for validation
    };

    try {
      // Validate the form data using Yup
      await stepTwoSchema.validate(data, { abortEarly: false });
      setError({}); // Clear existing errors
      onClick(); // Move to the next step
    } catch (err) {
      const errorObj = {};
      err.inner.forEach((e) => {
        errorObj[e.path] = e.message;
      });
      setError(errorObj); // Set validation errors
    }
  };

  return (
    <div className="bg-white p-8 flex flex-col rounded-lg">
      <Header />
      <div className="flex flex-col gap-3 mb-24">
        {/* Email Input */}
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter your email"
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter your phone number"
          />
          {error.phoneNumber && (
            <p className="text-red-500 text-sm">{error.phoneNumber}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter your password"
          />
          {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
        </div>

        {/* Confirm Password Input */}
        <div className="flex flex-col">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={profile.confirmPassword || ""}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Confirm your password"
          />
          {error.confirmPassword && (
            <p className="text-red-500 text-sm">{error.confirmPassword}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <Button text="Back" type="back" backClick={backClick} />
        <Button text="Continue 2/3" type="continue" onClick={handleNext} />
      </div>
    </div>
  );
};

export default StepTwo;
