# 🌷 Science Kid Fair - Trivia Game for Kids 

A simple, kid-friendly trivia game built with React and Vite. This project provides multiple themed question sets (animals, space, weather, math, and more) suitable for classroom demos or science fair presentations.

**Key goals:** lightweight, accessible UI for children, easy-to-edit question banks.

**Features**
- **Multiple themes:** several question categories in `src/constants/`.
- **Grade-level math sets:** math questions separated by grade in `src/constants/math/`.
- **Simple React UI:** components in `src/components/` (e.g., `TriviaApp.jsx`, `Dashboard.jsx`).
- **Fast dev server:** powered by Vite for instant HMR.

## Getting Started

Prerequisites: Node.js (16+ recommended) and npm or yarn.

Install dependencies:

```bash
npm install
# or
yarn
```

Start the dev server:

```bash
npm run dev
# or
yarn dev
```

Build for production:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure (important files)

- `index.html`, `vite.config.js` — Vite setup.
- `src/main.jsx` — app entry.
- `src/App.jsx` — top-level app component.
- `src/components/TriviaApp.jsx` — main trivia UI and game logic.
- `src/components/Dashboard.jsx` — score and navigation UI.
- `src/constants/` — question banks and themes (e.g., `animals.js`, `space.js`, `weather.js`, `math/`).

If you want to add or edit questions, open the relevant file in `src/constants/` and follow the existing object/array structure.

## Adding Questions

Question files use plain JavaScript arrays/objects. Keep the same shape as existing files (question text, possible answers, correct answer). For math grade files see `src/constants/math/mathKindergarten.js` and `mathGrade1.js` for examples.

## Customization

- Styles: `src/index.css` and `src/App.css`.
- Assets: `src/assets/` for images and icons.

## Deployment

The app is a static site after build; you can deploy to GitHub Pages, Netlify, Vercel, or any static host. Build with `npm run build` and upload the `dist/` folder.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo and create a feature branch.
2. Add/update question files or UI components.
3. Open a pull request with a brief description of changes.

Contact for merge permissions:

- Email: myluwork004@gmail.com
- Discord: Kinoko520

Please feel free to contact me to gain the permission to merge and modify the code. Or the owner of the repo organization 

---
## Author

- Name: My Lu
- Email: myluwork004@gmail.com
- Portfolio: https://www.mylu004.com/


## License & Credits

This project is provided as-is for educational use. Feel free to reuse or adapt the question content for classrooms or community events.

---

