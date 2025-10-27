// Rooh Wellness AI Services
// Demo Implementation - AI analysis for Prakriti assessment

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock AI Service for Prakriti Analysis
class PrakritiAI {
  constructor() {
    this.model = 'mock-prakriti-model-v1';
  }

  // Analyze user responses and determine Prakriti
  analyzeResponses(answers, userDetails) {
    console.log(`🤖 AI Analyzing ${answers.length} responses...`);
    
    // Mock AI analysis
    const doshaScores = this.calculateDoshaScores(answers);
    const dominant = this.getDominantDosha(doshaScores);
    
    return {
      dominant,
      vata: doshaScores.vata,
      pitta: doshaScores.pitta,
      kapha: doshaScores.kapha,
      confidence: 0.85,
      analysis: this.generateAnalysis(dominant, doshaScores),
      recommendations: this.generateRecommendations(dominant)
    };
  }

  calculateDoshaScores(answers) {
    // Mock calculation based on answer patterns
    return {
      vata: Math.floor(Math.random() * 30) + 20,
      pitta: Math.floor(Math.random() * 30) + 25,
      kapha: Math.floor(Math.random() * 30) + 25
    };
  }

  getDominantDosha(scores) {
    const max = Math.max(scores.vata, scores.pitta, scores.kapha);
    if (max === scores.vata) return 'vata';
    if (max === scores.pitta) return 'pitta';
    return 'kapha';
  }

  generateAnalysis(dosha, scores) {
    const analyses = {
      vata: `Your Prakriti is primarily Vata-dominant. You show characteristics of creativity, quick thinking, and movement. You may benefit from grounding practices and routine.`,
      pitta: `Your Prakriti is primarily Pitta-dominant. You show characteristics of intelligence, transformation, and intensity. You may benefit from cooling practices and moderation.`,
      kapha: `Your Prakriti is primarily Kapha-dominant. You show characteristics of stability, strength, and calmness. You may benefit from energizing practices and stimulation.`
    };
    return analyses[dosha] || 'Analysis pending...';
  }

  generateRecommendations(dosha) {
    const recommendations = {
      vata: {
        diet: ['Warm, cooked foods', 'Nuts and seeds', 'Dairy products'],
        routine: ['Regular sleep schedule', 'Meditation', 'Yoga'],
        lifestyle: ['Stay warm', 'Establish routine', 'Avoid excessive travel']
      },
      pitta: {
        diet: ['Cooling foods', 'Fresh vegetables', 'Avoid spicy foods'],
        routine: ['Early morning routine', 'Meditation', 'Swimming'],
        lifestyle: ['Avoid heat', 'Regular breaks', 'Time in nature']
      },
      kapha: {
        diet: ['Light, warm foods', 'Spices', 'Minimal dairy'],
        routine: ['Early rising', 'Exercise', 'Active lifestyle'],
        lifestyle: ['Keep active', 'Avoid lethargy', 'Regular exercise']
      }
    };
    return recommendations[dosha] || {};
  }

  // Generate personalized wellness plan
  generateWellnessPlan(dominantDosha, userDetails) {
    console.log(`📋 Generating wellness plan for ${dominantDosha} dosha...`);
    
    return {
      dailySchedule: this.getDailySchedule(dominantDosha),
      weeklyPlan: this.getWeeklyPlan(dominantDosha),
      seasonalRecommendations: this.getSeasonalRecommendations(dominantDosha)
    };
  }

  getDailySchedule(dosha) {
    return {
      vata: {
        '6:00 AM': 'Wake up, oil massage',
        '7:00 AM': 'Yoga/Meditation',
        '8:00 AM': 'Warm breakfast',
        '12:00 PM': 'Lunch',
        '6:00 PM': 'Light dinner',
        '9:00 PM': 'Wind down, prepare for sleep'
      },
      pitta: {
        '5:30 AM': 'Wake up',
        '6:00 AM': 'Cool water, light exercise',
        '7:00 AM': 'Breakfast',
        '12:00 PM': 'Main meal',
        '6:30 PM': 'Light dinner',
        '10:00 PM': 'Sleep'
      },
      kapha: {
        '5:00 AM': 'Wake up',
        '6:00 AM': 'Exercise (vigorous)',
        '7:30 AM': 'Light breakfast',
        '11:00 AM': 'Main meal',
        '7:00 PM': 'Light dinner',
        '10:00 PM': 'Sleep'
      }
    }[dosha] || {};
  }

  getWeeklyPlan(dosha) {
    return {
      vata: ['Monday: Restorative yoga', 'Wednesday: Meditation', 'Friday: Walking'],
      pitta: ['Monday: Swimming', 'Wednesday: Yoga', 'Friday: Meditation'],
      kapha: ['Monday: Running', 'Wednesday: Gym', 'Friday: Sports']
    }[dosha] || [];
  }

  getSeasonalRecommendations(dosha) {
    return {
      vata: 'Focus on grounding in autumn/winter',
      pitta: 'Stay cool and hydrated in summer',
      kapha: 'Stay active and warm in spring'
    }[dosha] || 'Follow seasonal rhythms';
  }
}

// Initialize AI service
const aiService = new PrakritiAI();

// API Endpoints
app.post('/api/analyze-prakriti', (req, res) => {
  const { answers, userDetails } = req.body;
  
  console.log('📊 Received prakriti assessment for AI analysis');
  
  const result = aiService.analyzeResponses(answers, userDetails);
  
  res.json({
    success: true,
    result,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/generate-plan', (req, res) => {
  const { dominantDosha, userDetails } = req.body;
  
  console.log('📋 Generating personalized wellness plan');
  
  const plan = aiService.generateWellnessPlan(dominantDosha, userDetails);
  
  res.json({
    success: true,
    plan,
    timestamp: new Date().toISOString()
  });
});

// Health Check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Rooh AI Service is running',
    model: aiService.model,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🤖 Rooh AI Service running on http://localhost:${PORT}`);
  console.log('📝 Note: This is a demo implementation');
});


