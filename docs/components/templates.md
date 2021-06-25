---
id: templates
title: Templates
---

Every service consists of at least one template. It has to contain a `spigot.jar` or similar so that a service will be
able to start. You can assign multiple templates to each service as explained above.  
Whenever a new task is created, the template `local:TASK/default` will also be created and assigned to the task automatically.