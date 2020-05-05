---
layout: post
title: Installing Ubuntu
---

# How to set up localhost for Joomla

### Setting up a lamp server for PHP development

Installing Joomla on your localhost is not quite easy but if you know how to google effectively about your errors after reading their documentation its quite easy.

You need a stable internet connection for doing this. First check if the following packages are installed by using:

`<pakage name> --version`

the packages are:

`apache2 php-mysql libapache2-mod-php mysql-server phpmyadmin php-curl`

Then install them with :

`sudo apt-get install <pakage name>`

Then continue with the given questions, and then you must install composer by running

`sudo apt-get install composer`

later you can download nodejs from the website or you can install it from ubuntu repository by running:

`sudo apt-get install nodejs`

but make sure that you have git installed, if not do it by using:

`sudo apt install git`

then go to your forked repository of Joomla cms and clone in inside /var/www/html by using:

`git clone -b 4.0-dev <copied url>`

then go to the cloned repository by using:

`cd /var/www/html/joomla-cms`

there you can install the composer by running:

`composer install `

then if you get any error for installing some packages such as LDAP or such to install them by using:

`sudo apt install php-ldap php-ci php-zip
`

then run:

`npm ci`

and finally, give permissions to write the configuration.php file by running:

`sudo chmod -R 777 /var/www/html/joomla-cms
`