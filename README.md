# Hackathon Bots Gone Wild.

Simple full-stack starter repo for a hackathon project:
- `backend/`: Flask API that generates demo dashboard data.
- `frontend/`: TypeScript app that fetches and renders API data.
- `.github/workflows/ci.yml`: CI pipeline with dependent compile/test jobs.

## Backend (Flask)

### Run
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

The API will be available at `http://localhost:5000`:
- `GET /health`
- `GET /api/data`

### Test
```bash
cd backend
pytest
```

## Frontend (TypeScript)

### Install + Compile
```bash
cd frontend
npm install
npm run build
```

### Test
```bash
cd frontend
npm test
```

The frontend expects backend data at `/api/data`.
