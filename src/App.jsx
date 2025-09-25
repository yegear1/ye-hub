// src/App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

// Example placeholder features
const features = [
  { title: "Video Downloader", desc: "Download videos from various sources", icon: "🎥" },
  { title: "File Converter", desc: "Convert files between formats", icon: "🗂️" },
  { title: "GPU Price Analyzer", desc: "Track and analyze GPU prices", icon: "💻" },
  { title: "Password Generator", desc: "Generate secure random passwords", icon: "🔑" },
];

export default function App() {
  const [modules] = useState(features);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="p-6 flex items-center justify-center border-b-4 border-amber-300 bg-amber-200">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-center gap-2 text-4xl font-bold tracking-widest"
        >
          {/* YE Logo as homemade SVG */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
          >
            <text
              x="10"
              y="70"
              fontFamily="monospace"
              fontWeight="bold"
              fontSize="60"
              fill="#2c1810"
              stroke="#ffcc00"
              strokeWidth="2"
            >
              YE
            </text>
          </svg>
          <span className="text-amber-900">Your Experiments</span>
        </motion.div>
      </header>

      {/* Main grid */}
      <main className="flex-1 p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="w-full"
            >
              <Card className="rounded-2xl border-2 border-amber-300 shadow-md hover:shadow-lg transition duration-300 bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="text-5xl">{f.icon}</div>
                  <h2 className="text-xl font-semibold">{f.title}</h2>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                  <Button className="bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold rounded-xl">
                    Open
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-gray-600 border-t-2 border-amber-300">
        <p>✨ Homemade utilities by YE ✨</p>
      </footer>
    </div>
  );
}
