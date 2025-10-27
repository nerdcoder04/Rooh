import { DoshaType } from "@/types/prakriti";

export const dietData = {
  vata: {
    name: "Vata",
    color: "vata",
    favorableFoods: [
      "Warm, cooked foods", "Sweet fruits (bananas, dates)", "Whole grains (rice, oats)",
      "Nuts and seeds", "Warm milk", "Ghee and oils", "Root vegetables"
    ],
    avoidFoods: [
      "Cold, raw foods", "Dried fruits", "Beans (except mung)", 
      "Excessive caffeine", "Spicy foods", "Carbonated drinks"
    ],
    mealTiming: [
      "Regular meal times", "Warm breakfast by 8 AM", "Substantial lunch 12-1 PM",
      "Light, early dinner before 7 PM", "Avoid skipping meals"
    ],
    beverages: ["Warm water", "Herbal teas", "Warm milk with spices", "Fresh juices (room temp)"],
    tips: ["Eat in calm environment", "Chew food thoroughly", "Add healthy fats", "Use warming spices"]
  },
  pitta: {
    name: "Pitta", 
    color: "pitta",
    favorableFoods: [
      "Cool, refreshing foods", "Sweet fruits (melons, grapes)", "Leafy greens",
      "Coconut water", "Cooling herbs", "Moderate proteins", "Raw vegetables"
    ],
    avoidFoods: [
      "Spicy, hot foods", "Citrus fruits", "Tomatoes", "Excessive salt",
      "Fried foods", "Alcohol", "Red meat"
    ],
    mealTiming: [
      "Never skip meals", "Light breakfast", "Substantial lunch at noon",
      "Moderate dinner before 8 PM", "Avoid eating when angry"
    ],
    beverages: ["Cool water", "Coconut water", "Cooling teas", "Fresh vegetable juices"],
    tips: ["Eat in peaceful setting", "Avoid overeating", "Include cooling foods", "Limit caffeine"]
  },
  kapha: {
    name: "Kapha",
    color: "kapha", 
    favorableFoods: [
      "Light, warm foods", "Spicy dishes", "Leafy greens", "Legumes",
      "Warming spices", "Steamed vegetables", "Low-fat proteins"
    ],
    avoidFoods: [
      "Heavy, oily foods", "Dairy products", "Cold foods", "Sweet foods",
      "Excessive salt", "Processed foods", "Refined sugars"
    ],
    mealTiming: [
      "Light breakfast or skip", "Main meal at lunch", "Very light dinner",
      "Avoid late night eating", "Allow 4-5 hours between meals"
    ],
    beverages: ["Warm water", "Ginger tea", "Green tea", "Diluted fruit juices"],
    tips: ["Eat largest meal at lunch", "Use stimulating spices", "Avoid overeating", "Stay active after meals"]
  }
};

