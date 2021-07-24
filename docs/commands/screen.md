---
id: screen
title: Screen Command
sidebar_label: Screen
description: Gives access (read & write) to the console from a service.
---

The `screen` command is used to get access to the console of a [service](../components/services.md).

Permission: `cloudnet.command.screen`  
Aliases: `screen`, `scr`, `console`

:::info Info

This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`

:::

This is a basic overview about the `screen` command.  
Please have a look below for any further information.

```
COMMAND:  - screen list
COMMAND:  - screen disableAll
COMMAND:  - screen toggle <local service name>
COMMAND:  - screen write <command> ...
```

## screen list {#screen-list}

**Usage:** `screen list`

This command lists the services for which you enabled the console output.

## screen disableAll {#screen-disableall}

**Usage:** `screen disableAll`

This command disables the output of all services.

## screen toggle {#screen-toggle}

**Usage:** `screen toggle <local service name>`

This command enables or disables the printing of the console output for the specified (local) service.

## screen write {#screen-write}

**Usage:** `screen write <command>`

This command executes the given command in the console of all enables screens.
