---
layout: default
permalink: /changelog/
title: Wocker Changelog
type: changelog
---

## 1.4 <small>May 8, 2019</small>
- Add php7.0-zip
- WordPress 5.2

## 1.3.2 <small>Apr 12, 2019</small>
- Update WP CLI to 2.1.0

## 1.3.1 <small>Mar 23, 2018</small>
- Add lftp to enable Wordmove via ftp

## 1.3 <small>Jan 28, 2018</small>
- Add Wordmove
- Add MailHog
- Add Nginx as an option

## 1.2.1 <small>Jan 11, 2018</small>
- Add php7.0-xml, php7.0-mbstring, php7.0-bz

## 1.2 <small>Dec 23, 2017</small>
- Change the hostname from `wocker.dev` to `wocker.test`
- Upgrade PHP 5.6 to PHP 7
- Upgrade MySQL to MariaDB
- Add Xdebug
- Add PHPUnit
- WordPress 4.9.1
- Add `wocker commit` command

## 1.1.5 <small>Aug 4, 2017</small>
- Add `--nightly` option to `wocker update` command

## 1.1.4 <small>Jan 17, 2017</small>
- Fix a bug of `wocker wp cli update`

## 1.1.3 <small>Sep 6, 2016</small>
- WordPress 4.6
- WP-CLI 0.25.0-alpha-bcecf5f

## 1.1.2 <small>Jul 7, 2016</small>
- Fix some bugs of Wocker CLI

## 1.1.1 <small>Apr 27, 2016</small>
- Allow WP-CLI to regenerate a .htaccess file

## 1.1 <small>Apr 16, 2016</small>
- Add `wocker switch` command

## 1.0.3 <small>Apr 14, 2016</small>
- Add `ServerName` to avoid Apache2 warning

## 1.0.2 <small>Mar 17, 2016</small>
- Fix `mysqld_safe` bug cf. [https://github.com/wckr/wocker/pull/28#issuecomment-195945765](https://github.com/wckr/wocker/pull/28#issuecomment-195945765)

## 1.0.1 <small>Jan 6, 2016</small>
- Enable `.htaccess`
- Fix [ailispaw/docker-root#2](https://github.com/ailispaw/docker-root/issues/2)

## 1.0.0 <small>Jan 4, 2016</small>
- Change the box from CoreOS to [DockerRoot](https://github.com/ailispaw/docker-root)
- Update the OS in Wocker image from Debian Wheezy to Jessie
- Change wocker-bashrc to wocker-cli
- WordPress 4.4
- Fix some bugs when installing themes/plugins and upgrading/downgrading WordPress core via WP-CLI

## 0.9.2
- Fix a bug of `wocker run` with Docker 1.8 or later

## 0.9.1
- Use WP-CLI nightly

## 0.9.0
- Support `wocker wp shell` command

## 0.8.1
- WordPress 4.3.1

## 0.8.0

- WordPress 4.3
- Add php5-curl

## 0.7.0

- Update php.ini
  - Increase `upload_max_filesize` to 32M
  - Increase `post_max_size` to 64M
  - Enable `display_errors`
  - Set `mbstring.internal_encoding` at UTF-8

## 0.6.0

- Add a command: `wocker theme-test`

## 0.5.0

- Add a command: `wocker wp`
- Enable connecting to MySQL from outside the container

## 0.4.0

- Improve the help of commands

## 0.3.3

- Restore a command: `wocker rename`

## 0.3.2

- Add a command: `wocker help`

## 0.3.1

- Fix bugs of `wocker rm`

## 0.3.0

- Use container names for synced folders and mounted volumes
- Use existing directory to mount when creating containers

## 0.2.0

- Install php-gd
- Add a command: `wocker update`

## 0.1.0

- Initial release
