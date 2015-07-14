---
layout: default
permalink: /tips/
title: Wocker Tips
type: tips
---


## Downgrade WordPress version

For example, downgrade WordPress to 3.5.

### 1. Run a new container

```bash
core@wocker $ wocker run --name test
```

This will create a new container `test`. If you already have a container to downgrade, just start it, or if it's running, just skip this step.

### 2. Download version 3.5

```bash
core@wocker $ wocker wp core download --version=3.5 --force
```

This will force download WordPress 3.5 to the running container using the `wocker wp` command. After this finishes successfully, you will have a WordPress 3.5 environment if you visit [http://wocker.dev](http://wocker.dev). You can change `3.5` to any version you want.
