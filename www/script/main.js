require.config({

	paths: {
		'messages'		: '../app/messages',
		'backbone' 		: 'lib/backbone',
		'domReady' 		: 'lib/domReady',
		'jquery' 		: 'lib/jquery',
		'print' 		: 'lib/print',
		'underscore' 	: 'lib/underscore'
	}
});


// 	'use strict';
require(['jquery', 'domReady', 'messages', 'print', 'underscore', 'backbone'], function($, domReady, messages, print) {
	'use strict';

    print($('div:eq(0)').html());

});
