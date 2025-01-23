'use client';

import { useState } from "react";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";

export default function Home() {
  const [step, setStep] = useState(1)
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email:"",
    phoneNumber:"",
    password:"",
    date:""
  })
  const [error, setError] = useState({})

  const onClick = () => {
    setStep(step + 1);
  };
  const backClick = () => {
    setStep(step - 1);
  }

  return (
    <div className="flex items-center h-screen justify-center bg-[#F4F4F4]">
      {step === 1 && <StepOne onClick={onClick} profile={profile} setProfile={setProfile} error={error} setError={setError} />}
      {step === 2 && <StepTwo onClick={onClick} backClick={backClick} profile={profile} setProfile={setProfile} error={error} setError={setError} />}
      {step === 3 && <StepThree onClick={onClick} backClick={backClick} profile={profile} setProfile={setProfile} error={error} setError={setError} />}
      {step === 4 && <StepFour />}
    </div>
  );
}
