---
title: CloudNet Release v3.4.0 - Earthquake!
description: We are proud to release a new version of CloudNet v3, which introduces a lot of performance improvements, especially for the cluster.
author: Linus F. (Sarsum)
author_title: CloudNetService Management
author_url: https://github.com/Sarsum
author_image_url: https://avatars.githubusercontent.com/u/33085157
tags: [cloudnet-v3]
---

We are proudly presenting a new release version of CloudNet v3!  
It has been a while since we released the 3.3 update. Quite a long time, the last release was on 05/16/2020
Since then quite a lot has changed in the system.

<!--truncate-->

- More than 1220 classes have been edited and added in over 450 commits.
- 19 people were involved in the update, so not only the team members contributed, but also the community.

## API {#api}

Before we get to the overview of all changes, a small word about the API would be important.
Many of the API methods that were in 3.3 for a long time (some since 3.0) have been replaced and marked as deprecated.
Please read the documentation, for each method the replacement has been added, nothing was removed just like that.
Methods that were annotated as ScheduledForRemoval for 3.4 were removed.

The dependency information can be found [here](#)

## Changes {#changes}

- **Java 16 and Minecraft 1.17 are now supported!**
- Many synchronization issues of the cluster have been fixed.
- Performance improvements in many places and all bugs that are known to date have been fixed.
- IPv6 is now supported everywhere.
- A possibility to set the default JVM flags for all services has been added in the node configuration file.
- In the node config you can now set a custom time to wait until a service is hard killed.
- All tasks can now be started with a separate JVM command, for example to use Java 8 for lobbies and Java 16 for proxies.
- All tasks can now have a specific permission needed to enter it.
- Services are no longer managed by all nodes, one node takes over the leader role in the cluster (so-called "head node") and ensures that services are started/stopped.
- All messages are now also available in the French language.
- More functionalities have been added to the LabyMod module.

You can find a more detailed changelog [here](#)

## About the cluster issues {#cluster-issues}

We were not able to test the CloudSystem in a large scale with more than three nodes and a couple of hundred players before.  
A user has reached out to us having troubles with multiple servers having the same id (such as "Lobby-1" on different nodes or even the same).  
Before the version 3.4, we tried to let the nodes decide themselves if they needed to start a new server.
Unfortunately, this did not work well, and we identified it to be the cause of the issues.  
Therefore, we implement a Head-Node system. Once the nodes connect to each other, they exchange their time of boot and
use this to determine the current Head-Node.  
If the Head-Node disconnects, every other Node knows which one will be the next Head-Node, and the Cluster will just continue where was before.

After fixing the cluster issues, we heard of a few large networks not having any further problems.  
To give an idea: We know that CloudNet worked well with 6 nodes in the cluster and more than 600 players connected at the same time!

A very special thank you to the networks which worked closely with us to resolve the issues and test the fixes!

## Conclusion {#conclusion}

We hope you will enjoy this big update!

**Please remember, CloudNet is provided as-is - we are not responsible for data loss or corruption. You are encouraged to back up your files before any updates!**

## TL;DR {#tldr}

- We [changed a lot in the API](#api), please check your code and replace any deprecated methods with the replacements referred in the documentation!
- Support for **Minecraft 1.17** and IPv6 has been added.
- The performance has been drastically improved. Especially with the [cluster](#cluster-issues)
