import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TourProvider } from "./context/TourContext";
import LandingPage from "./components/LandingPage";
import TourPage from "./components/TourPage";
import Editor from "./components/Editor";

export default function App() {
  return (
    <TourProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </TourProvider>
  );
}