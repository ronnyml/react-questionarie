# React Questionarie

A multi-step questionnaire wizard built with React and TypeScript. It walks a
user through personal, provider, and contact information, validating each
step before letting them continue and collecting the responses in a shared
form context.

![React Questionarie screenshot](docs/screenshot.png)

Live demo: [react-questionarie.vercel.app](https://react-questionarie.vercel.app/)

## Tech stack

- [React 19](https://react.dev/) + TypeScript
- [Vite 8](https://vite.dev/) for dev server and production builds
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) for tests
- [react-select](https://react-select.com/) for the searchable multi-select language field
- ESLint (flat config) with `typescript-eslint` and `eslint-plugin-react`

## Getting started

Requires Node.js 22.12+ (see `engines` in `package.json`).

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (defaults to
[http://localhost:5173](http://localhost:5173)) to view the app. It hot-reloads
as you edit files under `src`.

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` / `npm start` | Start the Vite dev server |
| `npm run build` | Type-check and build a production bundle into `build/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint over the project |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |

## Project structure

```
src/
  components/       Wizard shell, sticky navigation bar, and step forms
  context/          Shared form state (AppContext)
  data/             Static option lists and step definitions
  styles/           CSS and react-select style configs
  types/            Shared TypeScript types
  tests/            Vitest + Testing Library tests
  utils/            Validators and shared constants
```

Imports use absolute paths rooted at `src` (e.g. `import { stepsData } from
"data/steps"`), resolved via `tsconfig.json`'s `baseUrl` and Vite's native
tsconfig-paths support.
