---
id: report
title: Report Module
sidebar_label: Report
---

Das Reportmodul bietet die folgenden Tools:

- um Reports über abgestürzte Server zu erstellen
- Logs von Servern automatisch auf einen PasteServer hochladen

## Configuration {#configuration}

Die Konfigurationsdatei befindet sich unter folgendem Pfad: `modules/CloudNet-Report/config.json`

### savingRecords {#savingrecords}

Aktiviert (oder deaktiviert) die Aufzeichnungen von Serverabstürzen (`true`/`false`)

### recordDestinationDirectory {#recorddestinationdirectory}

Der Pfad, in dem die Records gespeichert werden sollen

### pasteServerType {#pasteservertype}

Der derzeit einzige unterstützte Typ ist `HASTE`
Dies unterstützt jeden PasteServer, der die Hastebin-API unterstützt, zum Beispiel den [PasteServer](https://github.com/juliarn/PasteServer#api)
Dieser PasteServer beinhaltet zusätzlich die Möglichkeit, das Dokument mit einem `deleteSecret` wieder zu löschen.
Die Cloud teilt dir dieses Geheimnis mit, falls verfügbar.

### pasteServerUrl {#pasteserverurl}

Dies definiert die BaseURL des PasteServers, der verwendet werden soll.

## Sample Configuration {#sample-configuration}

Die Standardkonfiguration des Reportmoduls sieht folgendermaßen aus:

```json
{
  "savingRecords": true,
  "recordDestinationDirectory": "records",
  "pasteServerType": "HASTE",
  "pasteServerUrl": "https://hasteb.in"
}
```
