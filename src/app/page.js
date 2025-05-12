'use client'

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
  confirmPassword: "",
  date: ""
}

export default function Home() {
  const [profile, setProfile] = useState(defaultValue)
  const [step, setStep] = useState(1)

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    const savedStep = localStorage.getItem("step");

    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedStep) setStep(Number(savedStep));
  }, []);

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile))
    localStorage.setItem("step", step)
  }, [profile, step])


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
