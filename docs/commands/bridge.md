---
id: bridge
title: Bridge Command
sidebar_label: Bridge
description: For simple administration of the Bridge-Module.
---

The `paste` command is used to manage the configuration of the [Bridge-Module](../modules/bridge.md).

Permission: `cloudnet.command.bridge`  
Aliases: `bridge`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `bridge` command.  
Please have a look below for any further information.
```
COMMAND:  - bridge reload
COMMAND:  - bridge task <name> set requiredPermission <requiredPermission>
```

## reload {#reload}
**Usage:** `bridge reload`

This command reloads the configuration of the bridge module, to apply any changes made manually.

## bridge task set requiredPermission {#bridge-task-set-requiredpermission}
**Usage:** `bridge task <name> set requiredPermission <requiredPermission>`

This command sets a required permission (to be able to join) for the task with the given `name`.