---
id: report
title: Report Module
sidebar_label: Report
---

The Report Module provides the following tools:

- to create records of crashed servers
- upload logs of servers automatically to a PasteServer

## Configuration {#configuration}

The configuration file is located under the following path: `modules/CloudNet-Report/config.json`

### savingRecords {#savingrecords}

Enables (or disables) the records of crashing servers (`true`/`false`)

### recordDestinationDirectory {#recorddestinationdirectory}

The directory in which the records should be saved

### pasteServerType {#pasteservertype}

The currently only supported type is `HASTE`
This supports every PasteServer which supports the Hastebin API, for example the [PasteServer](https://github.com/juliarn/PasteServer#api)  
This PasteServer includes additionally the opportunity to delete the document again with a `deleteSecret`.  
The Cloud will tell you this secret if available.

### pasteServerUrl {#pasteserverurl}

This defines the BaseURL of the PasteServer which should be used.

## Sample Configuration {#sample-configuration}

The default configuration of the Report Module looks like this:

```json
{
  "savingRecords": true,
  "recordDestinationDirectory": "records",
  "pasteServerType": "HASTE",
  "pasteServerUrl": "https://hasteb.in"
}
```
