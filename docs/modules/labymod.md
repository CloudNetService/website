---
id: labymod
title: LabyMod Module
sidebar_label: LabyMod
---

## What does the "LabyMod module"? {#what-does-the-labymod-module}

- It shows to your LabyMod friends whenever someone plays on your server:  
  ![CloudNet-LabyMod-Module-Example.png](img/CloudNet-LabyMod-Module-Example.png)
- It adds support for your Discord friends to join/spectate through your rich presence

## Where can I get it? {#where-can-i-get-it}

The module is located in the extras folder in the [CloudNet.zip](https://github.com/CloudNetService/CloudNet-v3/releases/latest/download/CloudNet.zip),
you just have to put it into your modules folder and restart CloudNet. It will be automatically installed on your proxies.

## Configuration {#configuration}

### enabled {#enabled}

Enables (or disables) the LabyMod Module (`true`/`false`)

<br></br>

### displayRPG {#displayrpg}

#### enabled {#enabled-1}

Enables (or disabled) the custom rich presence (`true`/`false`)
:::tip
If you disable the custom rich presence, LabyMod will show the default one:

```
DOMAIN
Ingame
```

:::

#### displayType {#displaytype}

Configures what should be replaced by the `%display%` variable in the format
[Here](#displaytypes) you can find the available DisplayTypes

#### format {#format}

Sets the message shown in the rich presence.  
`%display%` will be replaced by the value of the chosen `displayType`

<br></br>

### discordJoinMatch {#discordjoinmatch}

Here you can configure the "Ask to join" button in the Discord rich presence.

#### enabled {#enabled-2}

Enables (or disables) the button totally (`true`/`false`)

#### excludedGroups {#excludedgroups}

Here you can disable the "Ask to join" button for specific groups.  
Example:

```json
      "excludedGroups": [
        "Lobby",
        "Replay"
      ]
```

<br></br>

### discordSpectateEnabled {#discordspectateenabled}

Enables (or disables) the "Spectate" button in the Discord rich presence (`true`/`false`)

### excludedSpectateGroups {#excludedspectategroups}

Disables the "Spectate" button for specific groups.  
Example:

```json
    "excludedSpectateGroups": [
      "Lobby",
      "Community"
    ]
```

:::tip Info
This option is ignored when `discordSpectateEnabled` is set to `false`
:::

<br></br>

### gameModeSwitchMessages {#gamemodeswitchmessages}

In this section you can configure the gamemode swith message:  
![CloudNet-LabyMod-Module-Example.png](img/CloudNet-LabyMod-Module-Example.png)

#### enabled {#enabled-3}

Enables (or disables) the gamemode switch message (`true`/`false`)

#### displayType {#displaytype-1}

Configures what should be replaced by the `%display%` variable in the format  
[Here](#displaytypes) you can find the available DisplayTypes

#### format {#format-1}

Sets the message shown in LabyMod.  
`%display%` will be replaced by the value of the chosen `displayType`

<br></br>

### loginDomain {#logindomain}

This is the domain on which players will be connected when they click the ["Ask to join"](#discordjoinmatch) or
["Spectate"](#discordspectateenabled) Button in Discord.  
After that they will be sent automatically to the specific server by the module.

### permissionsConfig {#permissionsconfig}

These are permissions that the LabyMod client uses to enable or (force) disable certain modifications

### bannerConfig {#bannerconfig}

The URL from this config section is used to display a banner in the LabyMod client

<br></br>

## DisplayTypes {#displaytypes}

The following DisplayTypes are available:

- `SERVICE` - the name of the service (e.g. `Lobby-1`)
- `TASK` - the name of the task (e.g. `Lobby`)
- `FIRST_GROUP` - the name of the first group of the service
- `LAST_GROUP` - the name of the last group of the service

## Sample Configuration {#sample-configuration}

```json
{
  "config": {
    "enabled": true,
    "discordRPC": {
      "enabled": true,
      "displayType": "SERVICE",
      "format": "Playing on %display%"
    },
    "discordJoinMatch": {
      "enabled": true,
      "excludedGroups": []
    },
    "discordSpectateEnabled": true,
    "excludedSpectateGroups": ["Lobby"],
    "gameModeSwitchMessages": {
      "enabled": true,
      "displayType": "SERVICE",
      "format": "§bCloud§fNet §8➢ §e%display%"
    },
    "loginDomain": "mc.example.com",
    "permissionConfig": {
      "enabled": false,
      "labyModPermissions": {
        "BLOCKBUILD": true,
        "CHAT": true,
        "GUI_ALL": true,
        "ANIMATIONS": true,
        "REFILL_FIX": false,
        "IMPROVED_LAVA": false,
        "CROSSHAIR_SYNC": false,
        "GUI_POTION_EFFECTS": true,
        "SLOWDOWN": false,
        "GUI_ARMOR_HUD": true,
        "SATURATION_BAR": true,
        "GUI_ITEM_HUD": true,
        "TAGS": true,
        "RANGE": false
      }
    },
    "bannerConfig": {
      "enabled": false,
      "bannerUrl": "http://dl.cloudnetservice.eu/data/minecraft/CloudNet-LabyMod-Banner.png"
    }
  }
}
```
