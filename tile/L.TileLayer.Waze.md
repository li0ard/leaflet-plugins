# L.TileLayer.Waze
L.TileLayer.Waze is a [Leaflet.js](https://leafletjs.com) plugin for creating tile layers from Waze. It is essentially a wrapper over L.TileLayer.

## Usage
[Download manually](/dist/L.TileLayer.Waze.js). Include the file in yout page, and use it:
```js
L.tileLayer.waze().addTo(map);
```
or, more verbose:
```js
var waze = L.tileLayer.waze()
```
