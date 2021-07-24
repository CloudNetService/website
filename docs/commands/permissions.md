---
id: permissions
title: Permissions Command
sidebar_label: Permissions
description: Manages the Permissions System in CloudNet.
---

The `permissions` command is used to manage the [Permissions Module](../modules/cloudperms.md)

Permission: `cloudnet.command.permissions`  
Aliases: `permissions`, `perms`

:::info Info

This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`

:::

This is a basic overview about the `permissions` command.  
Please have a look below for any further information.

```
COMMAND:  - permissions reload
COMMAND:  - permissions create user <name> <password> <potency>
COMMAND:  - permissions create group <name> <potency>
COMMAND:  - permissions delete user <name>
COMMAND:  - permissions delete group <name>
COMMAND:  - permissions user <user>
COMMAND:  - permissions user <user> rename <name>
COMMAND:  - permissions user <user> changePassword <password>
COMMAND:  - permissions user <user> check <password>
COMMAND:  - permissions user <user> add group <name>
COMMAND:  - permissions user <user> add group <name> <time in days | lifetime>
COMMAND:  - permissions user <user> add permission <permission>
COMMAND:  - permissions user <user> add permission <permission> <potency>
COMMAND:  - permissions user <user> add permission <permission> <potency> <targetGroup>
COMMAND:  - permissions user <user> add permission <permission> <potency> <time in days | lifetime>
COMMAND:  - permissions user <user> add permission <permission> <targetGroup>
COMMAND:  - permissions user <user> add permission <permission> <potency> <time in days | lifetime> <targetGroup>
COMMAND:  - permissions user <user> remove permission <permission>
COMMAND:  - permissions user <user> remove permission <permission> <targetGroup>
COMMAND:  - permissions user <user> remove group <group>
COMMAND:  - permissions group
COMMAND:  - permissions group <group>
COMMAND:  - permissions group <group> set sortId <sortId>
COMMAND:  - permissions group <group> set display <display> ...
COMMAND:  - permissions group <group> set prefix <prefix> ...
COMMAND:  - permissions group <group> set suffix <suffix> ...
COMMAND:  - permissions group <group> set defaultGroup <defaultGroup>
COMMAND:  - permissions group <group> set color <color> | 1.13+
COMMAND:  - permissions group <group> add group <name>
COMMAND:  - permissions group <group> add permission <permission>
COMMAND:  - permissions group <group> add permission <permission> <potency>
COMMAND:  - permissions group <group> add permission <permission> <potency> <targetGroup>
COMMAND:  - permissions group <group> add permission <permission> <potency> <time in days | lifetime>
COMMAND:  - permissions group <group> add permission <permission> <targetGroup>
COMMAND:  - permissions group <group> add permission <permission> <potency> <time in days | lifetime> <targetGroup>
COMMAND:  - permissions group <group> remove permission <permission>
COMMAND:  - permissions group <group> remove permission <permission> <targetGroup>
COMMAND:  - permissions group <group> remove group <name>
```

## permissions reload {#permissions-reload}

**Usage:** `permissions reload`

This command reloads the permissions config, to apply any manual changes.

# User Management Commands

## permissions create user {#permissions-create-user}

**Usage:** `permissions create user <name> <password> <potency>`

This command creates a user for the RestAPI with the given arguments:

- `name` - the username
- `password` - the password to access the RestAPI
- `potency` - the potency of the user

## permissions create group {#permissions-create-group}

**Usage:** `permissions create group <name> <potency>`

This command creates a new permission group with the given arguments:

- `name` - the name of the group
- `potency` - the potency of the group

## permissions user {#permissions-user}

**Usage:** `permissions user <user>`

This command prints information about the user (his groups and additional permissions)

## permissions user rename {#permissions-user-rename}

**Usage:** `permissions user <user> rename <user>`

This command renames a user (first argument) to the new name (second argument)

## permissions user changePassword {#permissions-user-changepassword}

**Usage:** `permissions user <user> changePassword <password>`

This command sets a new password for the given user.

## permissions user add group {#permissions-user-add-group}

**Usage 1:** `permissions user <user> add group <group>`

This command adds the given `user` to the specified `group` without any expiration time.

**Usage 2:** `permissions user <user> add group <group> <time in days | lifetime>`

This command adds the given `user` to the specified `group` for the amount of days set in the last argument.

## permissions user add permission {#permissions-user-add-permission}

**Usage 1:** `permissions user <user> add permission <permission>`

This command grants the given `user` the specified `permission`.

**Usage 2:** `permissions user <user> add permission <permission> <potency>`

This command grants the given `user` the specified `permission` with the set `potency`.

**Usage 3:** `permissions user <user> add permission <permission> <potency> <targetGroup>`

This command grants the given `user` the specified `permission` with the set `potency`, limited to the
[`targetGroup`](../components/groups.md)

**Usage 4:** `permissions user <user> add permission <permission> <potency> <time in days | lifetime>`

This command grants the given `user` the specified `permission` with the set `potency`
for the amount of days set in the last argument.

**Usage 5:** `permissions user <user> add permission <targetGroup>`

This command grants the given `user` the specified `permission`, limited to the [`targetGroup`](../components/groups.md)

**Usage 6:** `permissions user <user> add permission <potency> <time in days | lifetime> <targetGroup>`

This command grants the given `user` the specified `permission` with the set `potency`
for the amount of days given in the second last argument, limited to the [`targetGroup`](../components/groups.md)

:::tip Tip

If you want to explicitly revoke a permission, you have to add it with a negative `potency`.

:::

## permissions user remove permission {#permissions-user-remove-permission}

**Usage 1:** `permissions user <user> remove permission <permission>`

This command removes the granted `permission` from the given `user`

:::caution Warning

This does **not** work for permissions set for a specific [`targetGroup`](../components/groups.md)!  
Please see below for more information.

:::

** Usage 2:** `permissions user <user> remove permission <permission> <targetGroup>`

This command removes the granted `permission` from the given `user`,
which was limited to the specified [`targetGroup`](../components/groups.md).

## permissions user remove group {#permissions-user-remove-group}

**Usage:** `permissions user <user> remove group <group>`

This command removes the given `user` from the specified `group`.

# Group Management Commands

## permissions group {#permissions-group}

**Usage 1:** `permissions group`

This commands prints all available permission groups, including their names, inherits, sortId and more.

**Usage 2:** `permissions group <group>`

This command prints the information explained above for the specified `group`

## permissions group set sortId {#permissions-group-set-sortid}

**Usage:** `permissions group <group> set sortId <sortId>`

This command sets the `sortId` for the given `group`.

## permissions group set display {#permissions-group-set-display}

**Usage:** `permissions group <group> set display <display>`

This command sets the `display` for the given `group`.

## permissions group set prefix {#permissions-group-set-prefix}

**Usage:** `permissions group <group> set prefix <prefix>`

This command sets the `prefix` for the given `group`.

## permissions group set suffix {#permissions-group-set-suffix}

**Usage:** `permissions group <group> set suffix <suffix>`

This command sets the `suffix` for the given `group`.

## permissions group set suffix {#permissions-group-set-suffix-1}

**Usage:** `permissions group <group> set defaultGroup <defaultGroup>`

This command sets if the given `group` should be a default group or not.  
The argument `defaultGroup` can either be `true` (if it should be a default group) or `false` (if not).

## permissions group set color {#permissions-group-set-color}

**Usage:** `permissions group <group> set color <color>`

This command sets the `color` of the given `group`.

## permissions group add group {#permissions-group-add-group}

**Usage:** `permissions group <group> add group <name>`

This command adds the group given for the argument `name` to the group specified in `group`.  
This creates an inheritance, so all permissions of the group `name` will be available to users in the group `group`.

## permissions group add permission {#permissions-group-add-permission}

**Usage 1:** `permissions group <group> add permission <permission>`

This command grants the given `group` the specified `permission`.

**Usage 2:** `permissions group <group> add permission <permission> <potency>`

This command grants the given `group` the specified `permission` with the set `potency`.

**Usage 3:** `permissions group <group> add permission <permission> <potency> <targetGroup>`

This command grants the given `group` the specified `permission` with the set `potency`, limited to the
[`targetGroup`](../components/groups.md)

**Usage 4:** `permissions group <group> add permission <permission> <potency> <time in days | lifetime>`

This command grants the given `group` the specified `permission` with the set `potency`
for the amount of days set in the last argument.

**Usage 5:** `permissions group <group> add permission <targetGroup>`

This command grants the given `group` the specified `permission`, limited to the [`targetGroup`](../components/groups.md)

**Usage 6:** `permissions group <group> add permission <potency> <time in days | lifetime> <targetGroup>`

This command grants the given `group` the specified `permission` with the set `potency`
for the amount of days given in the second last argument, limited to the [`targetGroup`](../components/groups.md)

:::tip Tip

If you want to explicitly revoke a permission, you have to add it with a negative `potency`.

:::

## permissions user remove permission {#permissions-user-remove-permission-1}

**Usage 1:** `permissions group <group> remove permission <permission>`

This command removes the granted `permission` from the given `group`

:::caution Warning

This does **not** work for permissions set for a specific [`targetGroup`](../components/groups.md)!  
Please see below for more information.

:::

** Usage 2:** `permissions group <group> remove permission <permission> <targetGroup>`

This command removes the granted `permission` from the given `group`,
which was limited to the specified [`targetGroup`](../components/groups.md).

## permissions group remove group {#permissions-group-remove-group}

**Usage:** `permissions group <group> remove group <group>`

This command removes the inheritance of the group `group` from the group `name`.
