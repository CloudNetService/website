---
id: installation
title: Installation
sidebar_position: 0
---

## Upgrading {#upgrading}

:::caution

Since the release of CloudNet v4, we now require **Java 17**. Please make sure that you upgrade your Java installation
before proceeding. Old Spigot versions (for example 1.8) which are normally not supporting Java 17 are handled in a way
that they do so automatically!

:::

Upgrading from an old CloudNet 3.4 installation is very straight forward and easy to do. The following steps are needed
before you are able to upgrade to v4:

* **Backup your old installation!** It might be a rare case, but if something breaks you can easily roll back to a
  working installation.
* **Delete** the old launcher.jar file
* **Delete** the old launcher.cnl file
* **Delete** the old launcher directory (this step is **optional**, but cleans up the old clutter from previous
  installed
  versions)
* **Delete** the `cloudnet-storage-ftp` and `cloudnet-rest` module files (all other modules will be upgraded
  automatically). Note that CloudNet 4 no longer supports FTP template storages, only SFTP. If you want to reinstall the
  modules, just use `module install` in the console once you finished the upgrade.

Now you can proceed with the normal installation steps, all other upgrades will get executed automatically when starting
the new version of CloudNet!

## Installation {#install}

1. In order to run CloudNet you need Java 17 or newer. Check your Java version by executing `java -version` in your
   shell. A valid output looks like this:
   ```
   openjdk version "17.0.2" 2022-01-18
   OpenJDK Runtime Environment (build 17.0.2+8-Debian-1deb11u1)
   OpenJDK 64-Bit Server VM (build 17.0.2+8-Debian-1deb11u1, mixed mode, sharing)
   ```

   If you get a `Command not found` output, or your Java version is older than 17, head over to
   the [Adoptium](https://adoptium.net/installation) documentation to get a step-by-step explanation on how to install
   Java.

2. Download the [latest release](https://github.com/CloudNetService/CloudNet-v3/releases/latest/download/CloudNet.zip)
   of CloudNet into the folder you want to install CloudNet in, or use the following curl command:
   ```bash
   curl -OLJf https://github.com/CloudNetService/CloudNet-v3/releases/latest/download/CloudNet.zip
   ```

   :::danger -bash: curl: command not found

   While most distributions have curl pre-installed, there are still some which don't. In this case all you need to do
   is install curl and proceed with the installation. This can for example be done by using `apt install curl`. See
   their [download instructions](https://curl.se/download.html) for more help.

   :::

3. Unzip the downloaded file, for example into a folder called `Cloud`:
   ```bash
   unzip CloudNet.zip -d Cloud/
   ```

   :::danger -bash: unzip: command not found

   To unzip files on a unix system you can use the `unzip` tool: `apt install unzip` or `brew install unzip`. On Windows
   you can use a tool like [7Zip](https://www.7-zip.de/) to unzip files.

   :::

4. Add a new user to run the Cloud with. This step is technically optional, but **strongly** recommended to keep your
   installation secure. Take a look at [this blog post](https://madelinemiller.dev/blog/root-minecraft-server/) to get
   more information about what can happen if you run your Minecraft server or CloudNet with a privileged user. Linux
   users can follow [this guide](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/) to
   add a new user.

5. Start CloudNet by navigating into the folder you unzipped CloudNet to and execute the startup script made for your
   operating system.

   :::tip

   The start file for Linux will check of either `screen` or `tmux` is installed and will use one of them based on
   availability. Make sure to install one of them to run CloudNet or to edit the start script accordingly to work with
   the terminal multiplexer of your choice.

   :::

## Common mistakes {#common_mistakes}

#### `No valid java installation was found, please install java in order to run CloudNet`

You need to install **Java 17** before trying to execute the start script. Head over
to [Adoptium](https://adoptium.net/installation) to get a step-by-step guide on how to install java.

#### `No screen or tmux installation found, you need to install at least one of them to run CloudNet`

You need to either install [screen](https://www.gnu.org/software/screen/manual/html_node/index.html)
or [tmux](https://github.com/tmux/tmux/wiki/Installing) in order to run CloudNet with the default start file. If you
want to use any other terminal multiplexer, just edit the default start script accordingly.

#### `-bash: ./start.sh: Permission denied` or `Caused by: java.nio.file.AccessDeniedException: launcher/app.lock`

1. You need to change the permissions of the startup script, for example: `chmod 744 start.sh`.
2. If you are not running with root (**which is recommended**) you need to give the user access to the directory the
   Cloud is in. For example for a user called `cloud` and the directory
   called `CloudNet`: `chown -R cloud:cloud CloudNet/`

#### `It looks like CloudNet is running as an administrative user!`

This is not really an error but indicates you that CloudNet is running as an administrative user, which allows attackers
to (for example) execute malicious scripts via plugins and therefore **strongly** not recommended. If you're sure what
you're doing, just wait 5 seconds and CloudNet will start as always.

#### `It looks like CloudNet is already running!`

CloudNet is already running in the current directory. Just stop the other running instance and start CloudNet again.
This check prevents further issues to happen, for example when trying to open the local database or bind twice to the
same port. There might be edge cases and the check is incorrect. If you are 100% sure that this is the case, just delete
the lock file at `launcher/app.lock` and start CloudNet after that.