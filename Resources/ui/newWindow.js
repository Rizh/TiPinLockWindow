function newWindow() {
	
	var currentWin = Ti.UI.createWindow({
		backgroundColor : '#cccccc',
		orientationModes : [Titanium.UI.PORTRAIT],
		top : 0,
		exitOnClose : false,
		backButtonTitle : 'Back'
	});
	
	var label = Ti.UI.createLabel({
		text : 'new window'
	});
	currentWin.add(label);
	
	currentWin.addEventListener("open", function() {
		if (Ti.Platform.osname === "android") {
			if (!context.currentWin.activity) {
				Ti.API.error("Can't access action bar on a lightweight window.");
			} else {
				actionBar = context.currentWin.activity.actionBar;
				if (actionBar) {
					actionBar.hide();
				}
			}
		}
	});

	return currentWin;
};

module.exports = newWindow; 