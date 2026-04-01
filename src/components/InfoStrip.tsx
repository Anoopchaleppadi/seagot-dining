import { motion } from "framer-motion";
import { MapPin, Mountain, UtensilsCrossed, Clock, Phone, MessageCircle, Zap } from "lucide-react";

const items = [
  { icon: MapPin, text: "Wayanad" },
  { icon: Mountain, text: "Nature Stay" },
  { icon: UtensilsCrossed, text: "In-Villa Dining" },
  { icon: Clock, text: "24×7 Service" },
  { icon: Phone, text: "Call" },
  { icon: MessageCircle, text: "WhatsApp" },
  { icon: Zap, text: "Fast Delivery" },
];

const InfoStrip = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-6 overflow-x-auto"
  >
    <div className="flex gap-4 px-4 min-w-max mx-auto justify-center flex-wrap">
      {items.map((item) => (
        <div
          key={item.text}
          className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground"
        >
          <item.icon className="w-4 h-4 text-primary" />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  </motion.section>
);

export default InfoStrip;
