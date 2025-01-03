# Todo App

## 📖 Project Overview  
This project is a simple React app developed with **TypeScript** and **Vite**. It uses **Vite** as the build tool for fast development with Hot Module Replacement (HMR), and integrates **TypeScript** for strong typing.

## 🖼️ Project Screenshot:

![Project Screenshot](/public/image/Todo.png)

## ⚙️ Tools and Frameworks Used:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A strongly typed superset of JavaScript that enhances development with better tooling and code reliability.
- [Vite](https://vitejs.dev/): A next-generation build tool that provides fast bundling, HMR, and minimal configuration.

## 🚀 Features:

- Fast development experience with **Vite**'s Hot Module Replacement (HMR).
- Strongly typed with **TypeScript** for better code quality and error detection.
- Minimal and efficient setup with modern tools.

## ESLint Configuration:

For production applications, it's recommended to use type-aware lint rules in your **ESLint** configuration:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
