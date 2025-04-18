# ragemp-ts

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![SWC](https://img.shields.io/badge/SWC-orange?logo=swc&logoColor=white&style=for-the-badge)
<a href="https://rollupjs.org/"><img src="https://rollupjs.org/rollup-logo.svg" width="20" /></a>

[![CI](https://github.com/pimpmfl/ragemp-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/pimpmfl/ragemp-ts/actions/workflows/ci.yml)


> A modern RAGE Multiplayer boilerplate built for developers who want **type-safe**, **modular**, and **maintainable** RAGE Multiplayer projects — with full support for **TypeScript**, **PostgreSQL**, and **Vue-based CEF**.

---
test
## 📚 Table of Contents

- [🎯 About This Project](#-about-this-project)
- [⚡ Quickstart](#-quickstart)
- [🧱 Project Structure](#-project-structure)
- [🧰 Build Configuration (Rollup + SWC)](#-build-configuration-rollup--swc)
- [🚀 Setting Up Your RAGE Multiplayer Server (Windows)](#-setting-up-your-rage-multiplayer-server-windows)
- [⚙️ Setting Up TypeScript for RAGE Multiplayer](#️-setting-up-typescript-for-rage-multiplayer)

---

## 🎯 About This Project

This repository is designed to help **beginners and intermediate developers** set up and build their own RAGE Multiplayer servers with ease. It provides a clean, scalable starting point for both client-side and server-side scripting using **TypeScript**, and comes with best practices for organizing your codebase.

Whether you're just getting started with RAGE MP or looking for a modern setup that integrates a database and UI framework, this project aims to provide you with:

- ✅ A fully working **TypeScript** environment for both client and server
- 🧩 Modular folder structure with examples
- 📦 Free and open-source **RAGE MP resources** to learn from and build upon
- 🛢️ Integration-ready setup for **PostgreSQL** (for storing persistent data)
- 💻 Support for **Vue.js** to build dynamic and maintainable **CEF UIs**

Stay tuned — this project will continue to evolve with more features, examples, and tools to make your RAGE MP development experience smoother.

---

## ⚡ Quickstart

Before starting, make sure you have the following:

- ✅ [Git](https://git-scm.com/downloads) - required to clone the repository
- ✅ [Node.js (v22 recommended)](https://nodejs.org/en)  
  It's important to use Node v22 for compatibility with this project. If you're using a version manager like [nvm](https://github.com/nvm-sh/nvm), you can automatically switch to the required Node version by running:

  ```bash
  nvm use
  ```

  This will use the version specified in the [`.nvmrc`](https://github.com/pimpmfl/ragemp-ts/blob/main/.nvmrc) file located at the root of the project.

  > ⚠️ **Note: RAGE MP currently supports Node v14, so make sure you avoid using features from Node 15 and above when working with the RAGE MP server. For the build steps, linting, and plugins, we still recommend using Node v22. The build target is set to `es2020` to ensure compatibility with both versions.**

### Steps to Get Started

1. Clone the repository:

```bash
git clone https://github.com/pimpmfl/ragemp-ts.git
```

2. Navigate into the project directory:

```bash
cd ragemp-ts
```

3. Install the dependencies listed in `package.json`:

```bash
npm install
```

4. Create your environment file:

```bash
cp .env.example .env
```

> 💡 **You can edit `.env` to customize any settings before running the build.**

5. Build the project:

```bash
npm run build
```

✅ The project has been built successfully! You're now ready to start development.

---

# 🚀 Setting Up Your RAGE Multiplayer Server (Windows)

> This guide will walk you through setting up a local **RAGE Multiplayer server** on Windows so you can start developing your own GTA V multiplayer experience.

---

## 🧭 Section Outline (Server Setup)

- [✅ Prerequisites](#-prerequisites)
- [🛠️ Server Setup Instructions](#️-server-setup-instructions)
  - [1. Install the RAGE Multiplayer Client](#1-install-the-rage-multiplayer-client)
  - [2. Modify the Client Configuration](#2-modify-the-client-configuration)
  - [3. Run the Updater](#3-run-the-updater)
  - [4. Move the Server Files](#4-move-the-server-files)
  - [5. Revert the Configuration Change](#5-revert-the-configuration-change)
  - [6. Restore the RAGE MP Client](#6-restore-the-rage-mp-client)
- [✅ All Done!](#-all-done)
- [References](#references)

---

## ✅ Prerequisites

Before you begin, make sure you have the following installed:

- ✅ [Microsoft Visual C++ Redistributable (latest)](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version)
- ✅ [RAGE Multiplayer Client](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe)

---

## 🛠️ Server Setup Instructions

### 1. Install the RAGE Multiplayer Client

Download and install the [RAGE Multiplayer Client](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

---

### 2. Modify the Client Configuration

- Navigate to the RAGE MP installation directory.
- Open the `config.xml` file.
- Change the update channel from `prerelease` to `prerelease_server`.

**Original:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<channel>prerelease</channel>
```

**Updated:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<channel>prerelease_server</channel>
```

---

### 3. Run the Updater

- Run `updater.exe` in the same directory where you edited `config.xml`.
- This will download server-related files and create a new folder called `server-files` inside the RAGE MP directory.

---

### 4. Move the Server Files

- Move the entire `server-files` folder _out_ of the RAGE MP directory to a new location of your choice (e.g., `C:\RAGEMP-Server`).
- The `server-files` directory should contain:
  - `bin/`
  - `dotnet/`
  - `BugTrap-x64.dll`
  - `linux_x64.tar.gz`
  - `ragemp-server.exe`

---

### 5. Revert the Configuration Change

- Go back to the RAGE MP installation directory.
- Open `config.xml` again.
- Change the channel value back from `prerelease_server` to `prerelease`.

**Before:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<channel>prerelease_server</channel>
```

**After:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<channel>prerelease</channel>
```

---

### 6. Restore the RAGE MP Client

- Run `updater.exe` once again in the RAGE MP directory.
- This will revert your RAGE MP client back to the regular `prerelease` version, so you can use it to join servers normally.

---

## ✅ All Done!

Your RAGE MP server files are now ready to use! 🎉

You can now:

- Navigate to your `server-files` directory
- Launch the server by running:

```bash
ragemp-server.exe
```

- Connect locally using the default IP: `127.0.0.1:22005`

---

## References

- [RAGE MP - Getting Started](https://wiki.rage.mp/wiki/Getting_Started_with_Server)

---

# ⚙️ Setting Up TypeScript for RAGE Multiplayer

> This guide helps you set up TypeScript for your RAGE MP server and client code in a structured and beginner-friendly way.

---

## 🧭 Section Outline (TypeScript Setup)

- [✅ Prerequisites](#-prerequisites-1)
- [🧱 Project Structure](#-project-structure)
- [🛠️ Step-by-Step Setup](#️-step-by-step-setup)
  - [1. Initialize a Node.js project](#1-initialize-a-nodejs-project)
  - [2. Install TypeScript](#2-install-typescript)
  - [3. Verify the Installation](#3-verify-the-installation)
  - [4. Install RAGE MP Type Definitions](#4-install-rage-mp-type-definitions)
  - [5. Configure TypeScript](#5-configure-typescript)
- [🧪 Test the Setup](#-test-the-setup)
  - [1. Create a Test Client Script](#1-create-a-test-client-script)
  - [2. Import It in the Entry Point](#2-import-it-in-the-entry-point)
  - [3. Repeat for Server-Side Code](#3-repeat-for-server-side-code)
- [🧰 Build Configuration (Rollup + SWC)](#-build-configuration-rollup--swc)
  - [Install Dev Dependencies](#install-dev-dependencies)
  - [Add Build Scripts in `package.json`](#add-build-scripts-in-packagejson)
  - [Create a `.env` File](#create-a-env-file)
- [🚀 Building the Project](#-building-the-project)
- [🏁 Done!](#-done)
- [References](#references-1)

---

## ✅ Prerequisites

Make sure you have the following installed:

- ✅ [🚀 Setting Up Your RAGE Multiplayer Server (Windows)](#-setting-up-your-rage-multiplayer-server-windows)
- ✅ [Node.js (v22 recommended for this project)](https://nodejs.org/en)
- ✅ Basic understanding of how Node.js and npm work

---

## 🧱 Project Structure

In this project, we use the following architecture:

```
project-root/
├── dist/ # Compiled output (auto-generated after build)
│
├── build-scripts/ # Contains custom build scripts
│ └── rollup.config.mjs # Main Rollup config file used for building the project
│
├── src/ # Source code (TypeScript)
│ ├── client/ # Client-side logic (executed on the player’s machine)
│ │ ├── hello-world/ # Example module to test setup
│ │ │ └── hello-world.ts # Outputs a message when a player connects
│ │ ├── index.ts # Entry point for the client build (imports all client code)
│ │ └── tsconfig.json # TypeScript config specifically for client-side code
│ │
│ ├── server/ # Server-side logic (runs on the game server)
│ │ ├── hello-world/ # Example module to test setup
│ │ │ └── hello-world.ts # Outputs a message when a player connects
│ │ ├── index.ts # Entry point for the server build (imports all server code)
│ │ └── tsconfig.json # TypeScript config specifically for server-side code
│
├── .env # Environment variables used by the build system (e.g., SWC toggle)
├── package.json # Project metadata and scripts
└── tsconfig.base.json # Shared base TypeScript config (extended by client and server configs)
```

---

## 🛠️ Step-by-Step Setup

### 1. Initialize a Node.js project

```bash
npm init -y
```

You can also run `npm init` without `-y` if you want to manually configure project details.

---

### 2. Install TypeScript

```bash
npm install --save-dev typescript
```

Alternatively, you can install it globally:

```bash
npm install -g typescript
```

> 💡 **Tip: You can install TypeScript globally for quick CLI access (tsc --version), but it's best to keep it as a dev dependency to ensure consistent builds across different environments.**

---

### 3. Verify the Installation

```bash
tsc --version
```

If it shows a version number, TypeScript is installed correctly ✅

---

### 4. Install RAGE MP Type Definitions

```bash
npm install --save-dev @ragempcommunity/types-client
npm install --save-dev @ragempcommunity/types-server
```

---

### 5. Configure TypeScript

🧾 **Root Config:** `tsconfig.base.json`

```json
{
  "exclude": ["node_modules", "dist"],
  "compileOnSave": true,
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "lib": ["ES2020"],
    "rootDir": ".",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": "./",
    "skipLibCheck": true,
    "outDir": "dist"
  }
}
```

🧾 **Client Config:** `src/client/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "types": ["../../node_modules/@ragempcommunity/types-client"],
    "rootDir": "./"
  },
  "include": ["./**/*.ts"]
}
```

🧾 **Server Config:** `src/server/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "types": ["../../node_modules/@ragempcommunity/types-server"],
    "rootDir": "./"
  },
  "include": ["./**/*.ts"]
}
```

---

## 🧪 Test the Setup

### 1. Create a Test Client Script

Create a file at `src/client/hello-world/hello-world.ts`:

```ts
mp.events.add('playerReady', () => {
  mp.gui.chat.push('Hello World! - client');
});
```

### 2. Import It in the Entry Point

Create `src/client/index.ts` with the following content:

```ts
import './hello-world/hello-world';
```

> ⚠️ **Files not imported in the entry point will not be included in the build output.**

### 3. Repeat for Server-Side Code

Follow the same structure for server.

```ts
mp.events.add('playerReady', (player: PlayerMp) => {
  player.outputChatBox('Hello World! - server');
});
```

> ⚠️ **Make sure you import your server scripts to `src/server/index.ts`.**

---

## 🧰 Build Configuration (Rollup + SWC)

This project uses [Rollup](https://rollupjs.org/) and optionally [SWC](https://swc.rs/) (or TSC, based on the environment variable) to compile TypeScript.

> **If `COMPILER_USE_SWC=false` (see [Create a `.env` file](#create-a-env-file)), the build will fallback to using `typescript` (via `rollup-plugin-typescript2`).**

> 📄 The build script used for this project can be found in:  
> [./build-scripts/rollup.config.mjs](https://github.com/pimpmfl/ragemp-ts/blob/main/build-scripts/rollup.config.mjs)

### Install Dev Dependencies

Run the following commands to install the necessary dev dependencies:

```bash
npm install --save-dev @rollup/plugin-commonjs @rollup/plugin-json @rollup/plugin-node-resolve @rollup/plugin-terser
npm install --save-dev @swc/core @swc/helpers @types/node builtin-modules dotenv fs-jetpack
npm install --save-dev rollup rollup-plugin-swc3 rollup-plugin-tsconfig-paths rollup-plugin-typescript2
```

### Add Build Scripts in `package.json`

Add these scripts to your `package.json`:

```json
"scripts": {
  "build:production": "rollup -c ./build-scripts/rollup.config.mjs --environment PRODUCTION_MODE:true",
  "build": "rollup -c ./build-scripts/rollup.config.mjs",
  "watch": "rollup -w -c ./build-scripts/rollup.config.mjs"
}
```

### Create a `.env` File

Create a `.env` file at the root of your project with the following content:

```ini
# Setting this to true will minify the build outputs and disable source maps
PRODUCTION_MODE=false

# If set to true, `swc` will be used to compile the code instead of `tsc` (TypeScript compiler)
COMPILER_USE_SWC=true
```

---

## 🚀 Building the Project

1. Run the build:

```bash
npm run build
```

> 💡 **Pro Tip: Use `npm run watch` during development for real-time builds as you save files.**

2. You should now see a `dist/` directory containing:
   - `conf.json`
   - `.env`
   - `package.json`
   - `packages/core/index.js` (compiled server code)
   - `client_packages/index.js` (compiled client code)

> **Optional: Move all your server-related files inside `dist/` so that after each build you only need to run `dist/ragemp-server.exe`.**

---

## 🏁 Done!

You are now ready to write modular, type-safe code for both the client and server in RAGE Multiplayer using TypeScript. Happy coding! 🚀

---

## References

- [RAGE MP - Using TypeScript](https://wiki.rage.mp/wiki/Using_Typescript)
- [leonardssh/ragemp-typescript](https://github.com/leonardssh/ragemp-typescript)
- [ragempcommunity/ragemp-types](https://github.com/ragempcommunity/ragemp-types)
