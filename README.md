# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

##  Libraries & Dependencies

This project is built using modern React tools and lightweight libraries to keep the codebase clean and scalable.

### Core Libraries
- **react**  
  Used for building the user interface using functional components and hooks.

- **react-dom**  
  Responsible for rendering React components to the DOM.

### UI & UX
- **react-icons**  
  Used to add lightweight and scalable icons for actions like edit, delete, save, and cancel.

- **react-toastify**  
  Used for showing user-friendly notifications such as task added, updated, or deleted.

### Date Handling
- **date-fns**  
  Used for date comparison and utilities like identifying overdue and today’s tasks.

### State Management
- **zustand**   
  Lightweight state management library planned for scaling global state when the app grows.

### Tooling
- **vite**  
  Used as the build tool for faster development and optimized production builds.

