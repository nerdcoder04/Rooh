# Rooh Backend API

This is the backend server for Rooh Wellness platform.

## Features

- User Authentication (Sign Up / Sign In)
- Prakriti Assessment Processing
- Personalized Recommendations API
- User Profile Management

## Installation

```bash
npm install
```

## Running the Server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user
- `POST /api/auth/signin` - Sign in user

### Assessments
- `POST /api/assessments/submit` - Submit prakriti assessment
- `GET /api/assessments/:userId` - Get user's assessment history

### Health
- `GET /health` - Health check endpoint

## Note

This is a demo implementation. Full integration with database and authentication will be implemented in future iterations.

## Environment Variables

Create a `.env` file with:

```
PORT=3000
NODE_ENV=development
```


