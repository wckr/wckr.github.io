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
