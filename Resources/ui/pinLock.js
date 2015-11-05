function pinLock(args) {
	var context = this;
	Ti.API.info(JSON.stringify(args));
	var firstTime = (args) ? args : null;

	var window = Ti.UI.createWindow({
		orientationModes : [Titanium.UI.PORTRAIT],
		backgroundColor : '#cccccc',
		extendEdges : [Ti.UI.EXTEND_EDGE_ALL],
		exitOnClose : true,
		navBarHidden : true
	});

	var view = createLayout(context);

	window.add(view);

	function createPinView(context) {

		var tfs = [];

		var viewPin = Ti.UI.createView({
			backgroundColor : 'black',
			top : '20dp',
			right : 0,
			left : 0,
			layout : 'vertical'
		});

		var fieldsView = Titanium.UI.createView({
			backgroundColor : 'transparent',
			top : '20dp',
			borderColor : 'transparent',
			borderRadius : 0,
			borderWidth : 0,
			layout : 'horizontal',
			height : '70dp',
			width : Ti.UI.SIZE
		});
		viewPin.add(fieldsView);

		var _height;
		if (Ti.Android) {
			_height = '55dp';
		} else {
			_height = 45;
		}

		var tf1 = Ti.UI.createTextField({
			left : 0,
			height : _height,
			width : '40dp',
			paddingLeft : '10dp',
			paddingRight : '10dp',
			backgroundColor : 'white',
			font : {
				fontSize : 24
			},
			color : '#000000',
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		tfs[0] = tf1;
		fieldsView.add(tf1);

		var tf2 = Ti.UI.createTextField({
			left : '10dp',
			height : _height,
			width : '40dp',
			paddingLeft : 10,
			paddingRight : 10,
			backgroundColor : 'white',
			font : {
				fontSize : 24
			},
			color : '#000000',
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		tfs[1] = tf2;
		fieldsView.add(tf2);

		var tf3 = Ti.UI.createTextField({
			left : '10dp',
			height : _height,
			width : '40dp',
			paddingLeft : 10,
			paddingRight : 10,
			backgroundColor : 'white',
			font : {
				fontSize : 24
			},
			color : '#000000',
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		tfs[2] = tf3;
		fieldsView.add(tf3);

		var tf4 = Ti.UI.createTextField({
			left : '10dp',
			height : _height,
			width : '40dp',
			paddingLeft : 10,
			paddingRight : 10,
			backgroundColor : 'white',
			font : {
				fontSize : 24
			},
			color : '#000000',
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		tfs[3] = tf4;
		fieldsView.add(tf4);

		var tf5 = Ti.UI.createTextField({
			left : '10dp',
			height : _height,
			width : '40dp',
			paddingLeft : 10,
			paddingRight : 10,
			backgroundColor : 'white',
			font : {
				fontSize : 24
			},
			color : '#000000',
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		tfs[4] = tf5;
		fieldsView.add(tf5);

		var pin = [];

		tf1.addEventListener('focus', function(e) {
			tf1.blur();
		});
		tf2.addEventListener('focus', function(e) {
			tf2.blur();
		});
		tf3.addEventListener('focus', function(e) {
			tf3.blur();
		});
		tf4.addEventListener('focus', function(e) {
			tf4.blur();
		});
		tf5.addEventListener('focus', function(e) {
			tf5.blur();
			Ti.API.info(pin);
			alert('ok');
		});

		var viewKeypad = Ti.UI.createView({
			top : 0,
			height : Ti.UI.SIZE,
			layout : 'vertical'
		});
		viewPin.add(viewKeypad);

		var imageNumber = 1;
		var numbers = [];
		var _heightWidth,
		    _top;
		if (Ti.Android) {
			_heightWidth = '70dp';
			_top = '15dp';
		} else {
			_heightWidth = 60;
			_top = 10;
		}

		var row = Ti.UI.createView({
			top : _top,
			layout : 'horizontal',
			height : _heightWidth,
			width : Ti.UI.SIZE
		});
		viewKeypad.add(row);

		for (var i = 0; i < 3; i++) {
			var anImageView = Ti.UI.createImageView({
				image : '/images/numbers/num' + imageNumber + '.png',
				backgroundColor : 'white',
				width : _heightWidth,
				height : _heightWidth,
				left : (i == 0) ? 0 : '20dp',
				borderRadius : 30,
				borderColor : 'white',
				number : imageNumber,
				borderWidth : '2dp'
			});
			row.add(anImageView);
			numbers[imageNumber] = anImageView;
			imageNumber++;
		};

		var row2 = Ti.UI.createView({
			top : _top,
			layout : 'horizontal',
			height : _heightWidth,
			width : Ti.UI.SIZE
		});
		viewKeypad.add(row2);

		for (var i = 0; i < 3; i++) {
			var anImageView = Ti.UI.createImageView({
				image : '/images/numbers/num' + imageNumber + '.png',
				backgroundColor : 'white',
				width : _heightWidth,
				height : _heightWidth,
				left : (i == 0) ? 0 : '20dp',
				borderRadius : '30dp',
				borderColor : 'white',
				number : imageNumber,
				borderWidth : '2dp'
			});
			row2.add(anImageView);
			numbers[imageNumber] = anImageView;
			imageNumber++;
		};

		var row3 = Ti.UI.createView({
			top : _top,
			layout : 'horizontal',
			height : _heightWidth,
			width : Ti.UI.SIZE
		});
		viewKeypad.add(row3);

		for (var i = 0; i < 3; i++) {
			var anImageView = Ti.UI.createImageView({
				image : '/images/numbers/num' + imageNumber + '.png',
				backgroundColor : 'white',
				width : _heightWidth,
				height : _heightWidth,
				left : (i == 0) ? 0 : '20dp',
				borderRadius : '30dp',
				borderColor : 'white',
				number : imageNumber,
				borderWidth : '2dp'
			});
			row3.add(anImageView);
			numbers[imageNumber] = anImageView;
			imageNumber++;
		};

		var vLastRow = Ti.UI.createView({
			top : _top,
			layout : 'horizontal',
			height : _heightWidth,
			width : Ti.UI.SIZE
		});
		viewKeypad.add(vLastRow);

		var ivCancel = Ti.UI.createImageView({
			image : '/images/cancel.png',
			width : '44dp',
			height : '43dp',
			left : 0
		});
		ivCancel.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});
		vLastRow.add(ivCancel);
		ivCancel.addEventListener('click', function(e) {
			if (pin.length >= 0) {
				pin.pop();
				tfs[pin.length].value = '';
			}
		});

		var iv0 = Ti.UI.createImageView({
			image : '/images/numbers/num0.png',
			backgroundColor : 'white',
			width : _heightWidth,
			height : _heightWidth,
			left : '30dp',
			borderRadius : '30dp',
			borderColor : 'white',
			number : 0,
			borderWidth : '2dp'
		});
		vLastRow.add(iv0);
		numbers[0] = iv0;

		var ivOkay = Ti.UI.createImageView({
			image : '/images/ok.png',
			width : '44dp',
			height : '43dp',
			left : '30dp'
		});
		vLastRow.add(ivOkay);
		ivOkay.addEventListener('click', function(e) {
			if (pin.length == 5) {
				alert(pin.toString());
			} else {
				alert('Enter pin');
			}
		});

		for (var i = 0; i < numbers.length; i++) {
			numbers[i].addEventListener('click', function(e) {
				Ti.API.info(e.source.number);
				tfs[pin.length].value = e.source.number;
				pin.push(e.source.number);
				if (pin.length == 5) {
					if (firstTime) {
						alert("Your selected pin is: " + pin.toString());
						Ti.App.Properties.setObject('PIN', pin.toString());
						for (var i = 0; i < tfs.length; i++) {
							tfs[i].value = '';
							pin = [];
						};
					} else {
						Ti.API.info('Ti.App.Properties.getObject(PIN): ' + Ti.App.Properties.getObject('PIN'));
						if (pin.toString() == Ti.App.Properties.getObject('PIN')) {
							Ti.API.info(pin.toString());
							var winWindow = require('ui/newWindow');
							winWindow = new winWindow();
							winWindow.open();
						} else {
							for (var i = 0; i < tfs.length; i++) {
								tfs[i].value = '';
								pin = [];
							};
							alert("Pin is not correct. Please try again.");
						}
					}
				}
			});
		};

		return viewPin;
	}

	function createLayout(context) {

		var view = Ti.UI.createView({
			backgroundColor : 'white',
			top : 0,
			right : 0,
			left : 0,
			layout : 'vertical'
		});

		var imgLogo = Ti.UI.createImageView({
			image : '/logo.png',
			width : 150,
			height : 90,
			borderRadius : 8,
			top : 30
		});

		view.add(imgLogo);

		var pinView = createPinView(context);
		view.add(pinView);

		return view;
	}


	window.addEventListener("open", function() {
		if (Ti.Platform.osname === "android") {
			if (!window.activity) {
				Ti.API.error("Can't access action bar on a lightweight window.");
			} else {
				actionBar = window.activity.actionBar;
				if (actionBar) {
					actionBar.hide();
				}
			}
		}
	});

	return window;
};

module.exports = pinLock; 