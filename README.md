CleanStarterViteTailwind

A reusable full-stack starter template for building responsive websites with React, Vite, Tailwind CSS, and Express.

Designed for mobile-first development, with local network access for testing directly on phones and other devices.

Tech Stack

Frontend

React

Vite

Tailwind CSS v4

JavaScript / JSX

React Compiler

Backend

Node.js

Express

Environment variables via .env

Project Structure

client/ — React, Vite, and Tailwind frontend

client/src/components/ — Reusable components

client/src/pages/ — Page components

server/ — Express backend

server/.env.example — Example environment configuration

Getting Started

1. Clone the repository

git clone https://github.com/kaellji2/CleanStarterViteTailwind.git MyNewProject

cd MyNewProject

Replace MyNewProject with your desired folder name.

2. Install frontend dependencies

cd client

npm install

3. Install backend dependencies

From the project root:

cd server

npm install

Create server/.env based on server/.env.example and configure the required environment variables.

4. Start the frontend

From the client directory:

npm run dev

Vite will start the development server, normally on port 5173.

Mobile Development

This starter supports testing the frontend on another device on the same local network.

In client/vite.config.js, ensure the server configuration includes:

server: { host: "0.0.0.0" }

Connect your computer and phone to the same Wi-Fi network.

Run npm run dev inside client.

Find the Network URL displayed by Vite.

Open that URL in your phone's browser.

Edit your React components in VS Code and save to see live updates.

Note: The development server must remain running on your computer. Use this feature on trusted networks.

Production Build

From the client directory:

npm run build

The production frontend will be generated inside client/dist/.

Using This Starter for a New GitHub Project

Cloning the repository also copies its Git history and its original remote.

Check the remote:

git remote -v

To connect the cloned project to a new GitHub repository:

Create an empty repository on GitHub.

Run git remote set-url origin https://github.com/YOUR_USERNAME/NEW_REPOSITORY.git.

Commit your project changes.

Run git push -u origin main.

If you prefer completely fresh Git history, remove the cloned .git directory and initialize a new repository instead.

Progressive Web App Support

PWA installation, app icons, and service-worker functionality are planned additions to this starter.

Once configured, the application will be able to offer a more app-like experience on supported mobile devices.

License

No license specified.
