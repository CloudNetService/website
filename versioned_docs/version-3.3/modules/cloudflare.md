---
id: cloudflare
title: Cloudflare Module
sidebar_label: Cloudflare
---

The Cloudflare module allows automatic creation of DNS Records in [Cloudflare](https://cloudflare.com/).  
These can be made for any type of services - from BungeeCord to vanilla servers. It can handle multiple domains.  
To enable it, you need a domain with NameServers by Cloudflare. The module needs your `E-Mail, the Global API Key and the zoneId` OR `a Cloudflare API Token`. Everything can be found or created in the Cloudflare dashboard.  
:::caution Warning
If the cluster is being used, the configuration must be set up for each node individually, this avoids unintentional entries such as nodes that are within an internal LAN and can only be reached via specific ports or proxy servers.
:::
## Configuration
The configuration contains a JsonArray of entry objects. You will need one entry per domain you want to support.
### enabled
Enables or disables the entry (`true`/`false`)
### authenticationMethod
The authenticationMethod you want to use (`GLOBAL_KEY`/`BEARER_TOKEN`)
:::tip Info
We recommend to use `BEARER_TOKEN` because it provides more security.  
You can restrict the access to certain domains on your accounts and to certain IP-Adresses.
:::
:::caution Warning
The Global API Key provides access to all your domains and the domains of accounts where you are a registered member.
:::
### hostAddress
The hostAddress the Cloudflare Entries should have. (e.g. `127.0.0.1`)
:::caution Warning
This has to be your **external** IP-Address (NOT `127.0.0.1`)
:::
### email
The E-Mail address of your Cloudflare account. Can be left empty when using `BEARER_TOKEN` as authentication method!
### apiToken
Your Global API Key or created Bearer Token
### zoneId
The zoneId of your DNS zone
### domainName
Your domain name (e.g. `cloudnetdemo.eu`)
### groups
JsonArray of groups for which DNS records should be created
#### name
The name of the group
#### sub
The subdomain on which the group should be reached. (e.g. `@`/`proxy.cloudnetdemo.eu`)
:::tip Info
`@` means the group is accessible through the domain set in domainName without any subdomain (e.g. `cloudnetdemo.eu`)
:::
#### priority
The priority for the created SRV-Record
#### weight
The weight for the created SRV-Record
## Sample Configuration
The default configuration for the CloudFlare Module looks like this:
```json
{
  "config":{
    "entries":[
      {
        "enabled":false,
        "authenticationMethod":"GLOBAL_KEY",
        "hostAddress":"192.0.2.43",
        "email":"user@example.com",
        "apiToken":"api_token_string",
        "zoneId":"zoneId",
        "domainName":"example.com",
        "groups":[
          {
            "name":"Proxy",
            "sub":"@",
            "priority":1,
            "weight":1
          }
        ]
      }
    ]
  }
}
```