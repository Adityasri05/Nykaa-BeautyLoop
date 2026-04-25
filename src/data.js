export const userData = {
  name: "Aditi",
  tier: "Silver Member",
  points: 1240,
  nextTierPoints: 2000,
  skinType: "Oily Skin",
};

export const reorderItems = [
  {
    id: 1,
    name: "Cetaphil Gentle Skin Cleanser",
    brand: "Cetaphil",
    price: "₹333",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",
    daysLeft: 5,
    isSubscribed: false
  },
  {
    id: 2,
    name: "Minimalist 10% Niacinamide Serum",
    brand: "Minimalist",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",
    daysLeft: 12,
    isSubscribed: true
  }
];

export const recommendedProducts = [
  {
    id: 101,
    name: "Dot & Key 72k Hydrating Gel",
    brand: "Dot & Key",
    price: "₹495",
    originalPrice: "₹550",
    discount: "10% Off",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 102,
    name: "Plum Green Tea Mattifying Moisturizer",
    brand: "Plum",
    price: "₹420",
    originalPrice: "₹470",
    discount: "11% Off",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 103,
    name: "Aqualogica Radiance+ Dewy Sunscreen",
    brand: "Aqualogica",
    price: "₹399",
    originalPrice: "₹450",
    discount: "15% Off",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=200"
  }
];

export const initialMissions = [
  { id: 'm1', title: "Buy 1 skincare product", points: 100, completed: false },
  { id: 'm2', title: "Daily login", points: 20, completed: false },
  { id: 'm3', title: "Write a review", points: 50, completed: false }
];
