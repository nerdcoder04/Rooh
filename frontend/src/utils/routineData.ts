import { DoshaType } from "@/types/prakriti";

export const routineData = {
  vata: {
    name: "Vata",
    color: "vata",
    wakeTime: "6:00 - 7:00 AM",
    sleepTime: "10:00 - 10:30 PM",
    morning: [
      "Warm water with lemon", "Oil massage (abhyanga)", "Gentle yoga or stretching",
      "Meditation (10-15 min)", "Warm, nourishing breakfast"
    ],
    afternoon: [
      "Substantial, warm lunch", "Brief rest or walk", "Creative activities",
      "Avoid overstimulation", "Stay warm and grounded"
    ],
    evening: [
      "Light, early dinner", "Calming activities", "Warm bath",
      "Reading or gentle music", "Avoid screens before bed"
    ],
    exercise: ["Gentle yoga", "Walking", "Swimming", "Tai chi", "Light weights"],
    tips: ["Maintain regular schedules", "Keep warm", "Avoid rushing", "Practice grounding"]
  },
  pitta: {
    name: "Pitta",
    color: "pitta", 
    wakeTime: "5:30 - 6:30 AM",
    sleepTime: "10:30 - 11:00 PM", 
    morning: [
      "Cool water", "Coconut oil massage", "Moderate exercise",
      "Cooling breathing (Sheetali)", "Balanced breakfast"
    ],
    afternoon: [
      "Cooling, substantial lunch", "Brief siesta if possible", "Productive work time",
      "Stay cool and hydrated", "Avoid excessive heat"
    ],
    evening: [
      "Moderate dinner", "Relaxing activities", "Cool shower",
      "Calming practices", "Wind down gradually"
    ],
    exercise: ["Swimming", "Cycling", "Moderate jogging", "Yoga", "Team sports"],
    tips: ["Avoid midday heat", "Stay cool", "Manage intensity", "Practice patience"]
  },
  kapha: {
    name: "Kapha",
    color: "kapha",
    wakeTime: "5:00 - 6:00 AM", 
    sleepTime: "10:00 - 11:00 PM",
    morning: [
      "Warm water with honey", "Dry brushing", "Vigorous exercise",
      "Energizing breathing", "Light breakfast or skip"
    ],
    afternoon: [
      "Main meal at lunch", "Stay active", "Stimulating activities", 
      "Avoid afternoon naps", "Keep energy moving"
    ],
    evening: [
      "Very light dinner", "Active pursuits", "Warm, dry practices",
      "Stimulating activities", "Avoid heavy meals"
    ],
    exercise: ["Running", "High-intensity workouts", "Dancing", "Martial arts", "Competitive sports"],
    tips: ["Stay active", "Avoid heaviness", "Seek stimulation", "Maintain movement"]
  }
};

