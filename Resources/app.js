(function() {

	var win;
	win = require('ui/pinLock');
	if (!Ti.App.Properties.getObject('PIN')) {
		win = new win("firstTime");
	} else {
		win = new win();
	}
	win.open();
})();
