# server

This directory contains all **server-side scripts** for the RAGE MP project.

Server-side scripts are:

- Loaded by the server on startup.
- Responsible for managing players, handling events, controlling game logic, and shaping the game world.

Use this directory to implement anything that should **run on the server**, such as:

- Player and vehicle management
- Custom game logic
- Database interactions
- Server-side event handling
- Communication with client-side scripts

> 💡 **Tip:** The server executes these scripts to control gameplay, enforce rules, and coordinate client behavior.

### Important Note

- **`src/server/index.ts`**: This file is the entry point for the server-side scripts.
- **Why `index.ts`?**: Only import the files you want to include in the final `dist/packages` directory inside `src/server/index.ts`. These imported files will be compiled and bundled into `dist/packages`, which are then executed by the server at runtime.

Make sure to structure your server-side scripts by importing and exporting only the necessary modules in **`index.ts`** so that only the relevant logic is included in the final build output.
