---
id: installation
title: Installation
---

## Requirements {#requirements}

To get started with CloudNet installation, make sure you meet all the [**requirements**](requirements.md).

## Installation {#installation}

1. Start your SSH client and connect to your server.
2. Navigate to your installation directory `cd [PATH]` (e.g. `cd /home/[USERDIR]`) and create a folder for CloudNet with `mkdir [NAME]` (e.g. `mkdir cloudnet`). Navigate to the newly created folder with `cd [NAME]` (e.g. `cd cloudnet/`).
3. Download CloudNet with `wget https://github.com/CloudNetService/CloudNet-v3/releases/latest/download/CloudNet.zip`.
4. Unzip the downloaded zip with `unzip CloudNet.zip`.
5. Make the start file executable with `chmod +x start.sh`.
6. Start the setup by executing the start file with `./start.sh`

## Setup {#setup}

:::tip Tip

_Use the following keys to switch the answer options:_ <kbd>↑</kbd> / <kbd>↓</kbd>

:::

1. Answer the question `Do you agree to the Mojang EULA (https://account.mojang.com/documents/minecraft_eula)?` with `yes`.
2. Select your server IP address and port for the CloudNet Node (e.g. `0.0.0.0:1410`). The specified port will be used by the CloudNet Node and cannot be used by other applications like BungeeCord.
3. Select your server IP address and port for the CloudNet web server (e.g. `0.0.0.0:2812`).
4. Specify the available memory (RAM) in MB that the CloudNet Node is allowed to use. (e.g. `8192`).
5. Answer the question `Is this node part of a cluster? (MultiRoot)` with `no`.
6. Select an environment for the proxy (e.g. `VELOCITY`).
7. Select a version of the previously selected environment (e.g. `velocity-latest`).
8. Select an environment for the servers (e.g. `MINECRAFT_SERVER`).
9. Select a version of the previously selected environment (e.g. `paperspigot-latest`).
10. Answer the question `Should a default proxy be created?` with `yes` or `no` (recommended: `yes`).
11. Answer the question `Should a default lobby be created?` with `yes` or `no` (recommended: `yes`).
