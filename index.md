---
layout: default
---

## Getting Started

### 1. Install Vagrant

[http://www.vagrantup.com/](http://www.vagrantup.com/)

### 2. Install VirtualBox

[https://www.virtualbox.org/](https://www.virtualbox.org/)

### 3. Install the vagrant-hostsupdater plugin.

```
$ vagrant plugin install vagrant-hostsupdater
```

Windows is not allowed to change hosts-file. Please add "wocker.dev 172.17.8.23" by yourself!

### 4. Clone the Wocker Repo

```
$ git clone https://github.com/ixkaito/wocker.git
$ cd wocker
```

### 5. Start up Wocker

```javascript
$ vagrant up
```
This could take a while on the first run as your local machine downloads the required files. Watch as the script ends, as an administrator or su password may be required.

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

### WordPress Source of a running container (Synced)

<dl class="dl_inline dl_20">
  <dt>Local machine:</dt>
  <dd><code>data/wordpress</code></dd>

  <dt>Guest machine:</dt>
  <dd><code>/home/core/data/wordpress</code></dd>
</dl>

### Synced Folder

<dl class="dl_inline dl_20">
  <dt>Local machine:</dt>
  <dd><code>data</code></dd>
  
  <dt>Guest machine:</dt>
  <dd><code>/home/core/data</code></dd>
</dl>
## Run a new Wocker container (3 SECONDS)

Before running a new one, you must stop or remove the running Wocker container via Wocker command line.

### 1. Connect to the guest machine via SSH

```
$ vagrant ssh
```

### 2. Use Wocker commands to stop or remove the running Wocker container

```
core@wocker ~ $ wocker stop CONTAINER
```

or

```
core@wocker ~ $ wocker kill CONTAINER
```

or

```
core@wocker ~ $ wocker rm CONTAINER
```

`CONTAINER` can be a name or ID of a container. You can use a docker command `$ docker ps` or a wocker command `$ wocker ps` (alias) to list running containers.

e.g.

```
core@wocker ~ $ wocker stop wocker
```

__Note:__ The initial Wocker container's name after your first `$ vagrant up` is "wocker".


### 3. Use a wocker command to run a new Wocker container

```
core@wocker ~ $ wocker run
```

You can use the name option to assign a specific name to the container.

e.g.

```
core@wocker ~ $ wocker run --name wp
```

## Restart a stopped Wocker container (1 SECONDS)

Before a restart, you must stop or remove the running Wocker container via Wocker command line.

### 1. Connect to the guest machine via SSH

```
$ vagrant ssh
```

### 2. Use Wocker commands to stop or remove the running Wocker container

```
core@wocker ~ $ wocker stop CONTAINER
```

or

```
core@wocker ~ $ wocker kill CONTAINER
```

or

```
core@wocker ~ $ wocker rm CONTAINER
```

`CONTAINER` can be a name or ID of a container.

### 3. Use a wocker command to restart a stopped Wocker container

```
core@wocker ~ $ wocker start CONTAINER
```

`CONTAINER` can be a name or ID of a container. You can use a docker command `$ docker ps -a` or a wocker command `$ wocker ps -a` (alias) to list all containers including stopped ones.

e.g.

```
core@wocker ~ $ wocker start wocker
```

## Shutdown Wocker

Before the shutdown, you must stop or remove the running Wocker container via Wocker command line.

### 1. Connect to the guest machine via SSH

```
$ vagrant ssh
```

### 2. Use Wocker commands to stop or remove the running Wocker container

```
core@wocker ~ $ wocker stop CONTAINER
```

or

```
core@wocker ~ $ wocker kill CONTAINER
```

or

```
core@wocker ~ $ wocker rm CONTAINER
```

`CONTAINER` can be a name or ID of a container.

### 3. Exit from the guest machine

```
core@wocker ~ $ exit
```

### 4. Shutdown the guest machine

```
$ vagrant halt
```

## Restart Wocker

### 1. Start the guest machine

```
$ vagrant up
```

### 2. Connect to the guest machine via SSH

```
$ vagrant ssh
```

### 3. Use a wocker command to restart a stopped Wocker container

```
core@wocker ~ $ wocker start CONTAINER
```

`CONTAINER` can be a name or ID of a container.
