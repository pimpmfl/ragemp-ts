# client

This directory contains all **client-side scripts** for the RAGE MP project.

Client-side scripts are:

- Downloaded by the client upon joining the server.
- Responsible for rendering custom UI, handling CEF (Chromium Embedded Framework) integration, and managing client-specific logic and events.

Use this directory to implement anything that should **run in the player's game instance**, such as:

- GUI elements
- Custom HUDs
- Browser-based UIs (CEF)
- Input handling
- Visual effects or sound cues

> 💡 **Tip:** Make sure any file here is properly referenced in `client_packages/index.js` or equivalent, so it gets loaded by the RAGE MP client.

### Important Note

- **`src/client/index.ts`**: This file is the entry point for the client-side scripts.
- **Why `index.ts`?**: Only import the files you want to include in the final `dist/client_packages` directory inside `src/client/index.ts`. These imported files will be compiled and bundled into `dist/client_packages`, which are then executed by the client at runtime.

Ensure that the client-side scripts are properly structured by importing and exporting only the necessary modules in **`index.ts`**, so that only the relevant logic is included in the final build output.
