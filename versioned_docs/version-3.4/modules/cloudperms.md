---
id: cloudperms
title: CloudPerms Module
sidebar_label: CloudPerms
---

Das CloudPerms-Modul von CloudNet bietet in Minecraft wie jedes andere Permissions-Plugin Zugriff auf die interne Permissionsverwaltung. Die Rechte können mit dem Befehl `permissions` in der Cloud verwaltet werden.

## Configuration {#configuration}

### enabled {#enabled}

Aktiviert (oder deaktiviert) das CloudNet Permissions System (`true`/`false`)

### excludedGroups {#excludedgroups}

Dies ist ein JsonArray, das die Namen der groups enthält, für die das Permissionssystem deaktiviert werden soll.
Beispiel:

```json
  "excludedGroups": [
    "BauServer",
    "DevServer"
  ]
```

## Sample Configuration {#sample-configuration}

Die Standardkonfiguration des CloudPerms-Moduls sieht folgendermaßen aus:

```json
{
  "enabled": true,
  "excludedGroups": []
}
```
