---
id: signs
title: Signs Command
sidebar_label: Signs
description: For simple administration of the Signs module.
---

The `signs` command is used to manage the configuration of the [Signs Module](../modules/signs.md#configuration).

Permission: `cloudnet.command.signs`  
Aliases: `signs`, `signs`, `cloud-signs`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `signs` command.  
Please have a look below for any further information.
```
COMMAND:  - signs reload
COMMAND:  - signs create entry <targetGroup> <BUKKIT, NUKKIT>
```

## signs reload {#signs-reload}
**Usage:** `signs reload`

This command reloads the [Signs-Module](../modules/signs.md) Configuration and applies any changes.

## signs create entry {#signs-create-entry}
**Usage:** `signs create entry <targetGroup> <BUKKIT, NUKKIT>`

This command creates a new entry for the given [target group](../components/groups.md) in the
[Signs Configuration](../modules/signs.md) with the given type (`BUKKIT` or `NUKKIT`).
