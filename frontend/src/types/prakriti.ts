export type DoshaType = 'vata' | 'pitta' | 'kapha';

export interface Question {
  id: string;
  category: 'physical' | 'mental' | 'habits' | 'environmental';
  text: string;
  options: {
    text: string;
    dosha: DoshaType;
    weight: number;
  }[];
}

export interface AssessmentResult {
  vata: number;
  pitta: number;
  kapha: number;
  dominant: DoshaType;
  secondary?: DoshaType;
  percentage: {
    vata: number;
    pitta: number;
    kapha: number;
  };
}

export interface UserProfile {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  weight?: number;
  height?: number;
  healthConditions?: string[];
  lifestyle: 'sedentary' | 'moderate' | 'active';
  stressLevel: 'low' | 'medium' | 'high';
}

export interface DietRecommendation {
  dosha: DoshaType;
  favorableFoods: string[];
  foodsToAvoid: string[];
  mealTiming: string[];
  cookingTips: string[];
  beverages: string[];
}

export interface DailyRoutine {
  dosha: DoshaType;
  wakeUpTime: string;
  morningRoutine: string[];
  exerciseRecommendations: string[];
  workBreaks: string[];
  eveningRoutine: string[];
  sleepTime: string;
  yogaPractices: string[];
}