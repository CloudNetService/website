---
id: signs
title: Signs Module
sidebar_label: Signs
---

![CloudNet-Signs-Module-Example.png](/img/v3/modules/CloudNet-Signs-Module-Example.png)  
The sign system has a sorted, animated live-updating sign system, depending on the order of occupation.
The tags can even be targeted to specific groups with a template path limitation, which will then only show services
with the specified template. Every service behind the signs themselves needs the [CloudNet Bridge module](bridge.md),
so that the information for the presentation on the signs is available.
Otherwise, the signs will only show the server in the starting phase.
The signs can be managed using the `/cloudsign` command, which is available on Bukkit or Nukkit servers.

## Configuration {#configuration}
The configuration file is located under the following path: `modules/CloudNet-Signs/config.json`

### configurations {#configurations}
This is a JsonArray containing different SignLayout configurations for each Task on which signs will be used.

#### targetGroup {#targetgroup}
Defines the target group of this SignLayout configuration (e.g. `Lobby`)
:::tip Info
This is the group on which the signs are located
:::

#### switchToSearchingWhenServiceIsFull {#switchtosearchingwhenserviceisfull}
Whether services should disappear from the signs when they are full (`true`/`false`).

#### knockbackDistance {#knockbackdistance}
The distance of the knockback when a players is staying directly in front of a sign.

#### knockbackStrength {#knockbackstrength}
The strength of the knockback when a players is staying directly in front of a sign.

#### taskLayouts {#tasklayouts}
A JsonArray which can contain different sign layouts for certain tasks.  
`task` defines for which task this custom layout is.
:::tip
The layouts there have the same structure as the default layouts in the configuration
:::

#### defaultOnlineLayout {#defaultonlinelayout}
The default layout for online services.

#### defaultEmptyLayout {#defaultemptylayout}
The default layout for empty services.

#### defaultFullLayout {#defaultfulllayout}
The default layout for full services.

#### startingLayouts {#startinglayouts}
Contains an array of `signLayouts` through which can be iterated  
Will be shown when a service is starting  
The speed can be addressed by changing the `animationsPerSecond` option

#### searchLayouts {#searchlayouts}
Contains an array of `signLayouts` through which can be iterated  
Will be shown when a no service is available for this sign  
The speed can be addressed by changing the `animationsPerSecond` option

<br></br>

## Placeholders {#placeholders}
These are all placeholders that can be used in the SignLayout:
```
%task% --------------------- The name of the task of the server on the sign
%task_id% ------------------ The id of the service (example: Lobby-1 -> 1)
%group% -------------------- The target group of the sign
%name% --------------------- The name of the service on the sign
%uuid% --------------------- The name of the node the service on the sign is running on
%node% --------------------- The name of the service on the sign
%environment% -------------- The environment of the service on the sign
%life_cycle% --------------- The current life cycle of the service on the sign
%runtime% ------------------ The runtime of the service on the sign (Normally "jvm")
%port% --------------------- The port of the service on the sign
%cpu_usage% ---------------- The current CPU usage of the service on the sign
%threads% ------------------ The current amount of threads of the service on the sign
%online% ------------------- "Online" or "Offline"
%online_players% ----------- The current amount of max players of the service on the sign
%max_players% -------------- The current amount of max players of the service on the sign
%motd% --------------------- The current motd of the service on the sign
%extra% -------------------- The current extra of the service on the sign (can only be set with the API)
%state% -------------------- The current state of the service on the sign (can only be set with the API)
%version% ------------------ The server version of the service on the sign
%whitelist% ---------------- "Enabled" or "Disabled" - Spigots whitelist
```

## Sample Configuration {#sample-configuration}
The default configuration of the Sign Module looks like this:
```json
{
  "config": {
    "configurations": [
      {
        "targetGroup": "Lobby",
        "switchToSearchingWhenServiceIsFull": true,
        "knockbackDistance": 1.0,
        "knockbackStrength": 0.8,
        "taskLayouts": [
          {
            "task": "Template_Group_Layout",
            "onlineLayout": {
              "lines": [
                "&eLobby &0- &e%task_id%",
                "&8[&eLOBBY&8]",
                "%online_players% / %max_players%",
                "%extra%"
              ],
              "blockType": "GOLD_BLOCK",
              "subId": -1
            },
            "emptyLayout": {
              "lines": [
                "&7Lobby &0- &7%task_id%",
                "&8[&7LOBBY&8]",
                "%online_players% / %max_players%",
                "%extra%"
              ],
              "blockType": "GOLD_BLOCK",
              "subId": -1
            },
            "fullLayout": {
              "lines": [
                "&6Lobby &0- &6%task_id%",
                "&8[&6PRIME&8]",
                "%online_players% / %max_players%",
                "%extra%"
              ],
              "blockType": "EMERALD_BLOCK",
              "subId": -1
            }
          }
        ],
        "defaultOnlineLayout": {
          "lines": [
            "§8► §0%name% §8◄",
            "§a§lJoin",
            "%motd%",
            "§8● §0%online_players% / %max_players% §8●"
          ],
          "blockType": "GREEN_TERRACOTTA",
          "subId": -1
        },
        "defaultEmptyLayout": {
          "lines": [
            "§8► §0%name% §8◄",
            "§a§lJoin",
            "%motd%",
            "§8● §0%online_players% / %max_players% §8●"
          ],
          "blockType": "CYAN_TERRACOTTA",
          "subId": -1
        },
        "defaultFullLayout": {
          "lines": [
            "§8► §0%server% §8◄",
            "§6§lVIP",
            "%motd%",
            "§8● §0%online_players% / %max_players% §8●"
          ],
          "blockType": "ORANGE_TERRACOTTA",
          "subId": -1
        },
        "startingLayouts": {
          "signLayouts": [
            {
              "lines": [
                "§e● ● ● ● ● ● ● ● ●",
                "Server is",
                "starting",
                "§e● ● ● ● ● ● ● ● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● §e● ● ● ● ● ● ● ●",
                "Server is",
                "starting",
                "§6● §e● ● ● ● ● ● ● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● ● §e● ● ● ● ● ● ●",
                "Server is",
                "starting",
                "§6● ● §e● ● ● ● ● ● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● ● ● §e● ● ● ● ● ●",
                "Server is",
                "starting",
                "§6● ● ● §e● ● ● ● ● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● ● ● ● §e● ● ● ● ●",
                "Server is",
                "starting",
                "§6● ● ● ● §e● ● ● ● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● ● ● ● ● §e● ● ● ●",
                "Server is",
                "starting",
                "§6● ● ● ● ● §e● ● ● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● ● ● ● ● ● §e● ● ●",
                "Server is",
                "starting",
                "§6● ● ● ● ● ● §e● ● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● ● ● ● ● ● ● §e● ●",
                "Server is",
                "starting",
                "§6● ● ● ● ● ● ● §e● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● ● ● ● ● ● ● ● §e●",
                "Server is",
                "starting",
                "§6● ● ● ● ● ● ● ● §e●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            },
            {
              "lines": [
                "§6● ● ● ● ● ● ● ● ●",
                "Server is",
                "starting",
                "§6● ● ● ● ● ● ● ● ●"
              ],
              "blockType": "ORANGE_TERRACOTTA",
              "subId": 1
            }
          ],
          "animationsPerSecond": 2
        },
        "searchLayouts": {
          "signLayouts": [
            {
              "lines": [
                "§c● ● ● ● ● ● ● ● ●",
                "Searching for",
                "servers",
                "§c● ● ● ● ● ● ● ● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● §c● ● ● ● ● ● ● ●",
                "Searching for",
                "servers",
                "§4● §c● ● ● ● ● ● ● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● ● §c● ● ● ● ● ● ●",
                "Searching for",
                "servers",
                "§4● ● §c● ● ● ● ● ● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● ● ● §c● ● ● ● ● ●",
                "Searching for",
                "servers",
                "§4● ● ● §c● ● ● ● ● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● ● ● ● §c● ● ● ● ●",
                "Searching for",
                "servers",
                "§4● ● ● ● §c● ● ● ● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● ● ● ● ● §c● ● ● ●",
                "Searching for",
                "servers",
                "§4● ● ● ● ● §c● ● ● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● ● ● ● ● ● §c● ● ●",
                "Searching for",
                "servers",
                "§4● ● ● ● ● ● §c● ● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● ● ● ● ● ● ● §c● ●",
                "Searching for",
                "servers",
                "§4● ● ● ● ● ● ● §c● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● ● ● ● ● ● ● ● §c●",
                "Searching for",
                "servers",
                "§4● ● ● ● ● ● ● ● §c●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            },
            {
              "lines": [
                "§4● ● ● ● ● ● ● ● ●",
                "Searching for",
                "servers",
                "§4● ● ● ● ● ● ● ● ●"
              ],
              "blockType": "RED_TERRACOTTA",
              "subId": 14
            }
          ],
          "animationsPerSecond": 2
        }
      }
    ],
    "messages": {
      "server-connecting-message": "&7You will be moved to &c%server%&7...",
      "command-cloudsign-remove-success": "&7The target sign will removed! Please wait...",
      "command-cloudsign-create-success": "&7The target sign with the target group &6%group% &7is successfully created.",
      "command-cloudsign-cleanup-success": "&7Non-existing signs were removed successfully",
      "command-cloudsign-sign-already-exist": "&7The sign is already set. If you want to remove that, use the /cloudsign remove command"
    }
  }
}
```