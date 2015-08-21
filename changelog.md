---
layout: default
permalink: /changelog/
title: Wocker Changelog
type: changelog
---

## 0.7.0

- Update php.ini.
  - Increase `upload_max_filesize` to 32M.
  - Increase `post_max_size` to 64M.
  - Enable `display_errors`.
  - Set `mbstring.internal_encoding` at UTF-8.

## 0.6.0

- Add a command: `wocker theme-test`.

## 0.5.0

- Add a command: `wocker wp`.
- Enable connecting to MySQL from outside the container.

## 0.4.0

- Improve the help of commands.

## 0.3.3

- Restore a command: `wocker rename`.

## 0.3.2

- Add a command: `wocker help`.

## 0.3.1

- Fix bugs of `wocker rm`.

## 0.3.0

- Use container names for synced folders and mounted volumes.
- Use existing directory to mount when creating containers.

## 0.2.0

- Install php-gd.
- Add a command: `wocker update`.

## 0.1.0

- Initial release.