---
id: create
title: Create Command
sidebar_label: Create
description: Creates one or more new services based on a task or completely independent.
---

The `create` command is used to create one or more new services based on a task or completely independent.

Permission: `cloudnet.command.create`  
Aliases: `create`

:::info

This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`

:::

This is a basic overview about the `create` command.  
Please have a look below for any further information.
```
COMMAND:  - create by <task> <count>
COMMAND:  - create new <name> <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG> <count>
COMMAND: parameters:
COMMAND: - task=<name>
COMMAND: - node=[Node-1;Node-2]
COMMAND: - autoDeleteOnStop=<true : false>
COMMAND: - static=<true : false>
COMMAND: - port=<port>
COMMAND: - memory=<mb>
COMMAND: - groups=[Lobby, Prime, TestLobby]
COMMAND: - runtime=<name>
COMMAND: - jvmOptions=[-XX:OptimizeStringConcat;-Xms256M]
COMMAND: - templates=[storage:prefix/name  local:Lobby/Lobby;local:/PremiumLobby]
COMMAND: - deployments=[storage:prefix/name  local:Lobby/Lobby;local:/PremiumLobby]
COMMAND: - --start
```

## create by {#create-by}
**Usage:** `create by <task> <amount>`

This command creates a specified `amount` of new [services](../components/services.md) based on the specified `task`.

## create new {#create-new}
**Usage:** `create new <name> <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG> <amount>`

This command creates a specified `amount` independent service based on the `name` and type provided.  
You can add the following parameters to your command:
- `task=<name>` - to set the name of the task which configurations should be included
- `node=[Node-1;Node-2]` - to set the nodes on which the services are [allowed to start](../components/tasks.md#associatednodes)
- `autoDeleteOnStop=<true : false>` - to enable (`true`) or disable (`false`) the
  [auto deletion](../components/tasks.md#autodeleteonstop) once the service is stopped.
- `static=<true : false>` - to make the services [static](../components/tasks.md#staticservices) (`true`) or not (`false`)
- `port=<port>` - to set the [start port](../components/tasks.md#startport) which should be used
- `memory=<mb>` - to set the [max heap memory](../components/tasks.md#maxheapmemorysize) of the task
- `runtime=<name>` - to a custom [runtime](../components/tasks.md#runtime)
- `jvmOptions=[-XX:OptimizeStringConcat;-Xms256M]` - to set custom [jvm options](../components/tasks.md#jvmoptions)
- `templates=[storage:prefix/name]` - to include templates for the services  
  e.g. `templates=[local:Lobby/Lobby;local:/PremiumLobby]`
- `deployments=[storage:prefix/name]` - to include [deployments](../components/tasks.md#deployments) for the services
  e.g. `deployments=[local:Lobby/Lobby;local:/PremiumLobby]`
- `--start` - to start the services after the creation