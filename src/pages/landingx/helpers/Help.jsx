import React from "react";
import Stepper from "./Stepper";
import Control from "./Control";
import { useState } from "react";

const Help = () => {
  
  const [currentStep, setCurrentStep] = useState (1);
  const steps = [
    "Fill out the form and select a password to register",
    "Fund your account from a variety of payment methods",
    "Start mining & with no delay. Thousands of markets await you  ",
  ];

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }


  return (
    <div className="relative md:w-[80%] mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      {/* Navigation control */}
      <Control 
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      />
    </div>
  );
};

export default Help;
