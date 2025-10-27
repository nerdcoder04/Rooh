import { Question } from "@/types/prakriti";

export const assessmentQuestions: Question[] = [
  // Physical Traits Observation
  {
    id: "skin-type",
    category: "physical",
    text: "Observe your skin type. How would you describe it?",
    options: [
      { text: "Dry, rough, or tends to crack easily", dosha: "vata", weight: 1 },
      { text: "Oily, warm, prone to acne or rashes", dosha: "pitta", weight: 1 },
      { text: "Balanced, smooth, or slightly oily", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "body-build",
    category: "physical", 
    text: "Note your body frame. Are you naturally:",
    options: [
      { text: "Thin, light-boned, find it hard to gain weight", dosha: "vata", weight: 1 },
      { text: "Medium build, muscular, moderate weight", dosha: "pitta", weight: 1 },
      { text: "Heavier build, strong bones, gain weight easily", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "hair-type",
    category: "physical",
    text: "Check your hair type. Is it:",
    options: [
      { text: "Dry, thin, brittle, or curly", dosha: "vata", weight: 1 },
      { text: "Oily, fine, straight, prone to early graying", dosha: "pitta", weight: 1 },
      { text: "Thick, lustrous, wavy, or oily", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "eyes",
    category: "physical",
    text: "Look at your eyes. Are they:",
    options: [
      { text: "Small or medium, dark, or somewhat dull", dosha: "vata", weight: 1 },
      { text: "Medium size, bright, piercing, light-sensitive", dosha: "pitta", weight: 1 },
      { text: "Large, calm, with thick lashes", dosha: "kapha", weight: 1 }
    ]
  },

  // Mental and Emotional Traits
  {
    id: "mindset",
    category: "mental",
    text: "Reflect on your general mindset. Are you usually:",
    options: [
      { text: "Quick-thinking, restless, or anxious", dosha: "vata", weight: 1 },
      { text: "Focused, intense, or competitive", dosha: "pitta", weight: 1 },
      { text: "Calm, steady, or slow to anger", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "memory",
    category: "mental",
    text: "Assess your memory. Do you:",
    options: [
      { text: "Learn quickly but forget easily", dosha: "vata", weight: 1 },
      { text: "Have sharp memory and good focus", dosha: "pitta", weight: 1 },
      { text: "Learn slowly but remember for long", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "emotions",
    category: "mental",
    text: "Observe your emotional tendencies. Are you prone to:",
    options: [
      { text: "Worry, anxiety, or mood swings", dosha: "vata", weight: 1 },
      { text: "Anger, irritability, or impatience", dosha: "pitta", weight: 1 },
      { text: "Attachment, contentment, or stubbornness", dosha: "kapha", weight: 1 }
    ]
  },

  // Daily Habits and Preferences
  {
    id: "diet-preference",
    category: "habits",
    text: "Note your dietary preferences. Do you prefer:",
    options: [
      { text: "Warm, cooked, oily foods; sweet, sour, salty tastes", dosha: "vata", weight: 1 },
      { text: "Cold, raw foods; sweet, bitter, astringent tastes", dosha: "pitta", weight: 1 },
      { text: "Light, dry, warm foods; pungent, bitter, astringent tastes", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "sleep-pattern",
    category: "habits",
    text: "Reflect on your sleep patterns. Do you:",
    options: [
      { text: "Sleep lightly, wake frequently, or have trouble sleeping", dosha: "vata", weight: 1 },
      { text: "Sleep moderately, sometimes restless, wake refreshed", dosha: "pitta", weight: 1 },
      { text: "Sleep deeply, need more sleep, hard to wake up", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "energy-levels",
    category: "habits", 
    text: "Assess your energy levels throughout the day. Are you:",
    options: [
      { text: "Energetic in bursts, then fatigued", dosha: "vata", weight: 1 },
      { text: "Consistently energetic, balanced throughout", dosha: "pitta", weight: 1 },
      { text: "Steady energy, slow to start, enduring", dosha: "kapha", weight: 1 }
    ]
  },

  // Environmental Reactions
  {
    id: "weather-preference",
    category: "environmental",
    text: "Consider your reaction to different weather. Do you prefer:",
    options: [
      { text: "Warm, humid climate; dislike cold, wind", dosha: "vata", weight: 1 },
      { text: "Cool, dry climate; dislike heat, sun", dosha: "pitta", weight: 1 },
      { text: "Warm, dry climate; dislike cold, damp weather", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "stress-response",
    category: "environmental",
    text: "Observe how you respond to stress. Do you:",
    options: [
      { text: "Become anxious, worried, or scattered", dosha: "vata", weight: 1 },
      { text: "Become irritable, angry, or critical", dosha: "pitta", weight: 1 },
      { text: "Withdraw, become stubborn, or eat more", dosha: "kapha", weight: 1 }
    ]
  },

  // Additional Assessment Questions
  {
    id: "appetite",
    category: "habits",
    text: "How would you describe your appetite?",
    options: [
      { text: "Variable, sometimes forget to eat", dosha: "vata", weight: 1 },
      { text: "Strong, get irritable when hungry", dosha: "pitta", weight: 1 },
      { text: "Steady, can skip meals without discomfort", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "decision-making",
    category: "mental",
    text: "How do you make decisions?",
    options: [
      { text: "Quickly, often change my mind", dosha: "vata", weight: 1 },
      { text: "Deliberately, stick to decisions", dosha: "pitta", weight: 1 },
      { text: "Slowly, after much consideration", dosha: "kapha", weight: 1 }
    ]
  },
  {
    id: "exercise-preference",
    category: "habits",
    text: "What type of exercise do you prefer?",
    options: [
      { text: "Light, varied activities like yoga or walking", dosha: "vata", weight: 1 },
      { text: "Moderate to intense activities like running or sports", dosha: "pitta", weight: 1 },
      { text: "Gentle, consistent activities like swimming", dosha: "kapha", weight: 1 }
    ]
  }
];

export const getQuestionsByCategory = (category: Question['category']) => {
  return assessmentQuestions.filter(q => q.category === category);
};