import React, { useState } from "react";

const Stepper = () => {
  const [steps, setSteps] = useState([
    { name: "Step 1", done: false, started: false },
    { name: "Step 2", done: false, started: false },
    { name: "Step 3", done: false, started: false },
  ]);

  const handleStepClick = (index) => {
    console.log(steps);
    if (!steps[index].done && !steps[index].started) {
      const newSteps = [...steps];
      newSteps[index] = { ...steps[index], started: true };
      setSteps(newSteps);
    } else if (!steps[index].done && steps[index].started) {
      const newSteps = [...steps];
      newSteps[index] = { ...steps[index], done: true, started: false };
      setSteps(newSteps);
    }
  };
  return (
    <k-stepper>
      <k-stepper-header>
        {steps.map((step, index) => (
          <k-stepper-header-item
            key={index}
            done={step.done}
            started={step.started}
            onClick={() => handleStepClick(index)}
          >
            {step.name}
          </k-stepper-header-item>
        ))}
      </k-stepper-header>
      <k-stepper-content>
        {steps.map((step, index) => (
          <k-stepper-content-item key={index}>
            {`Content ${step.name}`}
          </k-stepper-content-item>
        ))}
      </k-stepper-content>
    </k-stepper>
  );
};

export default Stepper;
