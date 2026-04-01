import { Phone, MessageCircle, Globe } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border mt-8">
    <div className="max-w-lg mx-auto text-center space-y-4">
      <h3 className="font-display text-xl font-bold text-gold-gradient">
        Seagot Banasura Resorts
      </h3>
      <p className="text-sm text-muted-foreground">Wayanad, Kerala</p>

      <div className="flex flex-wrap justify-center gap-3 text-sm">
        <a href="tel:09747440404" className="glass-card px-4 py-2 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Phone className="w-3.5 h-3.5 text-primary" /> 097474 40404
        </a>
        <a href="tel:09747550505" className="glass-card px-4 py-2 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Phone className="w-3.5 h-3.5 text-primary" /> 097475 50505
        </a>
        <a href="https://wa.me/919747880808" target="_blank" rel="noopener noreferrer" className="glass-card px-4 py-2 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <MessageCircle className="w-3.5 h-3.5 text-primary" /> WhatsApp
        </a>
        <a href="https://seagotresortsbooking.vercel.app/" target="_blank" rel="noopener noreferrer" className="glass-card px-4 py-2 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Globe className="w-3.5 h-3.5 text-primary" /> Website
        </a>
      </div>

      <p className="text-xs text-muted-foreground/40 pt-4">A SGT MARKETING TEAM</p>
    </div>
  </footer>
);

export default Footer;
