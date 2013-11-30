
Video player (Chrome app)
=====================

This sample Chrome app plays videos from a directory inside an HTML5 video element in loop.

----------

Requirements
------------

We assume that you have a working installation of Nodejs and the following node packages:

* Grunt (`npm install -g grunt-cli`)
* Bower (`npm install -g bower`)

Installation
------------

After you have cloned the repository, insisde the main directory you will need to run:

    npm install

this will install all the required node packages inside `node_modules`.

    bower install

this will install all the frontend vendor libraries inside `bower_components`.

Running the project
-------------------

The project can be run in develop mode using the Grunt command line

    grunt develop

this command will activate a file watcher and will fire up a development web server on `localhost:9000`.

Building the app
----------------

Running `grunt build` will build the application only once. The result files (as in development mode) will be available in the `dist` directory.

Install the app on Chrome
-------------------------

This app can be installed as usually via the `chrome://extensions` special page. Select the `dist` directory as target and the application will install normally.