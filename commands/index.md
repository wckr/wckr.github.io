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

### version | --version | -v

```
Usage: wocker version | --version | -v

Show the Wocker version information
```

#### Examples

```bash
$ wocker version
```

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

__Note:__ the `wocker rm` command remove containers and synced folders in your local `data` directory. Please back up the files before removing containers if you need them.

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

### stop (Docker alias)

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

### wp

```
Usage: wocker wp COMMAND SUBCOMMAND arg...

Execute WP-CLI commands in the running container
See: http://wp-cli.org/

Commands:
    cache           Manage the object cache.
    cap             Manage user capabilities.
    cli             Get information about WP-CLI itself.
    comment         Manage comments.
    core            Download, install, update and otherwise manage WordPress proper.
    cron            Manage WP-Cron events and schedules.
    db              Perform basic database operations.
    eval            Execute arbitrary PHP code after loading WordPress.
    eval-file       Load and execute a PHP file after loading WordPress.
    export          Export content to a WXR file.
    help            Get help on a certain command.
    import          Import content from a WXR file.
    media           Manage attachments.
    menu            List, create, assign, and delete menus
    network         -
    option          Manage options.
    plugin          Manage plugins.
    post            Manage posts.
    rewrite         Manage rewrite rules.
    role            Manage user roles.
    scaffold        Generate code for post types, taxonomies, etc.
    search-replace  Search/replace strings in the database.
    shell           Interactive PHP console.
    sidebar         Manage sidebars.
    site            Perform site-wide operations.
    super-admin     List, add, and remove super admins from a network.
    term            Manage terms.
    theme           Manage themes.
    transient       Manage transients.
    user            Manage users.
    widget          Manage sidebar widgets.
```

For more information about WP-CLI commands and subcommands, please see [http://wp-cli.org/](http://wp-cli.org/).

#### Examples

```bash
$ wocker wp db export
Success: Exported to wordpress.sql
```

This will export the database to a file `wordpress.sql`.

----

### exec (Docker alias)

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

__Note:__ the `--allow-root` flag is required for WP-CLI commands in Wocker containers.

More resources about WP-CLI, please see: [http://wp-cli.org/](http://wp-cli.org/)

----

### destroy

```
Usage: wocker destroy

Force remove all containers and local related files
```

This will force remove all containers including running ones and all related files in your local `data` directory. You will receive a confirmation before the execution.

#### Examples

```bash
$ wocker destroy
Are you sure you want to remove all containers and related files? [y/N]
```

## Other Docker Command Aliases

### attach

Attach to a running container

### build

Build an image from a Dockerfile

### commit

Create a new image from a container's changes

### cp

Copy files/folders from a container's filesystem to the host path

### create

Create a new container

### diff

Inspect changes on a container's filesystem

### events

Get real time events from the server

### export

Stream the contents of a container as a tar archive

### history

Show the history of an image

### images

List images

### import

Create a new filesystem image from the contents of a tarball

### info

Display system-wide information

### inspect

Return low-level information on a container or image

### kill

Kill a running container

### load

Load an image from a tar archive

### login

Register or log in to a Docker registry server

### logout

Log out from a Docker registry server

### logs

Fetch the logs of a container

### port

Lookup the public-facing port that is NAT-ed to PRIVATE_PORT

### pause

Pause all processes within a container

### pull

Pull an image or a repository from a Docker registry server

### push

Push an image or a repository to a Docker registry server

### rename

Rename an existing container

### restart

Restart a running container

### rmi

Remove one or more images

### save

Save an image to a tar archive

### search

Search for an image on the Docker Hub

### stats

Display a live stream of one or more containers' resource usage statistics

### tag

Tag an image into a repository

### top

Lookup the running processes of a container

### unpause

Unpause a paused container

### wait

Block until a container stops, then print its exit code
