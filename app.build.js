({
    appDir: "www",
    baseUrl: "script",
    dir: "appdirectory-build",
	mainConfigFile: 'www/script/main.js',
    modules: [
        {
            name: "main"
        }
    ],
    removeCombined: true,
    paths: {
		'messages' : '../app/messages',
		'backbone' : 'lib/backbone',
		'domReady' : 'lib/domReady',
		'jquery' : 'lib/jquery',
		'print' : 'lib/print',
		'underscore' : 'lib/underscore'
    }
})