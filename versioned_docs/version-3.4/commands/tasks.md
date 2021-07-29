---
id: tasks
title: Tasks Command
sidebar_label: Tasks
description: Manages the configurations of all persistent tasks
---

The `tasks` command is used to manage the configurations of all persistent tasks.

Permission: `cloudnet.command.tasks`  
Aliases: `tasks`

:::info Info

This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`

:::

This is a basic overview about the `tasks` command.  
Please have a look below for any further information.

```
COMMAND:  - tasks setup
COMMAND:  - tasks reload
COMMAND:  - tasks list | name=NAME
COMMAND:  - tasks create <name> <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>
COMMAND:  - tasks delete <name>
COMMAND:  - tasks task <name>
COMMAND:  - tasks task <name> set minServiceCount <amount>
COMMAND:  - tasks task <name> set maintenance <enabled>
COMMAND:  - tasks task <name> set maxHeapMemory <memory>
COMMAND:  - tasks task <name> set startPort <startPort>
COMMAND:  - tasks task <name> set autoDeleteOnStop <autoDeleteOnStop>
COMMAND:  - tasks task <name> set staticServices <staticServices>
COMMAND:  - tasks task <name> set environment <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>
COMMAND:  - tasks task <name> set disableIpRewrite <value>
COMMAND:  - tasks task <name> set javaCommand <value>
COMMAND:  - tasks task <name> add node <uniqueId>
COMMAND:  - tasks task <name> add group <name>
COMMAND:  - tasks task <name> remove node <uniqueId>
COMMAND:  - tasks task <name> remove group <name>
COMMAND:  - tasks task <name> add deployment <storage:prefix/name> [excludedFiles separated by ";"]
COMMAND:  - tasks task <name> add template <storage:prefix/name>
COMMAND:  - tasks task <name> add inclusion <url> <targetPath>
COMMAND:  - tasks task <name> add jvmOption <value> ...
COMMAND:  - tasks task <name> add processParameter <value> ...
COMMAND:  - tasks task <name> remove deployment <storage:prefix/name>
COMMAND:  - tasks task <name> remove template <storage:prefix/name>
COMMAND:  - tasks task <name> remove inclusion <url> <targetPath>
COMMAND:  - tasks task <name> remove jvmOption <value> ...
COMMAND:  - tasks task <name> remove processParameter <value> ...
COMMAND:  - tasks task <name> clear jvmOptions
```

## tasks setup {#tasks-setup}

**Usage:** `tasks setup`

This command is used to start an interactive setup for a new task.

:::caution Warning

This specific command can only be used in the node console, since it starts an interactive setup which is not possible ingame!

:::

## tasks reload {#tasks-reload}

**Usage:** `tasks reload`

This command reloads all task configurations, to apply changes made to the files manually.

## tasks list {#tasks-list}

**Usage:** `tasks list | name=NAME`

This command lists all available tasks on the current node.  
The argument `| name=NAME` is optional and can be omitted. It can be used to filter the output.

## tasks create {#tasks-create}

**Usage:** `tasks create <name> <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>`

This command creates a new task with the given `name` for the specified software type.

## tasks delete {#tasks-delete}

**Usage:** `tasks delete <name>`

This command deletes the task with the given `name`.

## tasks task {#tasks-task}

**Usage:** `tasks task <name>`

This command prints the configuration of the task with the given `name`.

## tasks task set minServiceCount {#tasks-task-set-minservicecount}

**Usage:** `tasks task <name> set minServiceCount <amount>`

This command sets the [minServiceCount](../components/tasks.md#minservicecount) specified in `amount`
for the task with the given `name`.

## tasks task set maintenance {#tasks-task-set-maintenance}

**Usage:** `tasks task <name> set maintenance <enabled>`

This command enables (`true`) or disables (`false`) the [maintenance mode](../components/tasks.md#maintenance) of the task with the given `name`.

## tasks task set maxHeapMemory {#tasks-task-set-maxheapmemory}

**Usage:** `tasks task <name> set maxHeapMemory <memory>`

This command sets the [max heap memory](../components/tasks.md#maxheapmemorysize) specified in `memory` (in MB)
for the task with the given `name`.

## tasks task set startPort {#tasks-task-set-startport}

**Usage:** `tasks task <name> set startPort <startPort>`

This command sets the [start port](../components/tasks.md#startport) specified in `startPort` for the task with the given `name`.

## tasks task set autoDeleteOnStop {#tasks-task-set-autodeleteonstop}

**Usage:** `tasks task <name> set autoDeleteOnStop <autoDeleteOnStop>`

This command enables (`true`) or disables (`false`) [auto delete on stop](../components/tasks.md#autodeleteonstop)
for the task with the given `name`.

## tasks task set staticServices {#tasks-task-set-staticservices}

**Usage:** `tasks task <name> set staticServices <staticServices>`

This command enables (`true`) or disables (`false`) [static services](../components/tasks.md#staticservices)
for the task with the given `name`.

## tasks task set environment {#tasks-task-set-environment}

**Usage:** `tasks task <name> set environment <MINECRAFT_SERVER, GLOWSTONE, NUKKIT, GO_MINT, BUNGEECORD, VELOCITY, WATERDOG>`

This command sets the specified [environment](../components/tasks.md#environment) for the task with the given `name`.

## tasks task set disableIpRewrite {#tasks-task-set-disableiprewrite}

**Usage:** `tasks task <name> set disableIpRewrite <value>`

This command disables (`true`) or enables (`false`) the [ip rewrite](../components/tasks.md#disableiprewrite) of the task.

::: Caution Warning

We recommend the usage of this feature just in very special cases.  
For example, when you want to have several proxies for the Bedrock Edition.
(Unfortunately, the Bedrock Edition does not support SRV-Records. Please contact us in that case for further assistance!)

:::

## tasks task set javaCommand {#tasks-task-set-javaCommand}

**Usage:** `tasks task <name> set javaCommand <value>`
This command sets the path to the Java installation with which services of this task are started.

## tasks task add node {#tasks-task-add-node}

**Usage:** `tasks task <name> add node <uniqueId>`

This command allows the task with the given `name` to start on the node with the specified `uniqueId`.

## tasks task add group {#tasks-task-add-group}

**Usage:** `tasks task <name> add group <name>`

This command adds the given [group](../components/groups.md) to the specified task.

## tasks task remove node {#tasks-task-remove-node}

**Usage:** `tasks task <name> remove node <uniqueId>`

This command removes the given node from the task specified with `name`.
Therefore, the task will no longer start services on that node.

## tasks task remove group {#tasks-task-remove-group}

**Usage:** `tasks task <name> remove group <name>`

This command removes the specified [group](../components/groups.md) from task with the given `name`.

## tasks task add deployment {#tasks-task-add-deployment}

**Usage:** `tasks task <name> add deployment <storage:prefix/name> [excludedFiles separated by ";"]`

This command creates a new [deployment](../components/tasks.md#deployments) for the task with the given `name`.
Example: `tasks task Lobby add deployment local:Lobby/default [spigot.jar;log.txt]`

:::note Note

The excluded files can be omitted. In that case, all files are copied.

:::

## tasks task add template {#tasks-task-add-template}

**Usage:** `tasks task <name> add template <storage:prefix/name>`

This command adds a new [template](../components/templates.md) to the task with the given `name`.

## tasks task add inclusion {#tasks-task-add-inclusion}

**Usage:** `tasks task <name> add inclusion <url> <targetPath>`

This command adds a new [inclusion](../components/tasks.md#includes) to the task with the given `name`.  
Please refer to the linked site for further information on the arguments.

## tasks task add jvmOption {#tasks-task-add-jvmoption}

**Usage:** `tasks task <name> add jvmOption <value> ...`

This command adds the given [jvm option(s)](../components/tasks.md#jvmoptions) to the task specified with `name`.

## tasks task add processParameter {#tasks-task-add-processparameter}

**Usage:** `tasks task <name> add processParameter <value> ...`

This command adds the given [process parameter(s)](../components/tasks.md#processparameters) to the task specified with `name`.

## tasks task remove deployment {#tasks-task-remove-deployment}

**Usage:** `tasks task <name> remove deployment <storage:prefix/name>`

This command removes the specified [deployment](../components/tasks.md#deployments) from the task with the given `name`.

## tasks task remove template {#tasks-task-remove-template}

**Usage:** `tasks task <name> remove template <storage:prefix/name>`

This command removes the specified [template](../components/tasks.md#templates) from the task with the given `name`.

## tasks task remove inclusion {#tasks-task-remove-inclusion}

**Usage:** `tasks task <name> remove inclusion <url> <targetPath>`

This command removes the specified [inclusion](../components/tasks.md#includes) from the task with the given `name`.

## tasks task remove jvmOption {#tasks-task-remove-jvmoption}

**Usage:** `tasks task <name> remove jvmOption <value> ...`

This command removes the specified [jvm option(s)](../components/tasks.md#jvmoptions) from the task with the given `name`.

## tasks task remove processParameter {#tasks-task-remove-processparameter}

**Usage:** `tasks task <name> remove processParameter <value> ...`

This command removes the specified [process parameter(s)](../components/tasks.md#processparameters) from the task with the given `name`.

## tasks task clear jvmOptions {#tasks-task-clear-jvmoptions}

**Usage:** `tasks task <name> clear jvmOptions`

This command removes all [jvm options](../components/tasks.md#jvmoptions) from the task with the given `name`.
