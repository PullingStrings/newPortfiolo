# Sibusiso Zwane | Creative Developer

> **Building experiences at the intersection of code, art, and music.**

![Portfolio Screenshot](/public/portfolio-screenshot.png)

## 🌟 Overview

This is my personal portfolio site, built to showcase my work, skills, and creative projects.
It’s designed with **modern, minimal, and bold aesthetics** to leave a strong first impression for recruiters and potential clients.

**Live Site:** [View Portfolio](https://www.titozwane.com/)

---

## 🖥 Tech Stack

- **React + Vite** – Fast and lightweight SPA setup
- **CSS Modules** – Component and page-scoped styling
- **GitHub API export** – Separate build-time project-data workflow
- **GSAP** – Scroll-driven project motion and subtle page transitions
- **Responsive & Mobile-Friendly** – Optimized across devices

---

## 📂 Features

- **Hero Section** – Bold animated background + tagline
- **About Section** – Personal story & unique value proposition
- **Featured work** – Four editorial projects with dedicated case studies
- **Portfolio as resume** – Featured case studies, shipped work and About tell the story
- **Contact Page** – Editorial direct links to email, LinkedIn and GitHub
- **Smooth Navigation** – Mobile dropdown with animation, scroll to sections

---

## Content ownership

- `src/data/homepage.js` owns featured-project IDs, order, routes, homepage summaries, media metadata, motion settings, and the shipped-work archive. Its `featuredProjectsById` lookup supplies the routes and case-study index numbers.
- `src/pages/CaseStudyLanding/CaseStudies.jsx` owns the index's shorter descriptions and project-specific cards. The four components under `src/pages/CaseStudies/` own their detailed editorial stories and layouts. Homepage About copy lives in `Landing.jsx`; contact details live in `Contact.jsx`.
- `src/pages/Landing/Landing.jsx` owns GSAP timelines. CSS Modules beside each page own presentation. Keep the project's existing `className` and `motion` values when editing featured content.
- Put project images and videos under `public/projects/`, then reference them with root-relative paths such as `/projects/dreamzone/cover.png`. Check paths with `docker compose run --rm app yarn content:check`.
- `src/utils/fetchProjects.js` combines GitHub API results with `public/manualProjects.json` and writes `public/projects.json` during `yarn build` or `yarn fetch-projects`. This export is separate from the four featured case studies and is not currently rendered by the site.

---

## 📸 Screenshots

### Hero

![Hero Screenshot](./public/screenshot-hero.png)

### Projects

![Projects Screenshot](./public/screenshot-projects.png)

---

## 🚀 Getting Started

**Start the development server**

```bash
docker compose up --build
```

**Check content and build**

```bash
docker compose run --rm app yarn content:check
docker compose run --rm app yarn lint
docker compose run --rm app yarn vite build
```

`yarn build` also runs the GitHub export before Vite; it may update `public/projects.json` when API access is available.

---

## 📬 Contact Me

📧 Email: [titozwane28@gmail.com](mailto:titozwane28@gmail.com)
🔗 LinkedIn: [linkedin.com/in/titozwane](https://linkedin.com/in/titozwane)
💻 GitHub: [github.com/PullingStrings](https://github.com/PullingStrings)

---

**© 2025 Sibusiso Zwane**
Designed & developed with ❤️
