import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TourContext } from "../context/TourContext";
import TourStepCard from "./TourStepCard";
import Button from "./Button";

export default function Editor() {
  const { steps, addStep } = useContext(TourContext);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");


  const handleAddStep = () => {
    if (!title || !imageUrl || !description) {
      setError("Please fill in all fields.");
      return;
    }

    addStep({ title, imageUrl, description });
    setTitle("");
    setImageUrl("");
    setDescription("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Editor Form */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tour Editor</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mb-8">
        {error && (
          <p className="text-red-500 mb-4 text-center" role="alert">
            {error}
          </p>
        )}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Step Title"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Step title"
        />
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Image URL"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Step description"
          rows="3"
        />
        <Button
          onClick={handleAddStep}
          variant="primary"
          className="w-full"
          aria-label="Add new step"
        >
          Add Step
        </Button>
      </div>

      {/* Live Preview Section */}
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Live Preview
        </h2>
        {steps.length === 0 ? (
          <p className="text-gray-600 text-center">No steps added yet.</p>
        ) : (
          <div className="space-y-4">
            {steps.map((step, index) => (
              <TourStepCard key={index} step={step} isPreview />
            ))}
          </div>
        )}
        <Link
          to="/tour"
          className="mt-4 inline-block text-blue-500 hover:underline"
          aria-label="View full tour"
        >
          View Full Tour
        </Link>
      </div>
    </div>
  );
}