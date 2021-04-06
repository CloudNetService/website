---
id: syncproxy
title: SyncProxy Command
sidebar_label: SyncProxy
description: For simple administration of the SyncProxy module.
---

The `syncproxy` command is used to manage the configuration of the [NPC Module](../modules/npc.md).

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
COMMAND:  - syncproxy target <targetGroup> maxPlayers <value>
COMMAND:  - syncproxy target <targetGroup> maxPlayers <enabled>
COMMAND:  - syncproxy target <targetGroup> whitelist
COMMAND:  - syncproxy target <targetGroup> whitelist add <name>
COMMAND:  - syncproxy target <targetGroup> whitelist remove <name>
COMMAND:  - syncproxy target <targetGroup> maintenance <enabled>
```

## syncproxy reload
This command reloads the [SyncProxy-Module](../modules/syncproxy.md) Configuration and applies any changes.

## syncproxy list
This command lists all configs for the different proxy groups.

## syncproxy target &lt;targetGroup&gt; maxPlayers &lt;value&gt;
This command sets the max player count to the given amount for the specified proxy group.

## syncproxy target &lt;targetGroup&gt; whitelist
This command prints out the whitelisted people on the specified proxy group.

## syncproxy target &lt;targetGroup&gt; whitelist add &lt;name&gt;
This command adds the given name to the maintenance whitelist of the specified proxy group.

## syncproxy target &lt;targetGroup&gt; whitelist remove &lt;name&gt;
This command removes the given name from the maintenance whitelist of the specified proxy group.

## syncproxy target &lt;targetGroup&gt; maintenance &lt;enabled&gt;
This command enables (`true`) or disables (`false`) the maintenance for the specified proxy group.  
Possible arguments for `enabled` are "`true`" and "`false`".