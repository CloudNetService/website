---
id: cluster
title: Cluster Command
sidebar_label: Cluster
description: Gives an overview of what is known in the cluster and manages it.
---

The `cluster` command is used to manage your cluster of CloudNet nodes.  
[Here](../setup/cluster.md) you can find information on how to set up the cluster.

Permission: `cloudnet.command.cluster`  
Aliases: `cluster`, `clu`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `cluster` command.  
Please have a look below for any further information.
```
COMMAND:  - cluster shutdown
COMMAND:  - cluster add <nodeId> <host>
COMMAND:  - cluster remove <nodeId>
COMMAND:  - cluster nodes | id=<id>
COMMAND:  - cluster push all
COMMAND:  - cluster push local-template <prefix/name>
COMMAND:  - cluster push local-templates
COMMAND:  - cluster push tasks
COMMAND:  - cluster push groups
COMMAND:  - cluster push local-perms
```

## cluster shutdown
**Usage:** `cluster shutdown`

This sends a shutdown signal to all nodes of your cluster.
Therefore, you do not have to stop every yourself in case you want to shut down.

## cluster add
**Usage:** `cluster add <nodeId> <host>`

With this command you can add a new node to your local configuration.  
`NodeID` is the ID or Name of the Node, `Host` the ip address of the new node.

## cluster remove
**Usage:** `cluster remove <nodeId>`

This command removes the node with the given `nodeId` from your local configuration.

## cluster nodes
**Usage:** `cluster nodes`

This prints information about the nodes in your cluster.  
You can add `| id=<nodeId>` to the command, to view information for one specific node.

## cluster push all
**Usage:** `cluster push all`

This command pushes the local configurations ([templates](../components/templates.md), [tasks](../components/tasks.md),
[groups](../components/groups.md) and [permissions](../modules/cloudperms.md)) to every node in the cluster.

## cluster push local-template
**Usage:** `cluster push local-template <prefix/name>`

This command pushes the specified [local template](../components/templates.md) to every node in the cluster.

## cluster push local-templates
**Usage:** `cluster push local-templates`

This command pushes all local-templates to every node in the cluster.

## cluster push tasks
**Usage:** `cluster push tasks`

This command pushes the local task configurations to every node in the cluster.

## cluster push groups
**Usage:** `cluster push groups`

This command pushes the local groups configuration to every node in the cluster.


## cluster push local-perms
**Usage:** `cluster push local-perms`

This command pushes the local permission configuration to every node in the cluster.