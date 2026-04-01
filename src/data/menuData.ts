import {
  CookingPot, Wheat, Egg, Drumstick, Flame, Leaf, Salad,
  Coffee, CupSoda, Cookie, Sandwich, IceCreamCone, Soup, Bean,
  type LucideIcon
} from "lucide-react";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  icon: LucideIcon;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const categories = [
  "Rice & Chappathi",
  "Non Veg Curry",
  "Veg Curry",
  "Non Veg Starter",
  "Veg Starter",
  "Tea & Snacks",
] as const;

export const menuItems: MenuItem[] = [
  // Rice & Chappathi
  { id: "r1", name: "Chappathi", price: 15, category: "Rice & Chappathi", icon: Wheat },
  { id: "r2", name: "Veg Fried Rice", price: 160, category: "Rice & Chappathi", icon: CookingPot },
  { id: "r3", name: "Egg Fried Rice", price: 180, category: "Rice & Chappathi", icon: Egg },
  { id: "r4", name: "Chicken Fried Rice", price: 230, category: "Rice & Chappathi", icon: Drumstick },
  { id: "r5", name: "Jeera Rice", price: 160, category: "Rice & Chappathi", icon: CookingPot },
  { id: "r6", name: "Plain Rice", price: 150, category: "Rice & Chappathi", icon: CookingPot },

  // Non Veg Curry
  { id: "nvc1", name: "Chilly Chicken", price: 250, category: "Non Veg Curry", icon: Flame },
  { id: "nvc2", name: "Chicken Curry", price: 230, category: "Non Veg Curry", icon: Soup },
  { id: "nvc3", name: "Pepper Chicken", price: 250, category: "Non Veg Curry", icon: Drumstick },

  // Veg Curry
  { id: "vc1", name: "Dal Fry", price: 160, category: "Veg Curry", icon: Bean },
  { id: "vc2", name: "Dal Thadka", price: 160, category: "Veg Curry", icon: Bean },
  { id: "vc3", name: "Chilly Gobi", price: 180, category: "Veg Curry", icon: Leaf },

  // Non Veg Starter
  { id: "nvs1", name: "Chicken 65", price: 250, category: "Non Veg Starter", icon: Drumstick },
  { id: "nvs2", name: "Chilly Chicken Dry", price: 270, category: "Non Veg Starter", icon: Flame },
  { id: "nvs3", name: "Egg Burji", price: 150, category: "Non Veg Starter", icon: Egg },
  { id: "nvs4", name: "Double Omelette", price: 70, category: "Non Veg Starter", icon: Egg },

  // Veg Starter
  { id: "vs1", name: "Green Salad", price: 120, category: "Veg Starter", icon: Salad },
  { id: "vs2", name: "Peanut Masala", price: 120, category: "Veg Starter", icon: Bean },

  // Tea & Snacks
  { id: "ts1", name: "Tea", price: 25, category: "Tea & Snacks", icon: Coffee },
  { id: "ts2", name: "Coffee", price: 30, category: "Tea & Snacks", icon: Coffee },
  { id: "ts3", name: "Black Tea", price: 15, category: "Tea & Snacks", icon: CupSoda },
  { id: "ts4", name: "Black Coffee", price: 20, category: "Tea & Snacks", icon: CupSoda },
  { id: "ts5", name: "Chicken Momos", price: 150, category: "Tea & Snacks", icon: Sandwich },
  { id: "ts6", name: "Veg Momos", price: 100, category: "Tea & Snacks", icon: Sandwich },
  { id: "ts7", name: "French Fries", price: 120, category: "Tea & Snacks", icon: Cookie },
  { id: "ts8", name: "Chicken Nuggets", price: 160, category: "Tea & Snacks", icon: Drumstick },
];
