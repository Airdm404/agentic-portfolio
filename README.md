# agentic-portfolio

AI-powered portfolio website showcasing projects, experience, and a streaming recruiter-facing chat assistant.

## Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: NestJS, TypeScript, OpenAI, AI SDK

## Local development

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run start:dev
```

### Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

## Deployment

- Deploy the backend as a Node web service with `npm install && npm run build` and start command `npm run start:prod`.
- Deploy the frontend as a static Vite app with build command `npm install && npm run build` and output directory `dist`.
- Set `VITE_API_BASE_URL` on the frontend to your backend URL.
- Set `FRONTEND_URL` on the backend to your frontend URL.
