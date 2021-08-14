---
id: service
title: Service Command
sidebar_label: Service
description: Manages all services in the cluster
---

The `service` command is used to manage all local services that are provided.

Permission: `cloudnet.command.service`  
Aliases: `paste`, `haste`

:::info Info

This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`

:::

This is a basic overview about the `service` command.  
Please have a look below for any further information.

```
COMMAND:  - service list | id=<text> | task=<text> | group=<text> | --names
COMMAND:  - service <name>
COMMAND:  - service <name> info
COMMAND:  - service <name> start
COMMAND:  - service <name> stop | --force
COMMAND:  - service <name> delete
COMMAND:  - service <name> includeInclusions
COMMAND:  - service <name> includeTemplates
COMMAND:  - service <name> deployResources
COMMAND:  - service <name> restart
COMMAND:  - service <name> command <command> ...
COMMAND:  - service <name> add deployment <storage:prefix/name> [excludedFiles separated by ";"]
COMMAND:  - service <name> add template <storage:prefix/name>
COMMAND:  - service <name> add inclusion <url> <targetPath>
```

## service list {#service-list}

**Usage:** `service list | id=<text> | task=<text> | group=<text> | --names`

This command lists all services which are registered on the cloud. You can filter the output with the following arguments,
each separated with a `|`:

- `id=<text>` - to filter the services by their id
- `task=<text>` - to filter the services by their task
- `group=<text>` - to filter the services by a group
- `--names` - to print just their names instead of more information on each service

## service {#service}

**Usage:** `service <name>`

This command prints basic information about the service with the given `name`.

## service info {#service-info}

**Usage:** `service <name> info`

This command prints detailed information about the service with the given `name`.

## service start {#service-start}

**Usage:** `service <name> start`

This command starts the service with the given `name`, if it exists but is stopped ("prepared").

## service stop {#service-stop}

**Usage:** `service <name> stop | --force`

This command (gracefully) shutdowns the service with the given `name`. You can add the `| --force` argument to force the shutdown.

## service delete {#service-delete}

**Usage:** `service <name> delete`

This command deletes the service with the given `name`.

## service includeInclusions {#service-includeinclusions}

**Usage:** `service <name> includeInclusions`

This command downloads all [inclusions](../components/tasks.md#includes) that have not yet been downloaded.  
It's useful if new inclusions are added or updated, and they need to be updated for the service

## service includeTemplates {#service-includetemplates}

**Usage:** `service <name> includeTemplates`

This command downloads all [templates](../components/tasks.md#templates) that have not yet been downloaded.  
It's useful if new templates are added or updated, and they need to be updated for the service

## service deployResources {#service-deployresources}

**Usage:** `service <name> deployResources`

This command deploys the files of the service with the given `name` to the added
[deployments](../components/tasks.md#deployments).

## service restart {#service-restart}

**Usage:** `service <name> restart`

This command restarts the service with the given `name`, **without deleting the files**.
:::tip
You can use that instead of the `/reload` command, which is not supported by the cloud!
:::

## service command {#service-command}

**Usage:** `service <name> command <command> ...`

This command executes the provided command on the service with the given `name`.

## service add deployment {#service-add-deployment}

**Usage:** `service <name> add deployment <storage:prefix/name> [excludedFiles separated by ";"]`

This command adds a new [deployment](../components/tasks.md#deployments) to the service with the given `name`.

## service add template {#service-add-template}

**Usage:** `service <name> add template <storage:prefix/name>`

This command adds a new [template](../components/tasks.md#templates) to the service with the given `name`.

## service add inclusion {#service-add-inclusion}

**Usage:** `service <name> add inclusion <url> <targetPath>`

This command adds a new [inclusion](../components/tasks.md#includes) to the service with the given `name`.
