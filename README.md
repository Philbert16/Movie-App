# Movie App

A modern, responsive movie discovery application built with **React 19** and **Vite**. Search millions of titles from [The Movie Database (TMDB)](https://www.themoviedb.org/) and browse the most popular films in real time.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Features

- **Popular movies** — loads trending titles on first visit via TMDB's `discover` endpoint.
- **Instant search** — debounced (500 ms) queries as you type, powered by `react-use`.
- **Rich movie cards** — poster, title, rating, original language and release year.
- **Graceful states** — animated loading spinner, empty/error messaging and a fallback poster for missing artwork.
- **Responsive UI** — utility-first styling with Tailwind CSS v4 and Flowbite React components.

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4, Flowbite React |
| Utilities | `react-use` (debounce), `appwrite` |
| Data source | TMDB REST API v3 |
| Linting | ESLint 10 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- A free [TMDB](https://www.themoviedb.org/signup) account and API key

### Installation

```bash
# Clone the repository
git clone https://github.com/Philbert16/Movie-App.git
cd Movie-App

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and add your credentials:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
```

> Get a TMDB API key from **Account Settings → API**. The app expects a **v4 Bearer token**.

### Run Locally

```bash
npm run dev
```

Open the printed URL (default `http://localhost:5173`).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```
Movie-App/
├── public/                 # Static assets (hero banner, icons, posters)
├── src/
│   ├── assets/             # Bundled images
│   ├── components/
│   │   ├── MovieCard.jsx   # Single movie tile
│   │   ├── Search.jsx      # Controlled search input
│   │   └── Spinner.jsx     # Loading indicator
│   ├── App.jsx             # Root component & TMDB fetching logic
│   ├── index.css           # Tailwind entry & global styles
│   └── main.jsx            # React entry point
├── index.html
├── vite.config.js
└── package.json
```

## How It Works

`App.jsx` holds the search term, movie list and loading state. Input changes are debounced with `useDebounce`, then `fetchMovie()` calls either:

- `GET /search/movie?query=...` when a search term is present, or
- `GET /discover/movie?sort_by=popularity.desc` for the default popular list.

Results are rendered through `MovieCard`, with posters served from TMDB's image CDN (`image.tmdb.org`).

## Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). This product uses the TMDB API but is not endorsed or certified by TMDB.
- UI built with [Tailwind CSS](https://tailwindcss.com/) and [Flowbite React](https://flowbite-react.com/).

## License

This project is licensed under the MIT License.
