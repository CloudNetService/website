---
id: faq
title: FAQ
sidebar_label: FAQ
---

## General

### Config reset
Q: My config was resetted. Where do I get the default configurations?

A: You can use `<module> create entry <targetGroup>` to create a configuration entry for a specific targetGroup or use the default configs
[SyncProxy](modules/syncproxy.md#sample-configuration), [Bridge](modules/bridge.md#sample-configuration),
[NPC](modules/npc.md#sample-configuration), [Sign](modules/signs.md#sample-configuration)

### Snapshots
Q: How can I use a Snapshot version of CloudNet?

A: Snapshots can be enabled by setting the `cloudnet.snapshots.use-snapshots` property in the `launcher.cnl` to true and restarting the cloud.
This will check for new snapshots and download them on the start.

:::warning
Snapshot versions contain new features and bug fixes that may not have been tested sufficiently for productive use.   
It is important that you do not use snapshots on a production system, as errors and bugs may occur more frequently
:::

## Permissions
Questions regarding the permission system

### CloudNet permissions
Q: Which permissions are used by cloudnet?

```
commands:
  - cloudnet.command.cloudnet (Proxy)
  - cloudnet.command.cloudsign (Server)
  - cloudnet.command.cloudnpc (Server)
syncproxy:
  - cloudnet.syncproxy.maintenance - Join while maintenance
  - cloudnet.syncproxy.fulljoin - Join while proxy is full
  - cloudnet.syncproxy.notify- Get notified about services starting and stopping
bridge:
  - cloudnet.bridge.maintenance - Join while task is in maintenance
signs:
  - cloudnet.signs.knockback.bypass - Don't get pushed back from a nearby sign
ncps:
  - cloudnet.npcs.knockback.bypass - Don't get pushed back from a nearby NPC
chatcolor:
  - cloudnet.chat.color - Write with colors in the chat
```

### Tablist-prefixes
Q: Why are there no prefixes in my tablist?

A: CloudNet-SimpleNameTags has to be installed on the spigot server, you can find it in the CloudNet.zip in the extras/plugins folder.

Even with SimpleNameTags it doesn't work? If there is any scoreboard plugin installed on the server, just try it without that plugin.
The TabList is a scoreboard just like the sidebar and a player can only have one scoreboard at a time, probably this plugin overwrites the scoreboard by CloudNet.

### Chat-prefixes
Q: Why are there no prefixes in the chat?

A: CloudNet-Chat has to be installed on the spigot server, you can find it in the CloudNet.zip in the extras/plugins folder.