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

>### Windows

>`vagrant-winnfsd` plugin is required to support NFS on Windows.

>```bash
$ vagrant plugin install vagrant-winnfsd
```

>You will also need to declare some sort of network in order for NFS to work.
A private dhcp network is required for NFS to work (on Windows hosts, at least).
Please change the line 49 in the Vagrantfile to:

>```ruby
config.vm.network :private_network, ip: "172.17.8.23", type: "dhcp"
```

>More resources:  
[GM-Alex/vagrant-winnfsd](https://github.com/GM-Alex/vagrant-winnfsd)

>### Ubuntu

>If you got this message on Ubuntu:

>```
It appears your machine doesn't support NFS, or there is not an adapter  
to enable NFS on this machine for Vagrant.
```

>You'll need to:

>```bash
$ apt-get install nfs-kernel-server
```

>More resources:  
[Ubuntu needs nfs-kernel-server installed #4](https://github.com/{{ site.github_org }}/{{ site.github_repo }}/issues/4)  
[missing NFS support error on Ubuntu hosts could be improved perhaps #1534](https://github.com/mitchellh/vagrant/issues/1534)

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

```bash
core@wocker ~ $ wocker stop CONTAINER
```

or

```bash
core@wocker ~ $ wocker rm -f CONTAINER
```

`CONTAINER` can be a name or ID of a container. You can use `wocker ps` (Docker alias) to list only running containers.

__Note:__ the `wocker rm -f` command forcely remove containers and synced folders in your local `data` directory. Please back up the files before removing containers if you need them.

####Example

```bash
core@wocker ~ $ wocker stop wocker
```

The first default container `wocker` will be running after your first `vagrant up`.


### 3. Use a Wocker command to run a new container

```bash
core@wocker ~ $ wocker run
```

You can use the name flag to assign a specific name to the container.

#### Example

```bash
core@wocker ~ $ wocker run --name test
```

## Restart a Stopped Wocker Container (1 SECONDS)

Before a restart, you must stop or remove the running Wocker container.

### 1. Connect to the guest machine via SSH

```bash
$ vagrant ssh
```

### 2. Stop or remove the running Wocker container

```bash
core@wocker ~ $ wocker stop CONTAINER
```

or

```bash
core@wocker ~ $ wocker rm -f CONTAINER
```

`CONTAINER` can be a name or ID of a container.

__Note:__ the `wocker rm -f` command forcely remove containers and synced folders in your local `data` directory. Please back up the files before removing containers if you need them.

#### Example

```bash
core@wocker ~ $ wocker stop test
```

### 3. Restart a stopped Wocker container

```bash
core@wocker ~ $ wocker start CONTAINER
```

`CONTAINER` can be a name or ID of a container. You can use `wocker ps -a` (Docker alias) to list all containers including stopped ones.

#### Example

```bash
core@wocker ~ $ wocker start wocker
```

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

```bash
core@wocker ~ $ wocker start CONTAINER
```

or

```bash
core@wocker ~ $ wocker run
```

`CONTAINER` can be a name or ID of a container.

#### Example

```bash
core@wocker ~ $ wocker start wocker
```
