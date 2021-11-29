L.TileLayer.Yandex = L.TileLayer.extend({
	options: {
		subdomains: ["1", "2", "3", "4"],
		minZoom: 2,
		maxZoom: 18,
		layer: "map"
	},

	initialize: function initialize(options) {
		options = L.setOptions(this, options);
		if (options.layer == "sat") {
			var tileUrl = 'https://sat0{s}.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}'
		}
		else if (options.layer == "map") {
			var tileUrl = "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=21.11.26-0-b211103130830&x={x}&y={y}&z={z}&scale=1&lang=ru_RU"
		}
		L.TileLayer.prototype.initialize.call(this, tileUrl, options);
	},

	onAdd: function onAdd(map) {
		L.TileLayer.prototype.onAdd.call(this, map);
	},

	onRemove: function onRemove(map) {
		L.TileLayer.prototype.onRemove.call(this, map);
	}
});

L.tileLayer.yandex = function(opts){
	return new L.TileLayer.Yandex(opts);
}
