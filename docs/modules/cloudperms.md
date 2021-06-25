---
id: cloudperms
title: CloudPerms Module
sidebar_label: CloudPerms
---

The CloudPerms module provides access in Minecraft to the internal Permission Management of CloudNet just like any other permission plugin. The permissions can be managed using the `permissions` command in the Cloud.
## Configuration {#configuration}
### enabled {#enabled}
Enables (or disables) the CloudNet Permissions System (`true`/`false`)
### excludedGroups {#excludedgroups}
This is a JsonArray containing the names of the groups on which the Permission System should be disabled.
Example:
```json
  "excludedGroups": [
    "BauServer",
    "DevServer"
  ]
```
## Sample Configuration {#sample-configuration}
The default configuration of the CloudPerms Module looks like this:
```json
{
  "enabled": true,
  "excludedGroups": []
}
```