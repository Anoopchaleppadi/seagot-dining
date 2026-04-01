import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { categories, menuItems, type MenuItem } from "@/data/menuData";

interface MenuSectionProps {
  getQuantity: (id: string) => number;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
}

const MenuSection = ({ getQuantity, addItem, removeItem }: MenuSectionProps) => {
  const [active, setActive] = useState<string>(categories[0]);

  const filtered = menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-12 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-display font-bold text-center mb-8"
      >
        Our <span className="text-gold-gradient">Menu</span>
      </motion.h2>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              active === cat
                ? "btn-gold"
                : "glass-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {filtered.map((item) => {
            const qty = getQuantity(item.id);
            return (
              <motion.div
                key={item.id}
                layout
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 flex items-center justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                  <p className="text-primary font-bold mt-1">₹{item.price}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {qty > 0 ? (
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground"
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <motion.span
                        key={qty}
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        className="w-6 text-center font-bold text-primary"
                      >
                        {qty}
                      </motion.span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => addItem(item)}
                        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  ) : (
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => addItem(item)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold hover:bg-primary/25 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default MenuSection;
