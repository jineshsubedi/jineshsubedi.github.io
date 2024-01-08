---
title: Changing PHP Version in Ubuntu - A Step-by-Step Guide
author: Jinesh Subedi
date: 2024-01-03
description: Learn how to switch from PHP 7.4 to PHP 8.2 on Ubuntu using the update-alternatives command.
tags: [PHP, Ubuntu, Server, Tutorial]
---

# Changing PHP Version in Ubuntu: A Step-by-Step Guide
### <BadgeBlog type="tip" title="PHP, Ubuntu, Server" />

## Introduction
If you're running a web server on Ubuntu and need to upgrade your PHP version, this guide will walk you through the process step by step. We'll demonstrate how to switch from PHP 7.4 to PHP 8.2 using the `update-alternatives` command.

## Step 1: Install PHP 8.2

First, ensure that PHP 8.2 is installed on your system. Open your terminal and run the following commands:

```bash
sudo apt-get update
sudo apt-get install php8.2
```

## Step 2: List Available PHP Versions

Use the following command to list the available PHP versions installed on your system:

```bash
sudo update-alternatives --list php
```

This will display a list of installed PHP versions.

## step 3: Choose PHP Version
Run the following command to select the desired PHP version (replace "X.Y" with the version you want, e.g., 8.2):

```bash
sudo update-alternatives --config php
```

## step 4: Verify the PHP version
Check the active PHP version to ensure the change has taken effect:

```bash
php -v
```
This should display the version you selected.

## step 5: Restart the web server
If you're using PHP with a web server like Apache or Nginx, restart it to apply the changes:

For Apache:

```bash
sudo service apache2 restart
```

For Nginx:

```bash
sudo service nginx restart
```

Now, your system should be using PHP 8.2. You can confirm this by running php -v and checking the version number.

Remember that updating PHP versions might require adjustments to your PHP code to ensure compatibility with the new version. Make sure to test your applications thoroughly after the version change.
