---
id: requirements
title: Requirements
---

You need **Java**, **Screen**, **Sudo**, **Wget** and **Unzip** for the default [**installation**](./installation) of this software.<br></br>
Before you install the following programs, run:

```
sudo apt update && sudo apt upgrade
```

## Hardware {#hardware}

### Minimal {#minimal}

128MB JVM Heap size  
2GB DDR3 Memory  
2 virtual cores

### Recommended {#recommended}

512MB JVM Heap size  
8GB DDR3 Memory  
2-4 virtual cores

## Software {#software}

### Java {#java}

The required Java version depends on your planned Spigot version. If you use a Spigot version below 1.9 you have to install Java 8.  
Use the following command to display the installed Java version.

```
java -version
```

Output:
:::tip Correct
openjdk version "11.0.9.1" 2020-11-04  
OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.9.1+1)  
OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.9.1+1, mixed mode)
:::
:::danger Error
-bash: java -version: Command not found.
:::

If the output is "Command not found", then you need to install Java.  
To install Java 11, use the following command:

```
sudo apt install default-jre
```

### Screen {#screen}

This way you can check if you already have Screen installed.

```
screen -help
```

Output:
:::tip Correct
Use: screen [-opts] [cmd [args]] or: screen -r [host.tty]
:::
:::danger Error
bash: screen: Command not found.
:::

If the output is "Command not found", then you need to install Screen.  
To install Screen, use the following command:

```
sudo apt-get install screen
```

### Sudo {#sudo}

This way you can check if you already have Sudo installed.

```
sudo
```

Output:
:::tip Correct
usage: sudo -h | -K | -k | -V
:::
:::danger Error
bash: sudo: Command not found.
:::

If the output is "Command not found", then you need to install Sudo.  
To install Sudo, use the following command:

```
apt-get install sudo
```

### Wget {#wget}

This way you can check if you already have Wget installed.

```
wget
```

Output:
:::tip Correct
wget: missing URL
Usage: wget [OPTION]... [URL]...

Try `wget --help' for more options.
:::
:::danger Error
bash: wget: Command not found.
:::

If the output is "Command not found", then you need to install Wget.  
To install Wget, use the following command:

```
sudo apt-get install wget
```

### Unzip {#unzip}

This way you can check if you already have Unzip installed.

```
unzip
```

Output:
:::tip Correct
UnZip 6.00 of 20 April 2009, by Debian. Original by Info-ZIP.
:::
:::danger Error
bash: unzip: Command not found.
:::
If the output is "Command not found", then you need to install Unzip.  
To install Unzip, use the following command:

```
sudo apt-get install unzip
```
