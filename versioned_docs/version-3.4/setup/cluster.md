---
id: cluster
title: Cluster
---

## Requirements {#requirements}

- At least one running Node for the Cluster
- A central database (e.g. MySQL, NOT the default H2-Database)

## Setup {#setup}

1. Start the new Node for the first time
2. Answer the question `Is this node part of a cluster? (MultiRoot) >` during the setup process with `yes`
3. Enter the name of the new node (e.g. `Node-2`)
4. Enter the ClusterID of the existing cluster. You can find it in any `config.json` of a set up node in the section `cluster`.
5. Enter the names of all existing nodes (separated as said by a `;`)
6. Enter the host of each node in the format IP:PORT (e.g. `127.0.0.1:1410`)
7. Add the new node on every existing node of the Cluster with the `clu add <Name> <Host>` command (e.g. `clu add Node-2 127.0.0.1`)

:::tip Correct

INFO: The connection to the node [uniqueId=Node-2] was successfully established!

:::

The connection has successfully been established and the new Node is added to the cluster.
You now might want to add the Node to a few tasks and push everything (Tasks Configs, Templates, ...) to the new Node by executing `clu push all` on any previously existing node.

:::danger Error

WARNING: Authorization unfortunately failed to a node in the network

:::

The connection to at least one of the existing nodes in the cluster failed.
Please ensure that you used the correct ClusterID in Step 4 and that you added the new node to every existing node as described in Step 7.
