---
id: npcs
title: NPCs Module
sidebar_label: NPCs
---

The CloudNet NPC module allows spawning of fake-players for server selection.  
![CloudNet-NPC-Module-Example.png](/img/v3/modules/CloudNet-NPC-Module-Example.png)  
Every NPC provides server connect methods either trough an inventory or through direct connect. NPCs can be managed with the `/cloudnpc` command.

## NPC properties {#npc-properties}

Every NPC consists of the following properties, which can either be set on creation, or can be edited with the `/cloudnpc edit` command.

```
targetGroup ------------- The group services must have to make joining over the NPC possible
skinOwnerName ----------- The name of the minecraft profile the NPCs' textures will be fetched from (this is only done once, the skin won't change)
itemInHand -------------- The name of the Bukkit Material the NPC will hold in his main hand
shouldLookAtPlayer ------ If the NPC should look at the player
shouldImitatePlayer ----- If the NPC should imitate the player (attack animation and sneaking)
infoLine ---------------- The hologram which is shown above the NPC
rightClickAction -------- The action which will be executed when a player right-clicks the NPC
leftClickAction --------- The action which will be executed when a player left-clicks the NPC
Available actions are OPEN_INVENTORY, DIRECT_CONNECT_HIGHEST_PLAYERS, DIRECT_CONNECT_LOWEST_PLAYERS, DIRECT_CONNECT_RANDOM and NOTHING
```

Placeholders for the InfoLine:

```
%group% | %g% -------------- The targetGroup of the NPC
%online_players% | %o_p& --- The total amount of players which are only on services of the NPC targetGroup
%max_players% | %m_p& ------ The total amount of max players from all services of the NPC targetGroup
%online_servers% | %o_s% --- The amount of servers of the NPC targetGroup which are online
```

## NPC Inventory {#npc-inventory}

:::caution Warning

The inventory contains 1.13+ items in the default configuration!  
If you do not change them, they will not be visible on versions below that.  
You can also use our [Sample Configuration for 1.8 to 1.12](#sample-configuration-18-to-112).

:::

![CloudNet-NPC-Module-Inventory-Example.png](/img/v3/modules/CloudNet-NPC-Module-Inventory-Example.png)  
Placeholders for items in the inventory:

```
%task% ----------------------- The name of the task of the server
%task_id% -------------------- The id of the service (example: Lobby-1 -> 1)
%group% ---------------------- The target group of the NPC
%name% ----------------------- The name of the service
%uuid% ----------------------- The UUID of the service
%node% ----------------------- The name of the node the service is running on
%environment% ---------------- The environment of the service
%life_cycle% ----------------- The current life cycle of the service
%runtime% -------------------- The runtime of the service (Normally "jvm")
%port% ----------------------- The port of the service
%cpu_usage% ------------------ The current CPU usage of the service
%threads% -------------------- The current amount of threads of the service
%online% --------------------- "Online" or "Offline"
%online_players% ------------- The current amount of online players of the service
%max_players% ---------------- The current amount of max players of the service
%motd% ----------------------- The current motd of the service
%extra% ---------------------- The current extra of the service (can only be set with the API)
%state% ---------------------- The current state of the service (can only be set with the API)
%version% -------------------- The server version of the service
%whitelist% ------------------ "Enabled" or "Disabled" - Spigots whitelist
```

## LabyMod emotes {#labymod-emotes}

The module does also offer the possibility to play emotes on the NPCs for LabyMod users. This can be configured in the config of the NPC module.

```json
        "labyModEmotes": {
          "emoteIds": [
            2,
            3,
            49
          ],
          "onJoinEmoteIds": [
            4,
            20
          ],
          "minEmoteDelayTicks": 400,
          "maxEmoteDelayTicks": 600,
          "playEmotesSynchronous": false
        }
```

```
emoteIds ---------------- A list of LabyMod emote ids which will be played randomly
minEmoteDelayTicks ------ The minimum amount of time (in ticks) between the emote-play-sequences
maxEmoteDelayTicks ------ The maximum amount of time (in ticks) between the emote-play-sequences
onJoinEmoteIds ---------- A list of LabyMod emote ids which will be played randomly to a new joined player
onKnockbackEmoteIds ----- A list of LabyMod emote ids which will be played randomly to a player that receives knockback from the npc
playEmotesSynchronous --- If all NPCs should play the same emote
```

For a list of all emote ids, see the [LabyMod developer docs](https://docs.labymod.net/pages/server/emote_api/).

## Sample Configuration {#sample-configuration}

The default configuration of the NPC Module looks like this:

```json
{
  "config": {
    "configurations": [
      {
        "targetGroup": "Lobby",
        "infoLineDistance": 0.1,
        "knockbackDistance": 0.7,
        "knockbackStrength": 0.8,
        "inventorySize": 54,
        "startSlot": 10,
        "endSlot": 54,
        "showFullServices": true,
        "onlineItem": {
          "material": "LIME_DYE",
          "subId": -1,
          "displayName": "§a%name%",
          "lore": [
            " ",
            "§8● §e%state%",
            "§8● §7%online_players%§8/§7%max_players%",
            "§8● §7%motd%"
          ]
        },
        "emptyItem": {
          "material": "LIGHT_GRAY_DYE",
          "subId": -1,
          "displayName": "§7%name%",
          "lore": [
            " ",
            "§8● §e%state%",
            "§8● §7%online_players%§8/§7%max_players%",
            "§8● §7%motd%"
          ]
        },
        "fullItem": {
          "material": "REDSTONE",
          "subId": -1,
          "displayName": "§c%name%",
          "lore": [
            " ",
            "§8● §e%state%",
            "§8● §7%online_players%§8/§7%max_players%",
            "§8● §7%motd%"
          ]
        },
        "inventoryLayout": {
          "1": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          },
          "2": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          },
          "3": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          },
          "4": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          },
          "5": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          },
          "6": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          },
          "7": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          },
          "8": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          },
          "9": {
            "material": "BLACK_STAINED_GLASS_PANE",
            "subId": -1,
            "displayName": " ",
            "lore": []
          }
        },
        "labyModEmotes": {
          "emoteIds": [2, 3, 49],
          "onJoinEmoteIds": [4, 20],
          "onKnockbackEmoteIds": [37],
          "minEmoteDelayTicks": 400,
          "maxEmoteDelayTicks": 600,
          "playEmotesSynchronous": false
        },
        "npcTabListRemoveTicks": 40
      }
    ],
    "messages": {
      "command-create-display-name-too-long": "§7The NPC displayName cannot be longer than 16 chars!",
      "command-edit-success": "§7Successfully edited the NPC.",
      "command-cleanup-success": "§7All NPCs on unloaded worlds have been removed successfully.",
      "command-create-texture-fetch-fail": "§7Unable to fetch the skin of the provided Minecraft name! Try again later.",
      "command-remove-success": "§7Successfully removed the server selector NPC.",
      "command-no-npc-in-range": "§7There is no NPC in the range of 5 blocks!",
      "command-edit-invalid-action": "§7The provided action isn't valid!",
      "command-create-invalid-material": "§7The provided item isn't a valid material! (Use AIR for no item in hand)",
      "command-create-success": "§7Successfully created the server selector NPC."
    }
  }
}
```

## Sample Configuration 1.8 to 1.12 {#sample-configuration-18-to-112}

The default configuration of the NPC Module for the 1.8 looks like this:

```json
{
  "config": {
    "configurations": [
      {
        "targetGroup": "Lobby",
        "infoLineDistance": 0.1,
        "knockbackDistance": 0.7,
        "knockbackStrength": 0.8,
        "inventorySize": 54,
        "startSlot": 10,
        "endSlot": 54,
        "showFullServices": true,
        "onlineItem": {
          "material": "INK_SACK",
          "subId": 10,
          "displayName": "§a%name%",
          "lore": [
            " ",
            "§8● §e%state%",
            "§8● §7%online_players%§8/§7%max_players%",
            "§8● §7%motd%"
          ]
        },
        "emptyItem": {
          "material": "INK_SACK",
          "subId": 7,
          "displayName": "§7%name%",
          "lore": [
            " ",
            "§8● §e%state%",
            "§8● §7%online_players%§8/§7%max_players%",
            "§8● §7%motd%"
          ]
        },
        "fullItem": {
          "material": "REDSTONE",
          "subId": -1,
          "displayName": "§c%name%",
          "lore": [
            " ",
            "§8● §e%state%",
            "§8● §7%online_players%§8/§7%max_players%",
            "§8● §7%motd%"
          ]
        },
        "inventoryLayout": {
          "1": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          },
          "2": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          },
          "3": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          },
          "4": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          },
          "5": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          },
          "6": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          },
          "7": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          },
          "8": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          },
          "9": {
            "material": "STAINED_GLASS_PANE",
            "subId": 15,
            "displayName": " ",
            "lore": []
          }
        },
        "labyModEmotes": {
          "emoteIds": [2, 3, 49],
          "onJoinEmoteIds": [4, 20],
          "onKnockbackEmoteIds": [37],
          "minEmoteDelayTicks": 400,
          "maxEmoteDelayTicks": 600,
          "playEmotesSynchronous": false
        },
        "npcTabListRemoveTicks": 40
      }
    ],
    "messages": {
      "command-create-display-name-too-long": "§7The NPC displayName cannot be longer than 16 chars!",
      "command-edit-success": "§7Successfully edited the NPC.",
      "command-cleanup-success": "§7All NPCs on unloaded worlds have been removed successfully.",
      "command-create-texture-fetch-fail": "§7Unable to fetch the skin of the provided Minecraft name! Try again later.",
      "command-remove-success": "§7Successfully removed the server selector NPC.",
      "command-no-npc-in-range": "§7There is no NPC in the range of 5 blocks!",
      "command-edit-invalid-action": "§7The provided action isn't valid!",
      "command-create-invalid-material": "§7The provided item isn't a valid material! (Use AIR for no item in hand)",
      "command-create-success": "§7Successfully created the server selector NPC."
    }
  }
}
```
