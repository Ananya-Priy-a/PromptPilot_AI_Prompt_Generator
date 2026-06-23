# PromptPilot

## Overview

PromptPilot is a React and Flask based AI chatbot application. Users can enter prompts through a React frontend, which sends requests to a Flask backend. The backend communicates with OpenRouter and returns AI-generated responses.

## Technologies Used

Frontend: React + Vite
Backend: Flask
AI Provider: OpenRouter
Model: openai/gpt-4o-mini

## Project Structure

frontend/

* React frontend

backend/

* Flask backend
* API integration
* Environment variables

## Setup Instructions

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Environment Variables

Create a `.env` file:

OPENROUTER_API_KEY=your_api_key

## Features

* Prompt submission
* AI response generation
* Loading indicator
* Empty prompt validation
* API error handling
* Secure API key storage
