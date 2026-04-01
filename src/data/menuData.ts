export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
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
  { id: "r1", name: "Chappathi", price: 15, category: "Rice & Chappathi" },
  { id: "r2", name: "Veg Fried Rice", price: 160, category: "Rice & Chappathi" },
  { id: "r3", name: "Egg Fried Rice", price: 180, category: "Rice & Chappathi" },
  { id: "r4", name: "Chicken Fried Rice", price: 230, category: "Rice & Chappathi" },
  { id: "r5", name: "Jeera Rice", price: 160, category: "Rice & Chappathi" },
  { id: "r6", name: "Plain Rice", price: 150, category: "Rice & Chappathi" },

  // Non Veg Curry
  { id: "nvc1", name: "Chilly Chicken", price: 250, category: "Non Veg Curry" },
  { id: "nvc2", name: "Chicken Curry", price: 230, category: "Non Veg Curry" },
  { id: "nvc3", name: "Pepper Chicken", price: 250, category: "Non Veg Curry" },

  // Veg Curry
  { id: "vc1", name: "Dal Fry", price: 160, category: "Veg Curry" },
  { id: "vc2", name: "Dal Thadka", price: 160, category: "Veg Curry" },
  { id: "vc3", name: "Chilly Gobi", price: 180, category: "Veg Curry" },

  // Non Veg Starter
  { id: "nvs1", name: "Chicken 65", price: 250, category: "Non Veg Starter" },
  { id: "nvs2", name: "Chilly Chicken Dry", price: 270, category: "Non Veg Starter" },
  { id: "nvs3", name: "Egg Burji", price: 150, category: "Non Veg Starter" },
  { id: "nvs4", name: "Double Omelette", price: 70, category: "Non Veg Starter" },

  // Veg Starter
  { id: "vs1", name: "Green Salad", price: 120, category: "Veg Starter" },
  { id: "vs2", name: "Peanut Masala", price: 120, category: "Veg Starter" },

  // Tea & Snacks
  { id: "ts1", name: "Tea", price: 25, category: "Tea & Snacks" },
  { id: "ts2", name: "Coffee", price: 30, category: "Tea & Snacks" },
  { id: "ts3", name: "Black Tea", price: 15, category: "Tea & Snacks" },
  { id: "ts4", name: "Black Coffee", price: 20, category: "Tea & Snacks" },
  { id: "ts5", name: "Chicken Momos", price: 150, category: "Tea & Snacks" },
  { id: "ts6", name: "Veg Momos", price: 100, category: "Tea & Snacks" },
  { id: "ts7", name: "French Fries", price: 120, category: "Tea & Snacks" },
  { id: "ts8", name: "Chicken Nuggets", price: 160, category: "Tea & Snacks" },
];
