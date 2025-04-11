# 🚀 Setting Up Your RAGE Multiplayer Server (Windows)

> This guide will walk you through setting up a local **RAGE Multiplayer server** on Windows so you can start developing your own GTA V multiplayer experience.

---

## 📚 Table of Contents

- [✅ Prerequisites](#-prerequisites)
- [🛠️ Server Setup Instructions](#️-server-setup-instructions)
  - [1. Install the RAGE Multiplayer Client](#1-install-the-rage-multiplayer-client)
  - [2. Modify the Client Configuration](#2-modify-the-client-configuration)
  - [3. Run the Updater](#3-run-the-updater)
  - [4. Move the Server Files](#4-move-the-server-files)
  - [5. Revert the Configuration Change](#5-revert-the-configuration-change)
  - [6. Restore the RAGE MP Client](#6-restore-the-rage-mp-client)
- [✅ All Done!](#-all-done)

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
