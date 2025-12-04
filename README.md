# nagaprathap-chittinenis-team-library

A web application for managing and organizing team resources and assets, focusing on asset management, resource organization, collaboration, search, and user authentication.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/MzAqSqKKEuLzEafQMijRot/Desktop-sign-up-and-login-pages-by-EditorM--Community-?node-id=0-1&t=WcFhNwHYoj9Uh9xY-1))

## Project Structure

Integrated full-stack application with frontend and backend in single codebase.

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)

### Setup Instructions

1. **Environment Variables**
   ```bash
   # Copy environment template
   cp .env.example .env
   # Edit .env and add your actual values
   ```

2. **Frontend Setup**
   ```bash
   npm install
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   pip install -r requirements.txt
   # Run migrations (if applicable)
   # Start server
   uvicorn main:app --reload
   # or
   python main.py
   ```

### Environment Variables

See `.env.example` for all required environment variables.

## Features

- Asset management
- Resource organization
- Collaboration
- Search
- User authentication

## API Endpoints

- `POST /api/users` - Create a new user account.
- `POST /api/login` - Log in to the application.
- `POST /api/assets` - Upload a new asset.
- `GET /api/assets` - Retrieve a list of all assets.
- `GET /api/assets/:id` - Retrieve a single asset by ID.
- `PUT /api/assets/:id` - Update an existing asset.
- `DELETE /api/assets/:id` - Delete an existing asset.

## License

MIT
