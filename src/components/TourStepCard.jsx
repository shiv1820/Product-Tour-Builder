// src/components/TourStepCard.jsx
import PropTypes from "prop-types";

// Reusable component to display a tour step
export default function TourStepCard({ step, isPreview = false }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${isPreview ? "flex flex-col md:flex-row" : ""}`}>
      <img
        src={step.imageUrl}
        alt={step.title}
        className={`object-cover rounded-md mb-4 ${isPreview ? "w-full md:w-1/3 h-32 md:mb-0 md:mr-4" : "w-full h-64"}`}
        onError={(e) => (e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found")}
      />
      <div>
        <h2 className={`font-semibold mb-2 ${isPreview ? "text-xl" : "text-2xl"}`}>{step.title}</h2>
        <p className="text-gray-700">{step.description}</p>
      </div>
    </div>
  );
}

TourStepCard.propTypes = {
  step: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isPreview: PropTypes.bool,
};