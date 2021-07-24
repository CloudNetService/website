---
id: npc
title: NPC Command
sidebar_label: NPC
description: For simple administration of the NPCs module.
---

The `npc` command is used to manage the configuration of the [NPC Module](../modules/npcs.md).

Permission: `cloudnet.command.npcs`  
Aliases: `npc`, `npcs`, `cloud-npc`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `npc` command.  
Please have a look below for any further information.

```
COMMAND:  - npc create entry <targetGroup>
COMMAND:  - npc reload
```

## npc create entry {#npc-create-entry}

**Usage:** `npc create entry <targetGroup>`

This command creates a new entry for the given [target group](../components/groups.md) in the
[NPC Configuration](../modules/npcs.md).

## npc reload {#npc-reload}

**Usage:** `npc reload`
This command reloads the [NPC-Module](../modules/npcs.md) Configuration and applies any changes.
