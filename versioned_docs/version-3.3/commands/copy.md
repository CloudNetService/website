---
id: copy
title: Copy Command
sidebar_label: Copy
description: Copies a running service to a specific template.
---

The `copy` command is used to copy a running service to a specific template.

Permission: `cloudnet.command.copy`  
Aliases: `copy`, `cp`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `copy` command.  
Please have a look below for any further information.
```
COMMAND: cp <local service uniqueId | name> [excludes: spigot.jar;logs;plugins] | template=storage:prefix/name
```

## cp
**Usage:** `cp <local service uniqueId | name> [excludes: spigot.jar;logs;plugins] | template=storage:prefix/name`

The first argument has to be the name of the service you want to copy (e.g. `Lobby-1`).  
After that, you can exclude files which should not be copied into the template.  
At the end, separated with a `|` you can set a specific template to which the files should be copied.