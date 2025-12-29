
# 🎯 What Is My Real Rank

A web application that calculates a Valorant player’s real MMR and maps it to the actual competitive rank, using real match data from a public API.

The goal of this project is to demonstrate clean architecture, modern Next.js practices, and real-world API integration, not just UI rendering.

## 🚀 Live Demo

🔗 Live Website:
👉 https://whatismyrealrank.vercel.app/

## 🧠 Motivation

Rank badges in competitive games don’t always reflect a player’s real skill level.
This project was built to:

Fetch real MMR data

Translate MMR into a more accurate rank

Provide a clean, simple user experience

Serve as a production-ready portfolio project

## 🧩 Features

🔍 Search Valorant players by Region + Riot ID + Tag

📊 Fetch real MMR from an external API

🧠 Translate MMR into competitive rank

⚡ API Routes with server-side logic

🧼 Clean architecture (services, domain logic, routes)

🌐 Deployed and running in production

## 🏗️ Tech Stack
### Frontend

Next.js 16 (App Router)

React 19

TypeScript

Tailwind CSS

shadcn/ui

lucide-react

### Backend

Next.js API Routes

Server-side services

Environment variables (.env)

### Dev & Tooling

Git & GitHub (feature branches + merge flow)

Vercel (deployment)

Docker (local testing)

dotenv

## 🧠 Architecture Overview

The project follows a separation of concerns approach:
```
src/
 ├── app/
 │   ├── api/
 │   │   └── player/route.ts   # API endpoint
 │   ├── page.tsx              # Landing page
 │   └── results/page.tsx      # Results page
 │
 ├── lib/
 │   ├── mmr/
 │   │   └── mmrTranslator.ts  # MMR → Rank logic
 │   └── player/
 │       ├── playerServices.ts # API communication
 │       └── types.ts          # Domain types
 │
 └── components/
     └── ui/                   # Reusable UI components
```

### Why this structure?

- Makes the code scalable

- Keeps business logic isolated

- Easy to test, extend, and refactor

# 🔐 Environment Variables

This project uses environment variables to protect sensitive data.

Create a .env file:

HENRIK_API_BASE_URL=https://api.henrikdev.xyz

HENRIK_API_KEY=your_api_key_here


> ⚠️ Never commit your API key.

---

# 🧪 Local Development

Clone the repository:

git clone https://github.com/w-taveira/whatismyrealrank.git
cd what-is-my-real-rank


Install dependencies:

npm install


Run the project:

npm run dev


Build and test production:

npm run build
npm run start

---

## 🧠 What This Project Demonstrates

- Real-world API consumption

- Secure handling of environment variables

- Clean architecture mindset

- Modern Next.js App Router usage

- Feature-based Git workflow

- Production deployment with Vercel

## 📌 Future Improvements

- Cache API responses

- Add loading & error states

- Improve UI responsiveness

- Add player history visualization

- Rate-limit API calls
---

## 👤 Author

**Wellington Oliveira Guedes Taveira**

- Frontend & Fullstack Developer

- Focused on clean code, performance and real-world systems

🔗 GitHub: https://github.com/w-taveira

🔗 LinkedIn: https://linkedin.com/in/w-taveira

---

## 🏁 Final Note

This project is not about flashy UI — it’s about engineering mindset, structure, and delivery.
