---
id: template
title: Template Command
sidebar_label: Template
description: Manages the templates and allows installation of .jar files.
---

The `template` command is used to manage [Templates](../components/templates.md)

Permission: `cloudnet.command.template`  
Aliases: `template`, `t`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `template` command.  
Please have a look below for any further information.
```
COMMAND:  - template list [storage]
COMMAND:  - template versions
COMMAND:  - template install <template> <versionType> <version> | --force | example: template install Lobby/default paperspigot 1.13.2
COMMAND:  - template delete <template>
COMMAND:  - template create <template> <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>
COMMAND:  - template copy <storage:prefix/name (sourceTemplate)> <storage:prefix/name (targetTemplate)>
```

## template list
**Usage:** `template list [storage]`  

This command lists the available templates, if given filtered with the provided storage.

## template versions
This command lists all available versions which can be installed with the [template install](#template-install) command.

## template install
**Usage:** `template install <storage:prefix/name> <versionType> <version>`  

This command sets the max player count to the given amount for the specified proxy group.

## template delete
**Usage:** `template delete <storage:prefix/name>`  

This command deletes the given template.

## template create
**Usage:** `template create <storage:prefix/name> <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>`

This command creates a template with the server type.

## template copy
**Usage:** `template copy <storage:prefix/name (sourceTemplate)> <storage:prefix/name (targetTemplate)>`

This command copies the given sourceTemplate to the given targetTemplate.