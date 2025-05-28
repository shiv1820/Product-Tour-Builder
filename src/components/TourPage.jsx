import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TourContext } from "../context/TourContext";
import TourStepCard from "./TourStepCard";
import Button from "./Button";

export default function TourPage() {
  const { steps } = useContext(TourContext);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const navigate = useNavigate();

  
  if (steps.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No steps available.</p>
      </div>
    );
  }

  const goToNextStep = () => {
    setCurrentStepIndex((prevIndex) =>
      Math.min(prevIndex + 1, steps.length - 1)
    );
  };

  const goToPreviousStep = () => {
    setCurrentStepIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const finishTour = () => {
    navigate("/");
  };

  const currentStep = steps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div
        key={currentStepIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <TourStepCard step={currentStep} />
        <div className="flex justify-between mt-6">
          <Button
            onClick={goToPreviousStep}
            disabled={isFirstStep}
            variant="secondary"
            aria-label="Previous step"
          >
            Previous
          </Button>
          {isLastStep ? (
            <Button
              onClick={finishTour}
              variant="success"
              aria-label="Finish tour"
            >
              Finish
            </Button>
          ) : (
            <Button
              onClick={goToNextStep}
              variant="primary"
              aria-label="Next step"
            >
              Next
            </Button>
          )}
        </div>
      </motion.div>
      <p className="mt-4 text-gray-600">
        Step {currentStepIndex + 1} of {steps.length}
      </p>
    </div>
  );
}