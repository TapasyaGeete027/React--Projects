# Job Cards (React + Vite)

A small React project that displays job listings as clean, reusable cards. Each card shows the company logo, how long ago the job was posted, the role, tags (job type and level), salary, location, and **Save** / **Apply Now** buttons.

> This is a learning project. I built it by following a React tutorial from the **Sheryians Coding School** YouTube channel. The original code and concept belong to the instructor; I recreated it for practice.

## Features

- Reusable `Card` component driven by props
- Job data stored as an array of objects and rendered with `.map()`
- Icons from [lucide-react](https://lucide.dev)
- Fast dev server and build with Vite

## Tech Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [lucide-react](https://lucide.dev)
- ESLint

## Project Structure

```
cards_project-01/
├── public/
├── src/
│   ├── components/
│   │   └── card.jsx     # Reusable job card component
│   ├── App.jsx          # Job data + renders a Card for each job
│   ├── App.css
│   ├── index.css
│   └── main.jsx         # App entry point
├── index.html
└── package.json
```

## Getting Started

Make sure you have [Node.js](https://nodejs.org) installed, then:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git

# 2. Go into the project folder
cd YOUR-REPO/cards_project-01

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | Starts the development server    |
| `npm run build`   | Creates a production build       |
| `npm run preview` | Previews the production build    |
| `npm run lint`    | Runs ESLint                      |

## What I Learned

- Creating and composing React components
- Passing data with props
- Rendering lists with `map()`
- Styling components with CSS



