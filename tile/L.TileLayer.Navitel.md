# L.TileLayer.Navitel
L.TileLayer.Navitel is a [Leaflet.js](https://leafletjs.com) plugin for creating tile layers from Navitel. It is essentially a wrapper over L.TileLayer.

## Usage (Map)
[Download manually](/dist/L.TileLayer.Navitel.js). Include the file in yout page, and use it:
```js
L.tileLayer.navitel().addTo(map);
```
or, more verbose:
```js
var waze = L.tileLayer.navitel()
```

## Usage (Traffic)
```js
L.tileLayer.navitelTraffic().addTo(map);
```
or, more verbose:
```js
var waze = L.tileLayer.navitelTraffic()
```