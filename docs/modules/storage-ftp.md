---
id: storage-ftp
title: Storage-FTP Module
sidebar_label: Storage-FTP
---

The FTP module adds a new TemplateStorage to CloudNet. Using this module, you can store your templates on any FTP, FTPS or SFTP server.

## Configuration {#configuration}

### type {#type}

This sets the type of the storage. It can be `FTP`, `FTPS` or `SFTP`.

:::tip Info

The most common type is `SFTP`, this connection works with the default SSH-Server on most servers.

:::

### address {#address}

This is the host and port of your external storage.

### storage {#storage}

This parameter does not need to be changed.  
You need this when creating a template, it is the `storage` part of the template.

### username {#username}

The user used to access the external storage.

### password {#password}

The password of the user used to access the external storage.

### baseDirectory {#basedirectory}

CloudNet will install the templates in this directory (subdirectories will be created: `baseDirectory/PREFIX/NAME`)

## Sample configuration {#sample-configuration}

The default configuration of the FTP module looks like this:

```json
{
  "type": "FTP",
  "address": {
    "host": "127.0.0.1",
    "port": 21
  },
  "storage": "ftp",
  "username": "root",
  "password": "password",
  "baseDirectory": "/home/cloudnet"
}
```
