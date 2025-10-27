# Rooh AI Service

AI-powered services for Rooh Wellness platform, specializing in Prakriti analysis and personalized wellness recommendations.

## Features

- **Prakriti Analysis**: AI-powered analysis of user responses to determine dominant dosha
- **Personalized Recommendations**: Generate diet, routine, and lifestyle recommendations based on Prakriti
- **Wellness Plans**: Create customized daily, weekly, and seasonal wellness plans

## Installation

```bash
npm install
```

## Running the Service

```bash
npm start
```

The service will start on `http://localhost:4000`

## API Endpoints

### AI Analysis
- `POST /api/analyze-prakriti` - Analyze user responses and determine Prakriti
- `POST /api/generate-plan` - Generate personalized wellness plan

### Health
- `GET /health` - Health check endpoint

## How It Works

1. User completes the Prakriti assessment
2. Responses are sent to AI service for analysis
3. AI calculates dosha scores and determines dominant Prakriti
4. Personalized recommendations are generated based on Ayurvedic principles
5. Wellness plans are customized for the user's Prakriti

## Note

This is a demo implementation. Full AI integration with machine learning models will be implemented in future iterations.

## Environment Variables

Create a `.env` file with:

```
PORT=4000
AI_MODEL=your_model_here
```


