---
id: syncproxy
title: SyncProxy Command
sidebar_label: SyncProxy
description: For simple administration of the SyncProxy module.
---

The `syncproxy` command is used to manage the configuration of the [NPC Module](../modules/npcs.md).

Permission: `cloudnet.command.syncproxy`  
Aliases: `syncproxy`, `sp`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `syncproxy` command.  
Please have a look below for any further information.

```
COMMAND:  - syncproxy reload
COMMAND:  - syncproxy list
COMMAND:  - syncproxy create entry <targetGroup>
COMMAND:  - syncproxy target <targetGroup> maxPlayers <value>
COMMAND:  - syncproxy target <targetGroup> maxPlayers <enabled>
COMMAND:  - syncproxy target <targetGroup> whitelist
COMMAND:  - syncproxy target <targetGroup> whitelist add <name>
COMMAND:  - syncproxy target <targetGroup> whitelist remove <name>
COMMAND:  - syncproxy target <targetGroup> maintenance <enabled>
```

## syncproxy reload {#syncproxy-reload}

**Usage:** `synyproxy reload`

This command reloads the [SyncProxy-Module](../modules/syncproxy.md) Configuration and applies any changes.

## syncproxy list {#syncproxy-list}

**Usage:** `synyproxy list`

This command lists all configs for the different proxy groups.

## syncproxy create entry {#syncproxy-create-entry}

**Usage:** `syncproxy create entry <targetGroup>`

This command creates a new entry for the Motd, Tablist, ... of the specified [proxy targetGroup](./groups.md) in the [SyncProxy Configuration](../modules/syncproxy.md).  
You do not need to use this command, but it can help you if you are not sure how to do it.

## syncproxy target maxPlayers {#syncproxy-target-maxplayers}

**Usage:** `syncproxy target <targetGroup> maxPlayers <value>`

This command sets the max player count to the given amount for the specified proxy group.

## syncproxy target whitelist {#syncproxy-target-whitelist}

**Usage:** `syncproxy target <targetGroup> whitelist`

This command prints out the whitelisted people on the specified proxy group.

## syncproxy target whitelist add {#syncproxy-target-whitelist-add}

**Usage:** `syncproxy target <targetGroup> whitelist add <name>`

This command adds the given name to the maintenance whitelist of the specified proxy group.

## syncproxy target whitelist remove {#syncproxy-target-whitelist-remove}

**Usage:** `syncproxy target <targetGroup> whitelist remove <name>`

This command removes the given name from the maintenance whitelist of the specified proxy group.

## syncproxy target maintenance {#syncproxy-target-maintenance}

**Usage:** `syncproxy target <targetGroup> maintenance <enabled>`

This command enables (`true`) or disables (`false`) the maintenance for the specified proxy group.  
Possible arguments for `enabled` are "`true`" and "`false`".
