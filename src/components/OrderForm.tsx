import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import type { CartItem } from "@/data/menuData";

interface OrderFormProps {
  cart: CartItem[];
  totalPrice: number;
  onOrderPlaced: () => void;
}

const OrderForm = ({ cart, totalPrice, onOrderPlaced }: OrderFormProps) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [villa, setVilla] = useState("");

  const isValid = name.trim() && mobile.trim() && whatsapp.trim() && villa.trim() && cart.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const orderLines = cart
      .map((item) => `- ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join("\n");

    const message = `🍽️ *New Food Order - Seagot Banasura Resorts*

👤 Name: ${name.trim()}
📱 Mobile: ${mobile.trim()}
💬 WhatsApp: ${whatsapp.trim()}
🏠 Villa Number: ${villa.trim()}

📋 *Order Details:*
${orderLines}

💰 *Total: ₹${totalPrice}*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919747880808?text=${encoded}`, "_blank");
    onOrderPlaced();
  };

  return (
    <section id="order-form" className="py-12 px-4 max-w-lg mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-display font-bold text-center mb-8"
      >
        Complete Your <span className="text-gold-gradient">Order</span>
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="glass-card-strong p-6 space-y-4"
      >
        {[
          { label: "Name", value: name, set: setName, type: "text", placeholder: "Your full name" },
          { label: "Mobile Number", value: mobile, set: setMobile, type: "tel", placeholder: "+91 XXXXX XXXXX" },
          { label: "WhatsApp Number", value: whatsapp, set: setWhatsapp, type: "tel", placeholder: "+91 XXXXX XXXXX" },
          { label: "Villa Number", value: villa, set: setVilla, type: "text", placeholder: "e.g. Villa 12" },
        ].map((field) => (
          <div key={field.label}>
            <label className="block text-sm text-muted-foreground mb-1.5">{field.label} *</label>
            <input
              type={field.type}
              required
              value={field.value}
              onChange={(e) => field.set(e.target.value)}
              placeholder={field.placeholder}
              maxLength={100}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        ))}

        {/* Order Summary */}
        {cart.length > 0 && (
          <div className="glass-card p-4 space-y-2">
            <h3 className="text-sm font-semibold text-primary mb-2">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                <span className="text-foreground font-medium">₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-primary">₹{totalPrice}</span>
            </div>
          </div>
        )}

        <motion.button
          type="submit"
          disabled={!isValid}
          whileHover={{ scale: isValid ? 1.02 : 1 }}
          whileTap={{ scale: isValid ? 0.97 : 1 }}
          className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          Place Order 🚀
        </motion.button>
      </motion.form>
    </section>
  );
};

export default OrderForm;
