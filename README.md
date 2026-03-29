# Simplifier 🔍

A host machine scanning automation tool built using:
- React (Frontend)
- FastAPI (Backend)
- Nmap (Scanning Engine)

## Features
- Automated port scanning
- Service detection
- Scan result visualisation
- Risk analysis (planned)

## Tech Stack
- React + TailwindCSS
- FastAPI
- Python subprocess (Nmap)

## Setup

### Frontend
cd frontend
npm install
npm run dev

### Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload