---
id: smart
title: Smart Module
sidebar_label: Smart
---

The Smart module extends the configurations of the tasks, it also needs the [CloudNet Bridge Module](bridge.md) to work.
It can automatically start services depending on the player count on other services.

## Configuration {#configuration}
The configuration is individually for each task. It can be found in the task file of the specific task in the
`local/tasks/` directory (e.g. `local/tasks/Lobby.json`).

### enabled {#enabled}
Enables (or disables) the smart configuration for this task. (`true`/`false`)

### priority {#priority}
This defines which task should be handled first

### directTemplatesAndInclusionsSetup {#directtemplatesandinclusionssetup}
- If enabled (`true`), templates and inclusions will be installed onto the service after it has been prepared
- If disabled (`false`), they will be installed directly before the service is being started

### preparedServices {#preparedservices}
This will always keep the specified amount of services created in the `PREPARED` state so that they can directly be
started without having to copy the templates (if directTemplatesAndInclusionsSetup is enabled)

:::tip

This decreases the time needed until a new service is ready to join

:::

### dynamicMemoryAllocation {#dynamicmemoryallocation}
Enables (or disables) the dynamic memory allocation.

:::tip

The node is allowed to remove up to the specified amount of memory in `dynamicMemoryAllocationRange`when the total
memory usage of the node is more than 50%

:::

:::caution Warning

We DO NOT recommend using this feature!

:::

### dynamicMemoryAllocationRange {#dynamicmemoryallocationrange}
How much memory might be removed from the task if necessary  
Please read also the further explanation **dynamicMemoryAllocation**

### percentOfPlayersToCheckShouldAutoStopTheServiceInFuture {#percentofplayerstocheckshouldautostoptheserviceinfuture}
This will check if the specified percentage of players is online in the service, if not it starts a
countdown (specified in `autoStopTimeByUnusedServiceInSeconds`) and stops the service when the countdown reaches 0.

:::tip Info

You can disable this feature by setting the value to `-1`.

:::

### autoStopTimeByUnusedServiceInSeconds {#autostoptimebyunusedserviceinseconds}
The amount of time to wait until a service gets stopped as specified in **percentOfPlayersToCheckShouldAutoStopTheServiceInFuture**

### percentOfPlayersForANewServiceByInstance {#percentofplayersforanewservicebyinstance}
If the percentage of players on a service reaches this value, a new service is being created and started.

### forAnewInstanceDelayTimeInSeconds {#foranewinstancedelaytimeinseconds}
This is the (minimal) delay between every service created by the **percentOfPlayersForANewServiceByInstance** option.

:::caution Warning

We do not recommend using this option. Instead, we recommend using the **minNonFullServices** option.

:::

### minNonFullServices {#minnonfullservices}
This option keeps always the specified amount of non-full services
(according to the percentage specified in **percentOfPlayersForANewServiceByInstance** online).

### templateInstaller {#templateinstaller}
This will always install all templates of the group, it only affects the way task templates are chosen (by default CloudNet uses all of them).
The possible options for this feature are:
- `INSTALL_ALL` - This is the default value and will install every template of the task
- `INSTALL_RANDOM` - This will install a random amount of templates of the task
- `INSTALL_RANDOM_ONCE` - This will install one random template of the task and
- `INSTALL_BALANCED` - This will spread the templates onto all servers (one template each)

### maxServiceCount {#maxservicecount}
This will prevent the creation of new services when the specified amount is reached

:::tip Info

The value `-1` disables this option.

:::

## Sample configuration {#sample-configuration}
The default configuration of the Smart module looks like this:
```json
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
```
