# NFT | Marketplace

[![GitHub Pages Deploy](https://github.com/akshay-bharadva/nft-marketplace/actions/workflows/deploy.yml/badge.svg)](https://akshay-bharadva.github.io/nft-marketplace/)

A sleek, modern, and fully responsive frontend for a Non-Fungible Token (NFT) marketplace. This project showcases a visually appealing interface for discovering, exploring, and collecting digital artworks. Built with React and TypeScript, it demonstrates best practices for component-based architecture and modern web development.

![image](./src/assets/Main.png)

## ✨ Live Demo & Design

-   **[View Live Demo](https://akshay-bharadva.github.io/nft-marketplace/)**
-   **[View on Figma](https://www.figma.com/community/file/1127975967741861309)**

## 🚀 Features

-   **Fully Responsive Design:** A flawless viewing experience on all devices, from mobile phones to desktops.
-   **Interactive Hero Section:** An engaging hero banner with animated, stacked NFT cards to immediately capture user attention.
-   **Trending Section:** A dedicated section to showcase the most popular NFTs of the week.
-   **Dynamic Explore Marketplace:** A filterable gallery that allows users to browse NFTs by category (e.g., Art, Gaming, Sports).
-   **Reusable Components:** A modular and scalable architecture built with reusable components like `Button` and `Input`.
-   **Modern Styling:** A sophisticated and clean UI crafted with Sass for advanced styling and Bootstrap for a robust grid system.
-   **Email Subscription:** A footer section to capture user interest and sign them up for new drops.

## 🛠️ Tech Stack

-   **Framework:** [React](https://reactjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Sass](https://sass-lang.com/), [Bootstrap 5](https://getbootstrap.com/) (for Grid System)
-   **State Management:** React Hooks (`useState`)
-   **Code Quality:**
    -   **Formatting:** [Prettier](https://prettier.io/)
    -   **Linting:** [ESLint](https://eslint.org/)
    -   **Pre-commit Hooks:** [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged)

## 📦 Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
-   **Node.js** (v16 or later recommended)
-   **npm** or **yarn**

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/akshay-bharadva/nft-marketplace.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd nft-marketplace
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

## 📜 Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run format`

Formats all source code files in the `src` directory using Prettier, ensuring consistent code style across the project.

## 📁 Project Structure

The project follows a standard component-based structure to ensure code is modular and easy to maintain.

```
nft-marketplace/
├── public/               # Static assets and index.html
├── src/
│   ├── assets/           # Images, logos, and other media
│   ├── components/       # Reusable React components (Button, Header, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page-level components (e.g., Landing)
│   ├── styles/           # Global Sass styles, variables, and mixins
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main application component
│   └── index.tsx         # Application entry point
├── package.json          # Project dependencies and scripts
└── README.md             # You are here!
```