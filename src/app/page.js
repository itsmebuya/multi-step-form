'use client';

import { useState, useEffect, use } from "react";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";

const defaultValue = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  phoneNumber: "",
  password: "",
  date: ""
}

export default function Home() {
  const [profile, setProfile] = useState(() => {
    if (typeof window !== 'undefined')
      return JSON.parse(localStorage.getItem("profile") || JSON.stringify(defaultValue));
  })

  const [step, setStep] = useState(() => {
    if (typeof window !== 'undefined')
      return Number(localStorage.getItem("step")) || 1
  })

  useEffect(() => {
    if (typeof window !== 'undefined')
      localStorage.setItem("step", step)
  }, [step]);
  useEffect(() => {
    if (typeof window !== 'undefined')
      localStorage.setItem("profile", JSON.stringify(profile))
  }, [profile])


  const onClick = () => {
    setStep(step + 1);
  };
  const backClick = () => {
    setStep(step - 1);
  }


  return (
    <div className="flex items-center h-screen justify-center bg-[#F4F4F4]">
      {step === 1 && <StepOne onClick={onClick} profile={profile} setProfile={setProfile} />}
      {step === 2 && <StepTwo onClick={onClick} backClick={backClick} profile={profile} setProfile={setProfile} />}
      {step === 3 && <StepThree onClick={onClick} backClick={backClick} profile={profile} setProfile={setProfile} />}
      {step === 4 && <StepFour />}
    </div>
  );
}
