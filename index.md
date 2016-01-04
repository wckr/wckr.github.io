---
layout: default
type: get-started
---

## Get Started

### 1. Install Vagrant

[http://www.vagrantup.com/](http://www.vagrantup.com/)

### 2. Install VirtualBox

[https://www.virtualbox.org/](https://www.virtualbox.org/)

### 3. Install the vagrant-hostsupdater plugin.

```bash
$ vagrant plugin install vagrant-hostsupdater
```

Windows is not allowed to change hosts-file. Please add "wocker.dev 172.17.8.23" by yourself!

### 4. Clone the Wocker Repository

```bash
$ git clone https://github.com/wckr/wocker.git && cd wocker
```

### 5. Start up Wocker

```bash
$ vagrant up
```

This could take a while on the first run as your local machine downloads the required files. Watch as the script ends, as an administrator or su password may be required. The first default container `wocker` will be running after the provision finishes successfully.


### 6. Visit following site in your browser

[http://wocker.dev/](http://wocker.dev/)

## Credentials and Such

### WordPress

<dl class="dl_inline dl_10">
  <dt>User:</dt>
  <dd><code>admin</code></dd>

  <dt>Pass:</dt>
  <dd><code>admin</code></dd>
</dl>

### Database

<dl class="dl_inline dl_10">
  <dt>Name:</dt>
  <dd><code>wordpress</code></dd>

  <dt>User:</dt>
  <dd><code>wordpress</code></dd>

  <dt>Pass:</dt>
  <dd><code>wordpress</code></dd>
</dl>

### Synced Folder

<dl class="dl_inline dl_20">
  <dt>Local machine:</dt>
  <dd><code>data</code></dd>

  <dt>Guest machine:</dt>
  <dd><code>/home/core/data</code></dd>
</dl>

Every container created through Wocker automatically has it’s volumes exposed on your local machine. Wocker exposes a container’s volume data under `data/<container's name>`.

## Run a New Wocker Container (3 SECONDS)

Before running a new one, you must stop or remove the running Wocker container.

### 1. Connect to the guest machine via SSH

```bash
$ vagrant ssh
```

### 2. Stop or remove the running Wocker container

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker stop [CONTAINER]</code></pre>
</div>

OR

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker rm -f CONTAINER</code></pre>
</div>

`CONTAINER` can be a name or ID of a container. You can use `wocker ps` (Docker alias) to list only running containers.

If `CONTAINER` is omitted in `wocker stop`, all running containers will be stopped.

__Note:__ the `wocker rm -f` command forcely remove containers and synced folders in your local `data` directory. Please back up the files before removing containers if you need them.

#### Example

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker stop wocker</code></pre>
</div>

The first default container `wocker` will be running after your first `vagrant up`.


### 3. Use a Wocker command to run a new container

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker run</code></pre>
</div>

You can use the name flag to assign a specific name to the container.

#### Example

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker run --name test</code></pre>
</div>

## Restart a Stopped Wocker Container (1 SECONDS)

Before a restart, you must stop or remove the running Wocker container.

### 1. Connect to the guest machine via SSH

```bash
$ vagrant ssh
```

### 2. Stop or remove the running Wocker container

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker stop [CONTAINER]</code></pre>
</div>

or

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker rm -f CONTAINER</code></pre>
</div>

`CONTAINER` can be a name or ID of a container.

If `CONTAINER` is omitted in `wocker stop`, all running containers will be stopped.

__Note:__ the `wocker rm -f` command forcely remove containers and synced folders in your local `data` directory. Please back up the files before removing containers if you need them.

#### Example

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker stop test</code></pre>
</div>

### 3. Restart a stopped Wocker container

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker start CONTAINER</code></pre>
</div>

`CONTAINER` can be a name or ID of a container. You can use `wocker ps -a` (Docker alias) to list all containers including stopped ones.

#### Example

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker start wocker</code></pre>
</div>

## Shutdown Wocker

### 1. Shutdown the guest machine

```bash
$ vagrant halt
```

## Restart Wocker

### 1. Start the guest machine

```bash
$ vagrant up
```

### 2. Connect to the guest machine via SSH

```bash
$ vagrant ssh
```

### 3. Restart a stopped container or run a new container

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker start CONTAINER</code></pre>
</div>

or

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker run</code></pre>
</div>

`CONTAINER` can be a name or ID of a container.

#### Example

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker start wocker</code></pre>
</div>
