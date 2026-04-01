import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import InfoStrip from "@/components/InfoStrip";
import MenuSection from "@/components/MenuSection";
import FloatingCart from "@/components/FloatingCart";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef<HTMLDivElement>(null);
  const { cart, addItem, removeItem, getQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOrder = () => {
    setShowForm(true);
    setTimeout(() => orderRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleOrderPlaced = () => {
    clearCart();
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onStartOrdering={scrollToMenu} />
      <InfoStrip />
      <div ref={menuRef}>
        <MenuSection getQuantity={getQuantity} addItem={addItem} removeItem={removeItem} />
      </div>
      {showForm && (
        <div ref={orderRef}>
          <OrderForm cart={cart} totalPrice={totalPrice} onOrderPlaced={handleOrderPlaced} />
        </div>
      )}
      <div className="pb-24" />
      <Footer />
      <FloatingCart totalItems={totalItems} totalPrice={totalPrice} onProceed={scrollToOrder} />
    </div>
  );
};

export default Index;
