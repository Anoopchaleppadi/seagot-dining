import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpeg";
import logo from "@/assets/logo.jpg";

interface HeroSectionProps {
  onStartOrdering: () => void;
}

const HeroSection = ({ onStartOrdering }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Seagot Banasura Resort" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="Seagot Banasura Resorts"
            className="w-28 h-28 mx-auto rounded-2xl object-contain gold-glow"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight"
        >
          Welcome to{" "}
          <span className="text-gold-gradient">Seagot Banasura</span>{" "}
          Dining Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg mb-10 font-light"
        >
          Order delicious food directly to your villa
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStartOrdering}
          className="btn-gold animate-glow-pulse"
        >
          Start Ordering
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
