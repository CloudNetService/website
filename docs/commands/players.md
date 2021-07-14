---
id: players
title: Players Command
sidebar_label: Players
description: Shows all registered or online player information and manages them.
---

The `players` command is used to manage all your players on the Cloud.
It is useful especially when a player is connected through a different proxy, because you can still manage him!

Permission: `cloudnet.command.players`  
Aliases: `players`, `player`, `pl`

:::info
This command can be used as a command in the node console or as a command ingame with the prefix `/cloud`
:::

This is a basic overview about the `players` command.  
Please have a look below for any further information.

```
COMMAND:  - players online foreach | limit=50 | connect=Lobby-1 | "message=Message to a User" | "kick=You got kicked" | --showName | name=derrop
COMMAND:  - players online | --force
COMMAND:  - players registered | --force
COMMAND:  - players player <name>
COMMAND:  - players player <name> delete
COMMAND:  - players player <name> kick [reason]
COMMAND:  - players player <name> sendMessage <message> ...
COMMAND:  - players player <name> connect <server>
```

## players online foreach {#players-online-foreach}

**Usage:** `players online foreach`

You can use the command `players online foreach | <ARGUMENT>` to go through all players and execute a certain action with them.  
You can add multiple arguments, each must be separated with `|`

Possible arguments:

- `limit=50` -> Limit the amount of players you are iterating through
- `connect=Lobby-1` -> Send the players to a specific server
- `"message=Message to a User"` -> Send a message to the users
- `"kick=You got kicked"` -> Kick the players with a specific message
- `--showName` -> Print the name of each player in the console
- `name=derrop` -> Limit the action(s) to the given player name

:::tip
You have to include the quotation marks wherever given in the example! This is needed to support whitespaces for sentences.
:::

## players online {#players-online}

**Usage:** `players online`

This command prints information about all online players.  
By default, the amount of output is limited. You can bypass this by adding the argument `| --force` to the command.

:::caution
Do not use the `--force` argument when you have a lot of online players. It could lead to a memory leak!
:::

## players registered {#players-registered}

**Usage:** `players registered`

This command prints information about all registered players. This means every player who ever joined on your CloudNet network.  
By default, the amount of output is limited. You can bypass this by adding the argument `| --force` to the command.

:::caution
Do not use the `--force` argument when you have a lot of registered players. It could lead to a memory leak!
:::

## players player {#players-player}

**Usage:** `players player <name>`

This command prints information about one specific registered player.

## players player delete {#players-player-delete}

**Usage:** `players player <name> delete`
This command deletes the given player from the cloudnet database

## players player kick {#players-player-kick}

**Usage:** `players player <name> kick [reason]`

This command kicks the player with the given name.  
If you leave the reason out, the player is kicked without giving any reason.

## players player sendMessage {#players-player-sendmessage}

**Usage:** `players player <name> sendMessage <message>`

This command sends a message to the player with the given name.

:::note
You do not need to include quotation marks here, because the message is always the last argument.
:::

## players player connect {#players-player-connect}

**Usage:** `players player <name> connect <service>`

This command sends the player with the given name to the specified service.
