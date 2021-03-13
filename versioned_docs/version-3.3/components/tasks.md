---
id: tasks
title: Tasks
---

A task is a configuration from which [services](#) can be started.

## Configuration
The configuration path for each task is `local/tasks/NAME.json`  
After changing a configuration, you need to execute `tasks reload` in the console.  
:::tip
We recommend managing the configurations with the [tasks command](#).
In that case you do not need to keep an eye on the json syntax, and you do not need to reload the configurations after changing anything.
:::

### name
This defines the name used along with the incremental id to identify services started from this task (e.g. `Proxy` will result in `Proxy-1`)

### runtime
This sets the runtime used for services started by this task.  
By default, CloudNet only provides the "jvm" runtime, you can add your own with custom modules.

### disableIpRewrite
Enables or disables the ip rewrite for services of this task (`true`/`false`)
:::caution Warning
We recommend the usage of this feature just in very special cases.  
For example, when you want to have several proxies for the Bedrock Edition.
(Unfortunately, the Bedrock Edition does not support SRV-Records. Please contact us in that case for further assistance!)
:::

### maintenance
Enables or disables the maintenance mode services of this task (`true`/`false`)
:::info
If the maintenance mode is enabled, services of this task can have a special sign layout and users need the permission `cloudnet.bridge.maintenance` to join.
:::

### autoDeleteOnStop
This enables or disables the automatic deletion of service files after they have been stopped. (`true`/`false`)  
:::caution Warning
Do NOT use this feature to keep persistent data of services like CityBuild.
Please use [static services](#staticservices) instead!
:::

### staticServices
This enables or disables static services. (`true`/`false`)  
If disabled, services will be started in the `temp` directory.  
If enabled, services will be started in the `local/services/` directory.

### associatedNodes
Here you can specify on which nodes the services from this task should be started.  
If you leave the option empty (as it is by default), the services can be started on every node.  
Example (starting the services on Nodes 1, 2 and 4):
```json
  "associatedNodes": [
    "Node-1",
    "Node-2",
    "Node-4"
  ],
```

### groups
Here you can specify to which [groups](#) the task should belong.

### deletedFilesAfterStop
Here you can specify files which should always be deleted after stopping the server.  
This options works even when [static services](#staticservices) are enabled!

<br></br>

### processConfiguration
#### environment
The environment services of this task should run in.
Possible values are:
- `MINECRAFT_SERVER`
- `GLOWSTONE`
- `NUKKIT`
- `GO_MINT`
- `BUNGEECORD`
- `VELOCITY`
- `WATERDOG`

#### maxHeapMemorySize
This defines the memory size (RAM) for services of this task.

#### jvmOptions
Here you can set custom jvm options. (For example the [Aikar garbage collector flags](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/) options)

#### processParameters
Here you can set custom process parameters.

<br></br>

### startPort
This is the port from which the cloud will use ports for the services.  
You can use the same start port for multiple tasks, the system will use the next available port.

### minServiceCount
This defines the minimum amount of services that should be always online from this task.

### includes
The includes provides the possibility to download files when each service is prepared.  
Example:
```json
  "includes": [
    {
      "url": "https://cloudnetservice.eu/cloudnet/versions.json",
      "destination": "plugins/versions.json",
      "properties": {}
    }
  ],
```

### templates
This is an array of template configurations.  
This means you can add multiple templates to one task. For example for different maps:
```json
  "templates": [
    {
      "prefix": "BedWars",
      "name": "2x1",
      "storage": "local",
      "alwaysCopyToStaticServices": false
    },
    {
      "prefix": "BedWars",
      "name": "3x4",
      "storage": "local",
      "alwaysCopyToStaticServices": false
    }
  ]
```

### deployments
The deployments provide the possibility to copy each service to a template when it is being shutdown.  
Example:
```json
  "deployments": [
    {
      "template": {
        "prefix": "Proxy",
        "name": "default",
        "storage": "local",
        "alwaysCopyToStaticServices": false
      },
      "excludes": [
        "whitelist.yml",
        "log.txt"
      ],
      "properties": {}
    }
  ],
```

### properties
The properties can contain any json object which you can access trough the api.  
By default, it contains only the [SmartConfig from the Smart Module](../modules/smart)

## Sample Configuration
```json
{
  "name": "Proxy",
  "runtime": "jvm",
  "disableIpRewrite": false,
  "maintenance": false,
  "autoDeleteOnStop": true,
  "staticServices": false,
  "associatedNodes": [],
  "groups": [
    "Proxy"
  ],
  "deletedFilesAfterStop": [],
  "processConfiguration": {
    "environment": "BUNGEECORD",
    "maxHeapMemorySize": 256,
    "jvmOptions": [],
    "processParameters": []
  },
  "startPort": 25565,
  "minServiceCount": 0,
  "includes": [],
  "templates": [
    {
      "prefix": "Proxy",
      "name": "default",
      "storage": "local",
      "alwaysCopyToStaticServices": false
    }
  ],
  "deployments": [],
  "properties": {
    "smartConfig": {
      "enabled": false,
      "priority": 10,
      "directTemplatesAndInclusionsSetup": true,
      "preparedServices": 0,
      "dynamicMemoryAllocation": false,
      "dynamicMemoryAllocationRange": 256,
      "percentOfPlayersToCheckShouldAutoStopTheServiceInFuture": 0,
      "autoStopTimeByUnusedServiceInSeconds": 180,
      "percentOfPlayersForANewServiceByInstance": 100,
      "forAnewInstanceDelayTimeInSeconds": 300,
      "minNonFullServices": 0,
      "templateInstaller": "INSTALL_ALL",
      "maxServiceCount": -1
    }
  }
}
```