# Food API Project

A full-stack application that allows users to search for recipes and get detailed information about them using the Spoonacular API.

## Project Structure

```
food-api-project/
├── backend/             # Backend server
├── frontend/          # Frontend application
├── package.json     # Root package.json for managing both client and server
└── README.md        # This file
```

## Prerequisites

- Node.js (v14 or higher)
- Spoonacular API key (get it from https://spoonacular.com/food-api)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/soniikot/food-project
cd food-project
```

2. Install dependencies for all parts of the application:

```bash
npm install
```

3. Create a `.env` file in the `api` directory with your Spoonacular API key:

```
API_KEY=your_api_key_here
```

## Running the Application

To run both the client and server concurrently:

```bash
npm run dev
```

Or run them separately:

  Server:  "dev:backend": "cd backend && npm run dev",
  Client  "dev:frontend": "cd frontend && npm run dev",

## Technologies Used

- Frontend: React.js
- Styling: CSS Modules
- Backend: Node.js, Express
- API: Spoonacular Food API
- Package Management: npm
- Database: sqllite3
- Testing: Vitest, React Testing Library
