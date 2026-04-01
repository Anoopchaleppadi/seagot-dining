import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface FloatingCartProps {
  totalItems: number;
  totalPrice: number;
  onProceed: () => void;
}

const FloatingCart = ({ totalItems, totalPrice, onProceed }: FloatingCartProps) => (
  <AnimatePresence>
    {totalItems > 0 && (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <button
          onClick={onProceed}
          className="w-full max-w-lg mx-auto flex items-center justify-between px-6 py-4 rounded-2xl btn-gold"
        >
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-bold">{totalItems} item{totalItems > 1 ? "s" : ""}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg">₹{totalPrice}</span>
            <span className="text-sm opacity-80">Proceed →</span>
          </div>
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);

export default FloatingCart;
