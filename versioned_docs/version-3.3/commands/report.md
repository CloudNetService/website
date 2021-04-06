---
id: report
title: Report Command
sidebar_label: Report
description: Creates a file with all important data for a report or for develop modules for CloudNet.
---

The `report` command is a useful command to gather information about the Cloud.
It might be requested my our [support team](../index.md#support), when you contact them with a problem.

Permission: `cloudnet.command.report`  
Aliases: `report`, `reports`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `report` command.  
Please have a look below for any further information.
```
COMMAND:  - report cloud
COMMAND:  - report heap
```

## report cloud
**Usage:** `report cloud`

This command creates a file with a lot of information about your cloud instances.
This includes the latest log lines, information on the threads used by the cloud, your nodes, your task configuration and more.  

## report heap
**Usage:** `report heap`

This command creates a heap dump of your Java Virtual Machine.