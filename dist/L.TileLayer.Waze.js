(function () {
	'use strict';

	L.TileLayer.Waze = L.TileLayer.extend({
		baseUrl: 'https://worldtiles{s}.waze.com/tiles/{z}/{x}/{y}.png',
		options: {
			maxNativeZoom: 18,
			attribution: '&copy; Maps by <a href="http://waze.com">Waze</a>',
			subdomains: ['1', '2', '3', '4']
		},
		initialize: function (options) {
			L.TileLayer.prototype.initialize.call(this, this.baseUrl, options);
		}
	})

	L.tileLayer.waze = function (options) {
		return new L.TileLayer.Waze(options);
	}

}());
