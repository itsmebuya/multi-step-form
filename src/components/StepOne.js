'use client';

import Header from "@/components/Header";
import { stepOneSchema } from "@/schema/validationSchemas";
import { useState } from "react";


const StepOne = ({ onClick, profile, setProfile }) => {
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const handleNext = async () => {
    try {
      await stepOneSchema.validate(profile, { abortEarly: false });
      setError({});
      onClick();
    } catch (err) {
      const errorObj = {};
      for (let i = 0; i < err.inner.length; i++) {
        const e = err.inner[i];
        if (e.path) errorObj[e.path] = e.message;
      }
      setError(errorObj);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-8 flex flex-col rounded-lg">
      <Header />
      <div className="flex flex-col gap-3 mb-24">
        <p className="font-semibold leading-4 text-sm">First name<span className="text-red-500">*</span></p>
        <input
          name="firstName"
          value={profile.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className={`p-4 border rounded-lg ${error.firstName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {error.firstName && <p className="text-red-500 text-sm">{error.firstName}</p>}

        <p className="font-semibold leading-4 text-sm">Last name<span className="text-red-500">*</span></p>
        <input
          name="lastName"
          value={profile.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className={`p-4 border rounded-lg ${error.lastName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {error.lastName && <p className="text-red-500 text-sm">{error.lastName}</p>}

        <p className="font-semibold leading-4 text-sm">Username<span className="text-red-500">*</span></p>
        <input
          name="username"
          value={profile.username}
          onChange={handleChange}
          placeholder="Username"
          className={`p-4 border rounded-lg ${error.username ? 'border-red-500' : 'border-gray-300'}`}
        />
        {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
      </div>
      <div className="flex justify-center items-center">
        <button onClick={handleNext} className="bg-black text-white rounded-md py-2.5 px-3 w-full">Continue 1/3</button>
      </div>
    </div>
  );
};

export default StepOne;
