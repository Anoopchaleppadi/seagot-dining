import { useState, useCallback } from "react";
import type { MenuItem, CartItem } from "@/data/menuData";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = useCallback((item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map((c) => c.id === id ? { ...c, quantity: c.quantity - 1 } : c);
      }
      return prev.filter((c) => c.id !== id);
    });
  }, []);

  const getQuantity = useCallback((id: string) => {
    return cart.find((c) => c.id === id)?.quantity || 0;
  }, [cart]);

  const totalItems = cart.reduce((sum, c) => sum + c.quantity, 0);
  const totalPrice = cart.reduce((sum, c) => sum + c.price * c.quantity, 0);

  const clearCart = useCallback(() => setCart([]), []);

  return { cart, addItem, removeItem, getQuantity, totalItems, totalPrice, clearCart };
}
