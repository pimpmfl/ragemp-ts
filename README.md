# ragemp-ts

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![esbuild](https://img.shields.io/badge/esbuild-ffcf00?style=for-the-badge&logo=esbuild&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

[![CI](https://github.com/pimpmfl/ragemp-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/pimpmfl/ragemp-ts/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pimpmfl/ragemp-ts/blob/main/LICENSE)

> A modern RAGE Multiplayer boilerplate built for developers who want **type-safe**, **modular**, and **maintainable** RAGE Multiplayer projects — with full support for **TypeScript**, **PostgreSQL**, and **Vue-based CEF**.

---

## 📚 Table of Contents

- [🎯 About This Project](#-about-this-project)
- [⚡ Quickstart](#-quickstart)
- [🧱 Project Structure](#-project-structure)
- [🤔 Getting Help](#-getting-help)
- [📚 References](#references)

---

## 🎯 About This Project

This repository is designed to help **beginners and intermediate developers** set up and build their own RAGE Multiplayer servers with ease. It provides a clean, scalable starting point for both client-side and server-side scripting using **TypeScript**, and comes with best practices for organizing your codebase.

Whether you're just getting started with RAGE MP or looking for a modern setup that integrates a database and UI framework, this project aims to provide you with:

- ✅ A fully working **TypeScript** environment for both client and server
- 🧩 Modular folder structure with examples
- 📦 Free and open-source **RAGE MP resources** to learn from and build upon
- 🛢️ Integration-ready setup for **PostgreSQL**, powered by **TypeORM**
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

- ✅ [RAGE MP Server Setup](https://wiki.rage.mp/wiki/Getting_Started_with_Server)
- ✅ [pnpm (v10.8.1 or higher recommended)](https://pnpm.io/installation)
- ✅ [Docker (used for PostgreSQL)](https://www.docker.com/products/docker-desktop/)

### Steps to Get Started

1. Clone the repository:

```bash
git clone https://github.com/pimpmfl/ragemp-ts.git
```

2. Navigate into the project directory:

```bash
cd ragemp-ts
```

3. Create a `dist/` directory:

```bash
mkdir dist
```

4. Move the following server-files (those are generated after setting up a RAGEMP server) inside your freshly created `dist/` directory:

- `bin/`
- `client_packages/`
- `dotnet/`
- `maps/`
- `packages/`
- `plugins/`
- `BugTrap-x64.dll/`
- `ragemp-server.exe`

5. Install the dependencies listed in `package.json`:

```bash
pnpm install
```

6. Create your environment file:

```bash
cp .env.example .env
```

> 💡 **Edit `.env`** and add your own database credentials. You can find the default values and examples in the `.env.example` file.

7. Build the project:

```bash
pnpm run build
```

8. Start the Docker container:

```bash
chmod +x ./docker/run_docker_db.sh
./docker/run_docker_db.sh
```

9. Start the RAGE Server:

```bash
cd dist/ && ./ragemp-server.exe
```

If everything was set up correctly, you will see the following message in your terminal, once the database connection was established:

- `Database connected.`

---

## 🧱 Project Structure

In this project, we use the following architecture:

```
ragemp-ts/
│
├── docker/ # Contains Docker Compose for PostgreSQL and the script to run the Docker container
│   ├── docker-compose.yml
│   └── run_docker_db.sh
│
├── rage-cef/ # Vue.js setup for building CEF UIs that can be triggered client-side
│   ├── src/
│   │   ├── base-components/ # Reusable components shared across the app
│   │   └── modules/ # Contains feature-specific modules
│   │   │   └── hello-world/
│   │   │   │   ├── components/ # Components specific to the module
│   │   │   │   │   ├── HelloWorld.vue
│   │   │   │   ├── stores/ # Store for module-specific state management
│   │   │   │   │   └── counter.ts
│   │   │   │   └── views/ # Views for rendering UI
│   │   │   │   │   └── HelloWorldView.vue
│   │   │   │   ├── index.ts # Creates a Vue App for the module
│   │   │   │   └── index.html # Module's entry HTML file
│   │   │
│   │   ├── index.ts # Creates a Vue App for in-browser development
│   │   └── App.vue # Contents displayed in-browser
│
├── rage-server-client/ # Contains the server-side and client-side code for the RAGE MP server
│   ├── build-scripts/ # Build scripts for client and server-side code
│   │   └── esbuild.config.mjs
│   │
│   ├── conf.json # RAGE server configuration file (e.g., masterlist name, etc.)
│   ├── src/
│   │   ├── client/ # Client-side logic (modules triggered client-side)
│   │   │   ├── hello-world/ # Example client-side module
│   │   │   │   └── hello-world.ts
│   │   │   ├── index.ts # Entry point for the client-side modules
│   │   │   ├── README.md # Documentation for client-side modules
│   │   │   └── tsconfig.json # TypeScript config specific to the client-side code
│   │   │
│   │   └── server/ # Server-side logic (executed on the server)
│   │   │   ├── database/ # Database setup and connection logic
│   │   │   │   ├── data-source.ts # DataSource configuration for TypeORM
│   │   │   │   ├── environment.ts # Environment-specific configurations (e.g., DB credentials)
│   │   │   │   └── index.ts
│   │   │   ├── hello-world/ # Example server-side module
│   │   │   │   ├── hello-world.ts # Server-side logic for the hello-world module
│   │   │   │   └── second-hello-world.ts
│   │   │   ├── index.ts # Entry point for the server-side modules
│   │   │   ├── README.md # Documentation for server-side modules
│   │   │   └── tsconfig.json # TypeScript config specific to the server-side code
│   └── tsconfig.json # Base TypeScript config for both client and server code
│
├── scripts/ # General-purpose utility scripts
│   ├── enforce-pnpm.js
│   ├── generate_project_tree.sh
│   └── remove_local_branches.sh
│
├── .env # PostgreSQL Credentials
├── README.md # Main project documentation
└── renovate.json # Configuration for Renovate bot (dependency management automation)
```

---

## 🤔 Getting Help

If you run into any issues or need further assistance, feel free to:

- Open an issue in the [GitHub repository](https://github.com/pimpmfl/ragemp-ts/issues).
- Ask questions on the [RAGE MP forum](https://rage.mp/forums/).
- Join the [RAGE Multiplayer Discord](https://discord.gg/jPEuhky77Y) for support.
- Contact me on Discord: _pimp.mfl_

---

## 📚 References

- [RAGE MP - Wiki](https://wiki.rage.mp/wiki/Main_Page)
- [RAGE MP - Using TypeScript](https://wiki.rage.mp/wiki/Using_Typescript)
- [leonardssh/ragemp-typescript](https://github.com/leonardssh/ragemp-typescript)
- [ragempcommunity/ragemp-types](https://github.com/ragempcommunity/ragemp-types)
