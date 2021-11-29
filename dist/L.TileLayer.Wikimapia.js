L.TileLayer.Wikimapia = L.TileLayer.extend({
	options: {
		minZoom: 2,
		maxZoom: 18
	},

	initialize: function (options) {

	},

	createTile: function (coords, done) {
		var tile = document.createElement('img')

		L.DomEvent.on(tile, 'load', L.bind(this._tileOnLoad, this, done, tile))
		L.DomEvent.on(tile, 'error', L.bind(this._tileOnError, this, done, tile))
		tile.alt = ''

		tile.src = this.getTileUrl(coords)

		return tile
	},

	getTileUrl: function (coords) {
		var hash = coords.x % 4 + (coords.y % 4) * 4;
		var url = L.Util.template(`http://i${hash}.wikimapia.org/?x=${coords.x}&y=${coords.y}&zoom=${coords.z}&r=7071412&type=&lng=1`)

		return url
	},

	onAdd: function (map) {
		L.TileLayer.prototype.onAdd.call(this, map)
	},

	onRemove: function (map) {
		L.TileLayer.prototype.onRemove.call(this, map)
	}
})

L.tileLayer.wikimapia = function (options) {
	return new L.TileLayer.Wikimapia(options)
}
