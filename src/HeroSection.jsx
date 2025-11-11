import { useState,useEffect } from "react";
import { Button } from "../src/components/ui/button";
import { Card, CardContent } from "../src/components/ui/card";
import { Input } from "../src/components/ui/input";
import { FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";


const slides = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200",
  "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?q=80&w=1200",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <Card className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      <CardContent className="w-full h-full p-0">
        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${slides[index]})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black/40 backdrop-blur-sm">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-5xl font-bold text-white drop-shadow"
          >
            Discover Premium Properties
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mb-8 text-lg text-white/90"
          >
            Find the best homes, apartments, and luxury spaces across top cities.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center w-full max-w-xl p-3 rounded-full shadow-xl bg-white/90 backdrop-blur-md"
          >
            <FiSearch className="text-gray-600" size={22} />
            <Input
              placeholder="Search by city, locality, or property..."
              className="ml-3 bg-transparent border-0 focus-visible:ring-0"
            />
          </motion.div>
        </div>

        {/* Controls */}
        <Button
          variant="secondary"
          className="absolute p-3 -translate-y-1/2 rounded-full shadow-xl left-4 top-1/2 bg-white/80 backdrop-blur-md"
          onClick={prev}
        >
          <FiArrowLeft size={20} />
        </Button>

        <Button
          variant="secondary"
          className="absolute p-3 -translate-y-1/2 rounded-full shadow-xl right-4 top-1/2 bg-white/80 backdrop-blur-md"
          onClick={next}
        >
          <FiArrowRight size={20} />
        </Button>
      </CardContent>
    </Card>
  );
}
