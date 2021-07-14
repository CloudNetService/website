---
id: groups
title: Groups Command
sidebar_label: Groups
description: Manages the configurations of all persistent groups.
---

The `groups` command is used to manage the configurations of all persistent groups.

Permission: `cloudnet.command.groups`  
Aliases: `groups`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `groups` command.  
Please have a look below for any further information.

```
COMMAND:  - groups delete <name>
COMMAND:  - groups create <name>
COMMAND:  - groups reload
COMMAND:  - groups list | name=NAME
COMMAND:  - groups group <name>
COMMAND:  - groups group <name> add deployment <storage:prefix/name> [excludedFiles separated by ";"]
COMMAND:  - groups group <name> add template <storage:prefix/name>
COMMAND:  - groups group <name> add inclusion <url> <targetPath>
COMMAND:  - groups group <name> add jvmOption <value> ...
COMMAND:  - groups group <name> add processParameter <value> ...
COMMAND:  - groups group <name> remove deployment <storage:prefix/name>
COMMAND:  - groups group <name> remove template <storage:prefix/name>
COMMAND:  - groups group <name> remove inclusion <url> <targetPath>
COMMAND:  - groups group <name> remove jvmOption <value> ...
COMMAND:  - groups group <name> remove processParameter <value> ...
COMMAND:  - groups group <name> clear jvmOptions
COMMAND:  - groups group <name> add environment <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>
COMMAND:  - groups group <name> remove environment <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>
```

## groups delete {#groups-delete}

**Usage:** `groups delete <name>`

This command deletes the group with the given `name`.

## groups create {#groups-create}

**Usage:** `groups create <name>`

This command creates a new group with the given `name`.

## groups reload {#groups-reload}

**Usage:** `groups reload`

This command the local group configuration, to apply any changes made manually.

## groups list {#groups-list}

**Usage:** `groups list | name=NAME`

This command lists all available groups. If you want to filter the output, you can add the `| name=NAME` argument.

## groups group {#groups-group}

**Usage:** `groups group <name>`

This command prints the configuration of the group with the given `name`.

## groups group add deployment {#groups-group-add-deployment}

**Usage:** `groups group <name> add deployment <storage:prefix/name> [excludedFiles separated by ";"]`

This command creates a new [deployment](../components/tasks.md#deployments) for the group with the given `name`.
Example: `tasks task Lobby add deployment local:Lobby/default [spigot.jar;log.txt]`

:::note
The excluded files can be omitted. In that case, all files are copied.
:::

## groups group add template {#groups-group-add-template}

**Usage:** `groups group <name> add template <storage:prefix/name>`

This command adds a new [template](../components/templates.md) to the group with the given `name`.

## groups group add inclusion {#groups-group-add-inclusion}

**Usage:** `groups group <name> add inclusion <url> <targetPath>`

This command adds a new [inclusion](../components/tasks.md#includes) to the group with the given `name`.  
Please refer to the linked site for further information on the arguments.

## groups group add jvmOption {#groups-group-add-jvmoption}

**Usage:** `groups group <name> add jvmOption <value> ...`

This command adds the given [jvm option(s)](../components/tasks.md#jvmoptions) to the group specified with `name`.

## groups group add processParameter {#groups-group-add-processparameter}

**Usage:** `groups group <name> add processParameter <value> ...`

This command adds the given [process parameter(s)](../components/tasks.md#processparameters) to the group specified with `name`.

## groups group remove deployment {#groups-group-remove-deployment}

**Usage:** `groups group <name> remove deployment <storage:prefix/name>`

This command removes the specified [deployment](../components/tasks.md#deployments) from the group with the given `name`.

## groups group remove template {#groups-group-remove-template}

**Usage:** `groups group <name> remove template <storage:prefix/name>`

This command removes the specified [template](../components/tasks.md#templates) from the group with the given `name`.

## groups group remove inclusion {#groups-group-remove-inclusion}

**Usage:** `groups group <name> remove inclusion <url> <targetPath>`

This command removes the specified [inclusion](../components/tasks.md#includes) from the group with the given `name`.

## groups group remove jvmOption {#groups-group-remove-jvmoption}

**Usage:** `tasks task <name> remove jvmOption <value> ...`

This command removes the specified [jvm option(s)](../components/tasks.md#jvmoptions) from the task with the given `name`.

## groups group remove processParameter {#groups-group-remove-processparameter}

**Usage:** `groups group <name> remove processParameter <value> ...`

This command removes the specified [process parameter(s)](../components/tasks.md#processparameters) from the group with the given `name`.

## groups group clear jvmOptions {#groups-group-clear-jvmoptions}

**Usage:** `groups group <name> clear jvmOptions`

This command removes all [jvm options](../components/tasks.md#jvmoptions) from the group with the given `name`.

## groups group add environment {#groups-group-add-environment}

**Usage:** `groups group <name> add environment <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>`

This command adds the specified environment to the group with the given `name`.

## groups group remove environment {#groups-group-remove-environment}

**Usage:** `groups group <name> remove environment <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>`

This command removes the specified environment from the group with the given `name`.
