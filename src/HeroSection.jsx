import { useState, useEffect } from "react";
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

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <Card className="relative z-10 w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-none md:rounded-2xl shadow-2xl">
      <CardContent className="w-full h-full p-0">

        {/* Background Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${slides[index]})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center md:px-6 bg-black/40 backdrop-blur-sm">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow md:mb-4"
          >
            Discover Premium Properties
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl px-2 mb-6 text-sm sm:max-w-2xl sm:text-base md:text-lg text-white/90 md:mb-8"
          >
            Find the best homes, apartments, and luxury spaces across top cities.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center w-full max-w-xs p-2 rounded-full shadow-xl sm:max-w-md md:max-w-xl sm:p-3 bg-white/90 backdrop-blur-md"
          >
            <FiSearch className="text-gray-600" size={18} />
            <Input
              placeholder="Search by city, locality, or property..."
              className="ml-2 text-sm bg-transparent border-0 sm:ml-3 focus-visible:ring-0 sm:text-base"
            />
          </motion.div>
        </div>

        {/* Left Arrow */}
        <Button
          variant="secondary"
          className="absolute p-2 -translate-y-1/2 rounded-full shadow-xl top-1/2 left-3 sm:left-4 sm:p-3 bg-white/80 backdrop-blur-md"
          onClick={prev}
        >
          <FiArrowLeft className="w-4 h-4 text-gray-700 sm:w-5 sm:h-5" />
        </Button>

        {/* Right Arrow */}
        <Button
          variant="secondary"
          className="absolute p-2 -translate-y-1/2 rounded-full shadow-xl top-1/2 right-3 sm:right-4 sm:p-3 bg-white/80 backdrop-blur-md"
          onClick={next}
        >
          <FiArrowRight className="w-4 h-4 text-gray-700 sm:w-5 sm:h-5" />
        </Button>
      </CardContent>
    </Card>
  );
}
