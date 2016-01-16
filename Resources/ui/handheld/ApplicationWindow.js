//Application Window Component Constructor
function ApplicationWindow() {
	
	
	// If supported, listen to the event that fires when a app shortcut has been tapped on
	if (Ti.UI.iOS.forceTouchSupported) {
		Ti.API.log('info','force touch is supported');
		/**
		 * Event listener for taps on app shortcut items
		 */
		function onShortcutitemclick(e) {
			
			Ti.App.Properties.setString('forceTouchSet', e.itemtype);
		
			Ti.API.log('info','fired shortcutitemclick');
		
		}
				
		Ti.App.iOS.addEventListener('shortcutitemclick', onShortcutitemclick);

	}	
	
	
	//load component dependencies
	var FirstView = require('ui/common/FirstView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var firstView = new FirstView();
	self.add(firstView);

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
