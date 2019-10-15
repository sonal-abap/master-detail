/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"acc/fiori/Master-detail/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});