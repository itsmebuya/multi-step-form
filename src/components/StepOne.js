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
        <input
          name="firstName"
          value={profile.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        {error.firstName && <p className="text-red-500 text-sm">{error.firstName}</p>}

        <input
          name="lastName"
          value={profile.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        {error.lastName && <p className="text-red-500 text-sm">{error.lastName}</p>}

        <input
          name="username"
          value={profile.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
      </div>
      <div className="flex justify-between gap-2">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default StepOne;
