# CodeFolio: A Personal Portfolio Website

This is a personal portfolio website built to showcase skills, projects, and achievements. It is a modern, responsive, and performant application built with a powerful tech stack. This project was bootstrapped with [Firebase Studio](https://firebase.google.com/docs/studio).

## ✨ Features

- **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **AI-Powered Resume Analysis**: Uses Genkit to extract key skills from resume text, providing instant feedback.
- **Dynamic Content**: Easily update projects, skills, and personal information in a centralized data file.
- **Modern UI**: Built with ShadCN UI components and styled with Tailwind CSS for a clean, professional look.

## 🚀 Tech Stack

This project is built using the following technologies:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 20 or later) and a package manager like `npm` or `yarn` installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add the necessary environment variables. For Genkit and Google AI, you will need a `GEMINI_API_KEY`.
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

### Running the Application

1.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Next.js development server, typically on [http://localhost:9002](http://localhost:9002).

2.  **Run the Genkit development server (for AI features):**
    In a separate terminal, run the following command to start the Genkit development UI.
    ```bash
    npm run genkit:watch
    ```
    This allows you to inspect and test your AI flows at [http://localhost:4000](http://localhost:4000).

## 📂 Project Structure

- **`src/app`**: Contains the main pages and routes of the application, following the Next.js App Router structure.
- **`src/components`**: Reusable React components used throughout the application, including UI components from ShadCN.
- **`src/lib`**: Utility functions and data files (like `data.ts` for portfolio content).
- **`src/ai`**: Genkit-related code, including AI flows (`/flows`) and Genkit configuration.
- **`public`**: Static assets like images and fonts.
- **`src/styles`**: Global CSS styles and Tailwind CSS configuration.
