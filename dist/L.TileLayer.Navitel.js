L.TileLayer.Navitel = L.TileLayer.extend({
	options: {
		minZoom: 10,
		maxZoom: 18,
		tms: true,
		subdomains: ["a", "b", "c", "d"]
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
		var x = String(coords.x).padStart(8, "0")
		var y = coords.y
		y = Math.pow(2, coords.z) - y - 1;
		y = String(y).padStart(8, "0")
		var subdomains = ["a", "b", "c", "d"]

		var url = L.Util.template(`https://dmap${subdomains[Math.floor(Math.random()*subdomains.length)]}.navitel.ru/navitms.fcgi?t=${x},${y},${coords.z}&hl=ru&version=12`)

		return url
	},

	onAdd: function (map) {
		L.TileLayer.prototype.onAdd.call(this, map)
	},

	onRemove: function (map) {
		L.TileLayer.prototype.onRemove.call(this, map)
	}
})

L.TileLayer.NavitelTraffic = L.TileLayer.extend({
	options: {
		minZoom: 10,
		maxZoom: 18,
		tms: true,
		subdomains: ["a", "b", "c", "d"]
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
		var x = String(coords.x).padStart(8, "0")
		var y = coords.y
		y = Math.pow(2, coords.z) - y - 1;
		y = String(y).padStart(8, "0")
		var subdomains = ["a", "b", "c", "d"]

		var url = L.Util.template(`https://dmap${subdomains[Math.floor(Math.random()*subdomains.length)]}.navitel.ru/navitms.fcgi?j=${x},${y},${coords.z}&hl=ru&version=12`)

		return url
	},

	onAdd: function (map) {
		L.TileLayer.prototype.onAdd.call(this, map)
	},

	onRemove: function (map) {
		L.TileLayer.prototype.onRemove.call(this, map)
	}
})

L.tileLayer.navitel = function (options) {
	return new L.TileLayer.Navitel(options)
}
L.tileLayer.navitelTraffic = function (options) {
	return new L.TileLayer.NavitelTraffic(options)
}