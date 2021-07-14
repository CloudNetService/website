---
id: groups
title: Groups
---

Groups are intended to summarize [services](services.md) and [tasks](tasks.md). Each service belongs to one task, and it can have several groups.
They can add extra settings such as templates to a service. They can be managed with the [groups command](../commands/groups.md).

As an example, there is a group called "Lobby", the tasks "Lobby" and "PremiumLobby".
Both tasks can have the membership of the group "Lobby". The group "Lobby" might have the template `local:Lobby/default` assigned to,
which would mean that every service based on the "Lobby" or "PremiumLobby" task will have this template.

Another example would be the group "Global",
you can assign this group to every task with the [environment](tasks.md#environment) `MINECRAFT_SERVER` and then add a template to this group,
now every service based on a task with this environment will have the given template.
