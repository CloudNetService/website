---
id: database-mysql
title: Database-MySQL Module
sidebar_label: Database-MySQL
---

By default, CloudNet uses [H2](https://h2database.com/) to store its data, this module replaces the H2 database with your MySQL database.  
Without any modules, CloudNet will only store PermissionData in this database. The default modules extend this by PlayerData, Signs, and NPCs.
## Configuration {#configuration}
### database {#database}
This parameter does not need to be changed. It's value has to be put in the `local/registry` file at the `database_provider` key to activate the MySQL-Database.
:::caution Warning
If you don't change this option, CloudNet will persist on H2 even if you put your correct credentials into the config.
:::
### addresses {#addresses}
This is a JsonArray of database addresses. You do not need to add an element if you do not have a MySQL cluster.
:::caution Warning
`useSsl`, `connectionPoolSize`, `connectionTimeout` & `validationTimeout` should not be changed if you do not know what they are doing!
:::
:::tip Info
All other keys should be self explaining :)
:::
## Sample Configuration {#sample-configuration}
The default configuration of the Database-MySQL Module looks like this:
```json
{
  "database":"mysql",
  "addresses":[
    {
      "useSsl":false,
      "database":"CloudNet",
      "address":{
        "host":"127.0.0.1",
        "port":3306
      }
    }
  ],
  "username":"root",
  "password":"root",
  "connectionPoolSize":15,
  "connectionTimeout":5000,
  "validationTimeout":5000
}
```