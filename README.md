# Portfolio Sami

A personal developer portfolio built with React and Vite to showcase profile information, skills, experience, and project work.

## Live Demo

- [Portfolio Website](https://portfolio-sami-seven.vercel.app/)

## Features

- Responsive single-page portfolio layout
- Hero section with social links and resume access
- About and professional background sections
- Skills section with categorized tech stack cards
- Projects section with detailed project metadata from JSON
- Contact section with direct communication links
- Smooth animations and interactive UI components

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- daisyUI
- Framer Motion
- Swiper
- React Icons

## Project Structure

```txt
src/
  components/       Reusable UI sections (Hero, About, Skills, Projects, etc.)
  data/             JSON content sources (profile, projects, skills, experience, contact)
  assets/           Local static assets
public/             Public static files
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Content Management

All portfolio content is data-driven through JSON files in `src/data/`:

- `profile.json` for personal and hero content
- `skills.json` for categorized skills
- `projects.json` for project cards and details
- `experience.json` for education/work timeline
- `contact.json` for contact links and footer details

## Deployment

This project is configured for Vercel with Vite output:

- Framework: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: project root (`.`), not `dist`

If deploying on Vercel, make sure Root Directory is not set to `dist`.

## License

This project is currently unlicensed. Add a license if you want to make reuse terms explicit.
