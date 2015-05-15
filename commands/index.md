---
layout: default
title: Wocker Commands
type: commands
---


## Help

To list available commands, either run `wocker` with no parameters or execute `wocker help`:

```bash
$ wocker
Usage: wocker COMMAND [arg...]

Commands:
...
```

## Commonly Used Commands

### run

```
Usage: wocker run [--name=""] [IMAGE[:TAG]]

Run a new container

  --name=""     Assign a name to the container. If omitted, it will be a random name.
  IMAGE[:TAG]   Docker image. If omitted, it will be wocker/wocker:latest.
```

The `wocker run` command creates and runs a new container over `wocker/wocker:latest` image by default. The `--name` flag will assign a name to the newly created container. The document root of the container will be synced to your local `data` directory with the same name as the container. If you already have a folder with the same name as the container in `data` directory, Wocker will just use it as the document root.

#### Examples

```bash
$ wocker run --name test
```

This will run a new container named `test`.

----

### rm

```
Usage: wocker rm [--force=false] CONTAINER [CONTAINER...]

Remove one or more containers

  -f, --force=false   Force the removal of a running container (uses SIGKILL)
```

Please note that the `wocker rm` command remove containers and synced folders in your local `data` directory. Please back up the files before removing containers if you need them.

#### Examples

```bash
$ wocker rm test
```

This will remove the `test` container and the `test` folder in your local `data` directory.

```bash
$ wocker rm -f test
```

The main process inside the `test` container will receive `SIGKILL`, then the container and the synced folder will be removed.

----

### start

----

### stop

----

### exec

----

### update

----

### version

----
