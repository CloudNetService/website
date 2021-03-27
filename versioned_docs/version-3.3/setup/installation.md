---
id: installation
title: Installation
---

## Requirements
To get started with CloudNet installation, make sure you meet all the [**requirements**](requirements.md).
## Installation
1. Start your SSH client and connect to your server.
2. Navigate to your directory with `cd ../PATH/` (e.g. `cd ../home/`) and create a folder for CloudNet with `mkdir NAME` (e.g. `mkdir cloudnet`). Navigate to the newly created folder with `cd NAME/` (e.g. `cd cloudnet/`).
3. Download CloudNet with `curl -O https://github.com/CloudNetService/CloudNet-v3/releases/latest/download/CloudNet.zip CloudNet.zip`.
4. Unzip the downloaded zip with `unzip CloudNet.zip`.
5. Give the start file permissions with `chmod +x start.sh`.
6. Start the setup by executing the start file with `./start.sh`
## Setup
:::tip
*Use the following keys to switch the answer options:* <kbd>↑</kbd> / <kbd>↓</kbd>
:::
1. Answer the question `Do you agree to the Mojang EULA (https://account.mojang.com/documents/minecraft_eula)?` with `yes`.
2. Select your server IP address with port for the cloud. The port is used by the cloud and not by other applications like BungeeCord (e.g. `0.0.0.0:1410`).
3. Select your server IP address with port for the web server (e.g. `0.0.0.0:2812`).
4. Specify the available memory (ram) that the cloud is allowed to use. (e.g. `8192`).
5. Answer the question `Is this node part of a cluster? (MultiRoot)` with `no`.
6. Select an environment for the proxy (e.g. `VELOCITY`).
7. Select a version from the previously selected environment (e.g. `velocity-latest`).
8. Select an environment for the servers (e.g. `MINECRAFT_SERVER`).
9. Select a version from the previously selected environment (e.g. `paperspigot-latest`).
10. Answer the question `Should a default proxy be created?` with `yes` or `no` (recommended: `yes`).
11. Answer the question `Should a default lobby be created?` with `yes` or `no` (recommended: `yes`).