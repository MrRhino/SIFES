Simple Front End Stack
=========

This web project has the following setup:

	* www/ - the web assets for the project
	* www/server.js - minimal node.js http server. Start with the command: "node server" ( from the www folder )
    * www/index.html - the entry point into the app.
    * www/app.js - the top-level config script used by index.html
    * www/app/ - the directory to store project-specific scripts.
    * www/css/ - style sheets.
    * www/script/lib/ - the directory to hold third party scripts.
	* tools/ - the build tools to optimize the project.


Installation
---------
1. git clone git@github.com:MrRhino/SIFES.git<br>
2. npm install<br>

Run
---------
Go to th www folder and run the command "node server"


To optimize
---------

	node tools/r.js -o app.build.js ( from the parent of the tools folder )

That build command creates an optimized version of the project in a
**appdirectory-build** directory. The app.js file will be optimized to include
all of its dependencies.

For more information on the optimizer:
http://requirejs.org/docs/optimization.html

For more information on using requirejs:
http://requirejs.org/docs/api.html

For more information on using optimize-requirejs-projects:
http://www.webdeveasy.com/optimize-requirejs-projects/
