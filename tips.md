---
layout: default
permalink: /tips/
title: Wocker Tips
type: tips
---

## How to use Nginx

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker run [--name=""] wocker/wocker:nginx</code></pre>
</div>

This creates and runs a new container over `wocker/wocker:nignx` image. This could take a while on the first run as your local machine downloads the required image.

## How to use MailHog

### 1. Create or start a container

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker run</code></pre>
</div>

OR

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker start CONTAINER</code></pre>
</div>

### 2. Visit the following site in your browser

[http://wocker.test:8025/](http://wocker.test:8025/)

For more information about MailHog, please see [https://github.com/mailhog/MailHog](https://github.com/mailhog/MailHog).

## How to move an old container from wocker.dev to wocker.test

### 1. Check the hostname on your Vagrantfile

```ruby
config.vm.hostname = "wocker.test"
```

Make sure you have the above code on line 27 on your `Vagrantfile`.

### 2. Start and connect to the guest machine

```bash
$ vagrant up
$ vagrant ssh
```

### 3. Start your v1.1.x Wocker container

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker start CONTAINER</code></pre>
</div>

`CONTAINER` can be a name or ID of a container.

### 4. Replace wocker.dev with wocker.test

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker wp search-replace wocker.dev wocker.test</code></pre>
</div>

### 5. Visit the following site in your browser

[http://wocker.test/](http://wocker.test/)

## Downgrade WordPress version

For example, downgrade WordPress to 3.5.

### 1. Run a new container

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker run --name test</code></pre>
</div>

This will create a new container `test`. If you already have a container to downgrade, just start it, or if it's running, just skip this step.

### 2. Download version 3.5

<div class="highlight">
  <pre><code data-lang="bash" class="language-bash"><span class="k">wocker ~ $ </span>wocker wp core download --version=3.5 --force</code></pre>
</div>

This will force download WordPress 3.5 to the running container using the `wocker wp` command. After this finishes successfully, you will have a WordPress 3.5 environment if you visit [http://wocker.dev](http://wocker.dev). You can change `3.5` to any version you want.

## Use Remote Debug

There are supported clients list in [Step Debugging](https://xdebug.org/docs/remote) document by Xdebug official.

### 1. setting IDE or Editor

Listen port 9000.  
Remote path for WordPress is `/var/www/wordpress`.

Example, setteings for Visual Studio Code.  
data\wocker\wp-content\\.vscode\launch.json

<div class="highlight">
  <pre><code data-lang="json" class="language-json">
"configurations": [
     {
        "name": "Listen for XDebug",
        "type": "php",
        "request": "launch",
        "port": 9000,
        "pathMappings":{
            "/var/www/wordpress/wp-content":"${workspaceFolder}"
         }
    },
]
  </code></pre>
</div>

### 2. Set breakpoint in IDE

Example Visual Studio Code.
![Set breakpoint, example Visual Studio Code]({{site.baseurl}}/assets/images/set-breakpoint-vsc.png)

### 3. Set mode of IDE to listen XDebug

![Listen XDebug, example Visual Studio Code]({{site.baseurl}}/assets/images/listen-xdebug-vsc.png)

### 4. Start debug session by access

Access `http://wocker.test/?XDEBUG_SESSION_START` or using browser addon.  
See "Using a browser extension" section in [Step Debugging](https://xdebug.org/docs/remote) page Xdebug official.

### 5. Hit breakpoint
![Hit breakpoint]({{site.baseurl}}/assets/images/hit-breakpoint-vsc.png)
