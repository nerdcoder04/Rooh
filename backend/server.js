// Rooh Wellness Backend Server
// Demo Implementation - Not fully integrated yet

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Database (In production, this would be MongoDB)
const mockUsers = [];
const mockAssessmentResults = [];

// Authentication Endpoints
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  
  // Mock signup logic
  const newUser = {
    id: mockUsers.length + 1,
    name,
    email,
    createdAt: new Date().toISOString()
  };
  
  mockUsers.push(newUser);
  
  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  });
});

app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body;
  
  // Mock signin logic
  const user = mockUsers.find(u => u.email === email);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  res.json({
    message: 'Signed in successfully',
    token: 'mock_jwt_token_' + user.id
  });
});

// Prakriti Assessment Endpoints
app.post('/api/assessments/submit', (req, res) => {
  const { userId, answers, userDetails } = req.body;
  
  // Mock assessment calculation
  const dominantDosha = calculateDominantDosha(answers);
  
  const result = {
    id: mockAssessmentResults.length + 1,
    userId,
    dominantDosha,
    vata: 30,
    pitta: 35,
    kapha: 35,
    timestamp: new Date().toISOString()
  };
  
  mockAssessmentResults.push(result);
  
  res.json(result);
});

app.get('/api/assessments/:userId', (req, res) => {
  const { userId } = req.params;
  
  const results = mockAssessmentResults.filter(r => r.userId === userId);
  
  res.json(results);
});

// Helper Functions
function calculateDominantDosha(answers) {
  // Mock calculation logic
  const doshas = ['vata', 'pitta', 'kapha'];
  return doshas[Math.floor(Math.random() * doshas.length)];
}

// Health Check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Rooh Backend is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Rooh Backend Server running on http://localhost:${PORT}`);
  console.log('📝 Note: This is a demo implementation');
});


