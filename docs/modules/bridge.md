---
id: bridge
title: Bridge Module
sidebar_label: Bridge
---

The bridge module is the core of the modules. It connects the servers with the proxies and manages callbacks. It does also serve the ingame `/cloud` and `/hub` commands.  
The bridge module also contains "only proxy join", which prevents users from bypassing the proxy, which leads to direct access to the Minecraft servers. This is more of a protection for inexperienced users. Unwanted problems can occur when using this feature, we highly recommend disabling it entirely and to use a firewall instead. A tutorial for Firewalls can be found on [SpigotMC](https://www.spigotmc.org/wiki/firewall-guide/).

## Configuration {#configuration}

### prefix {#prefix}

Defines the prefix of the ingame messages

### onlyProxyProtection {#onlyproxyprotection}

Enables (or disables) the onlyProxyProtection (`true`/`false`)
:::caution
Disabling the onlyProxyProtection is NOT recommended!  
Please ensure that your Firewall is set up correctly if you disable it.
:::

### excludedOnlyProxyWalkableGroups {#excludedonlyproxywalkablegroups}

Here you can add specific groups for which the [OnlyProxyProtection](#onlyproxyprotection) should be disabled.  
Example:

```json
    "excludedOnlyProxyWalkableGroups": [
      "BauServer",
      "DevServer"
    ],
```

### excludedGroups {#excludedgroups}

This is a json array containing groups on which the bridge will not be installed.  
Example:

```json
    "excludedGroups": [
      "BauServer",
      "DevServer"
    ],
```

### bungeeFallbackConfigurations {#bungeefallbackconfigurations}

This is a json array containing different fallback configurations for different proxy groups.

A configuration for two proxy groups can look like this:

```
    "bungeeFallbackConfigurations":[
      {
        "targetGroup":"Proxy",
        "defaultFallbackTask":"Lobby",
        "fallbacks":[
          {
            "task":"Lobby",
            "permission":null,
            "availableOnGroups":[

            ],
            "forcedHost": null,
            "priority":1
          }
        ]
      },
      {
        "targetGroup":"Proxy2",
        "defaultFallbackTask":"Lobby2",
        "fallbacks":[
          {
            "task":"Lobby2",
            "permission":null,
            "availableOnGroups":[

            ],
            "forcedHost": null,
            "priority":1
          }
        ]
      }
    ],
```

### bungeeFallbackConfigurations » targetGroup

This defines for which [proxy group](../components/groups.md) the fallback configuration is.

### bungeeFallbackConfigurations » defaultFallbackTask

This sets the default fallback [task](../components/tasks.md) for the current target proxy group.

### bungeeFallbackConfigurations » fallbacks

This is an array containing the different fallbacks that should be available on the [defined proxy group].

### bungeeFallbackConfigurations » fallbacks » task

This defines for which task the current fallback entry is.

### bungeeFallbackConfigurations » fallbacks » permission

Here you can set a permission which is required to be sent to this fallback (e.g. when using `/hub`).

### bungeeFallbackConfigurations » fallbacks » availableOnGroups

With this option you can determine on which groups this fallback is available

### bungeeFallbackConfigurations » fallbacks » forcedHost

This option is used to set a forcedHost for this fallback

### bungeeFallbackConfigurations » fallbacks » priority

This option is used to set a priority for this fallback.

### hubCommandNames {#hubcommandnames}

Json array of alternative hub commands.

### logPlayerConnections {#logplayerconnections}

Enabled (or disables) the logging of the player connections in the console (`true`/`false`)

### messages {#messages}

A set of the ingame messages sent by the Bridge Module
:::tip Info
To disable a message clear the content of the string
:::

## Sample Configuration {#sample-configuration}

The default configuration of the Bridge Module looks like this:

```json
{
  "config": {
    "prefix": "&b&o■ &8┃ &3&lCloud &8● &7",
    "onlyProxyProtection": true,
    "excludedOnlyProxyWalkableGroups": [],
    "excludedGroups": [],
    "bungeeFallbackConfigurations": [
      {
        "targetGroup": "Proxy",
        "defaultFallbackTask": "Lobby",
        "fallbacks": [
          {
            "task": "Lobby",
            "permission": null,
            "availableOnGroups": [],
            "forcedHost": null,
            "priority": 1
          }
        ]
      }
    ],
    "hubCommandNames": ["hub", "lobby", "leave", "l"],
    "logPlayerConnections": true,
    "messages": {
      "already-connected": "§cYou are already connected to this network!",
      "command-hub-no-server-found": "&7Hub server cannot be found",
      "command-hub-success-connect": "&7You did successfully connect to %server%",
      "server-join-cancel-because-permission": "&7You do not have the required permissions to connect to this server.",
      "command-hub-already-in-hub": "&cYou are already connected",
      "server-join-cancel-because-maintenance": "&7This server is currently in maintenance mode",
      "server-join-cancel-because-only-proxy": "&7You must connect from an original proxy server",
      "command-cloud-sub-command-no-permission": "&7You are not allowed to use &b%command%"
    },
    "properties": {}
  }
}
```
