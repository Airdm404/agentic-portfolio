# Backend

NestJS API for the portfolio site and AI chat experience.

## Environment

Copy `.env.example` to `.env` and set:

```bash
OPENAI_API_KEY=...
PORT=3000
FRONTEND_URL=http://localhost:5173
```

For deployed environments, set `FRONTEND_URL` to the deployed frontend origin. Multiple origins are supported as a comma-separated list.

## Commands

```bash
npm install
npm run start:dev
npm run build
npm test
```

## Endpoints

- `GET /` returns API status metadata.
- `GET /health` returns a simple health payload.
- `GET /profile` returns the structured portfolio profile.
- `POST /chat` streams chat responses.
