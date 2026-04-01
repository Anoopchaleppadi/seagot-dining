import { motion } from "framer-motion";
import { Phone, MessageCircle, UtensilsCrossed } from "lucide-react";
import logo from "@/assets/logo.jpg";

interface NavbarProps {
  onScrollToMenu: () => void;
}

const Navbar = ({ onScrollToMenu }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card-strong rounded-none border-x-0 border-t-0"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left: Nav links */}
        <div className="flex items-center gap-1 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onScrollToMenu}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-primary" />
            Menu
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:09747440404"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span className="hidden sm:inline">Call</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919747880808"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-secondary" />
            <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>
        </div>

        {/* Right: Logo */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-2"
        >
          <span className="hidden sm:block text-xs font-display text-muted-foreground">
            Seagot Banasura
          </span>
          <img
            src={logo}
            alt="Seagot Banasura Resorts"
            className="w-10 h-10 rounded-xl object-contain gold-glow"
          />
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
