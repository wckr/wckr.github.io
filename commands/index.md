---
layout: default
title: Wocker Commands
type: commands
---


## Help

To list available commands, either run `wocker` with no parameters or execute `wocker help`, `wocker --help`, or `wocker -h`:

```
$ wocker
Usage: wocker COMMAND [arg...]

Commands:
...
```

To list the help on any command just execute the command, followed by the `--help` option.

```
$ wocker run --help
Usage: wocker run [--name=""] [IMAGE[:TAG]]

Run a new container

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

The main process inside the container `test` will receive `SIGKILL`, then the container and the synced folder will be removed.

----

### ps (Docker alias)

```
Usage: wocker ps [OPTIONS]

List containers

  -a, --all=false       Show all containers (default shows just running)
  --before=""           Show only container created before Id or Name
  -f, --filter=[]       Filter output based on conditions provided
  -l, --latest=false    Show the latest created container, include non-running
  -n=-1                 Show n last created containers, include non-running 
  --no-trunc=false      Don't truncate output
  -q, --quiet=false     Only display numeric IDs
  -s, --size=false      Display total file sizes
  --since=""            Show created since Id or Name, include non-running
```

`wocker ps` will show only running containers by default. To see all containers: `wocker ps -a`.

#### Examples

```bash
$ wocker ps
```

This will only show the running container.

```bash
$ wocker ps -a
```

This will list all containers including stopped.

----

### start (Docker alias)

```
Usage: wocker start CONTAINER

Start a stopped container
```

Before a restart, you must stop or remove the running container. See `wocker ps -a` to view a list of all containers.

#### Examples

```bash
$ wocker start test
```

This will start the container `test`.

----

### stop

```
Usage: wocker stop [OPTIONS] CONTAINER

Stop a running container by sending SIGTERM and then SIGKILL after a grace period

  -t, --time=10      Seconds to wait for stop before killing it
```

The main process inside the container will receive `SIGTERM`, and after a grace period, `SIGKILL`.

#### Examples

```bash
$ wocker stop test
```

This will stop the container `test`.

----

### exec

```
Usage: wocker exec [OPTIONS] CONTAINER COMMAND [ARG...]

Run a command in a running container

  -d, --detach=false         Detached mode: run command in the background
  -i, --interactive=false    Keep STDIN open even if not attached
  -t, --tty=false            Allocate a pseudo-TTY
```

The `wocker exec` command runs a new command in a running container. If the container is paused, then the `wocker exec` command will fail with an error.

#### Examples

```bash
$ wocker exec -it test bash
```

This will create a new Bash session in the running container `test`. Then you can run WP-CLI or MySQL commands etc. in the container.

```bash
root@****:/var/www/wordpress# wp --allow-root --info
PHP binary: /usr/bin/php5
PHP version:  5.4.39-0+deb7u2
php.ini used: /etc/php5/cli/php.ini
WP-CLI root dir:  phar://wp-cli.phar
WP-CLI global config: 
WP-CLI project config:  
WP-CLI version: 0.18.0
```

Note: the `--allow-root` flag is required for WP-CLI commands in Wocker containers.

----

### update (v0.2.0 or later)

```
Usage: wocker update

Update the command line and the Docker image of Wocker.
```

#### Examples

```bash
$ wocker update
```

----

### version / --version / -v

```
Usage: wocker version

Show the Wocker version information
```

#### Examples

```bash
$ wocker version
```

----
