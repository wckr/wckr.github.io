---
layout: default
permalink: /tips/
title: Wocker Tips
type: tips
---


## Downgrade WordPress version

For example, downgrade WordPress to 3.5.

### 1. Run a new container `test`

```bash
core@wocker $ wocker run --name test
```

### 2. Download version 3.5 using `wocker wp` command

```bash
core@wocker $ wocker wp core download --version=3.5 --force
```

This will force download WordPress 3.5 to the running container. You will have a WordPress 3.5 environment if you visit [http://wocker.dev](http://wocker.dev).
