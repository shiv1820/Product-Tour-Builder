import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { DEFAULT_STEPS } from "../utils/constants";

export const TourContext = createContext();

export function TourProvider({ children }) {
  const [steps, setSteps] = useState(DEFAULT_STEPS);

  const addStep = (newStep) => {
    setSteps((prevSteps) => [...prevSteps, newStep]);
  };

  return (
    <TourContext.Provider value={{ steps, addStep }}>
      {children}
    </TourContext.Provider>
  );
}

TourProvider.propTypes = {
  children: PropTypes.node.isRequired,
};