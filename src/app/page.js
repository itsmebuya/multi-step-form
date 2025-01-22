'use client';

import { useState } from "react";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";

export default function Home() {
  const [step, setStep] = useState(1)

  const onClick = () => {
    setStep(step + 1);
  };
  const backClick = () => {
    setStep(step-1);
  }

  return (
    <div className="flex items-center h-screen justify-center bg-[#F4F4F4]">
      {step === 1 && <StepOne onClick={onClick} />}
      {step === 2 && <StepTwo onClick={onClick} backClick={backClick} />}
      {step === 3 && <StepThree onClick={onClick} backClick={backClick} />}
      {step === 4 && <StepFour/>}
    </div>
  );
}
