import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Discover the Ultimate Product Tour Experience
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Guide your users with seamless, interactive tours that bring your product to life.
      </motion.p>

      <Link to="/tour">
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          Explore Now
        </motion.button>
      </Link>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      >
        <Link to="/editor" className="mt-4 text-blue-500 hover:underline">
          Build Your Tour
        </Link>
      </motion.div>
    </div>
  );
}