---
id: paste
title: Paste Command
sidebar_label: Paste
description: Uploads the full service console output to the configured paste server.
---

The `paste` command is used to upload the full service console output to the configured paste server.

Permission: `cloudnet.command.paste`  
Aliases: `paste`, `haste`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `paste` command.  
Please have a look below for any further information.
```
COMMAND:  - paste service <name>
COMMAND:  - paste node
COMMAND:  - paste modules
COMMAND:  - paste tasks
COMMAND:  - paste all
```

## paste service {#paste-service}
**Usage:** `paste service <name>`

This command uploads the console output of the given service to the configured paste server.

## paste node {#paste-node}
**Usage:** `paste node`

This command uploads the console output of the current node to the configured paste server.

## paste modules {#paste-modules}
**Usage:** `paste modules`

This command uploads a list of the modules and its configurations (on the current node) to the configured paste server.

## paste tasks {#paste-tasks}
**Usage:** `paste tasks`

This command uploads all task configurations of the current node to the configured paste server.

## paste all {#paste-all}
**Usage:** `paste all`

This command uploads all the information explained above to the configured paste server.


