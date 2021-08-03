---
id: report
title: Report Command
sidebar_label: Report
description: Creates a file with all important data for support purposes or for developing CloudNet modules.
---

The `report` command is a useful command to gather information about the Cloud.
This can be requested in the [support](../index.md#support), so that better help can be provided.

Permission: `cloudnet.command.report`  
Aliases: `report`, `reports`

:::info Info

This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`

:::

This is a basic overview about the `report` command.  
Please have a look below for any further information.

```
COMMAND:  - report cloud
COMMAND:  - report heap
```

## report cloud {#report-cloud}

**Usage:** `report cloud`

This command creates a file with a lot of information about your cloud instances.
This includes the latest log lines, information on the threads used by the cloud, your nodes, your task configuration and more.

## report heap {#report-heap}

**Usage:** `report heap`

This command creates a heap dump of your Java Virtual Machine.
