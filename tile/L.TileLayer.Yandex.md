# L.TileLayer.Yandex
L.TileLayer.Yandex is a [Leaflet.js](https://leafletjs.com) plugin for creating tile layers from Yandex. It is essentially a wrapper over L.TileLayer.

## Usage
[Download manually](/dist/L.TileLayer.Yandex.js). Include the file in yout page

### [!!!] Set CRS EPSG:3395 for the map, otherwise the map will not display correctly. Installation example CRS EPSG:3395 :
```js
var map = L.map('map', {
    crs: L.CRS.EPSG3395
})
```

#### Yandex Map
```js
var yandex = L.tileLayer.yandex() 
```
or
```js
L.tileLayer.yandex().addTo(map);
```

#### Yandex Sat Map
```js
var yandex = L.tileLayer.yandex({
    layer: "sat"
}) 
```
or
```js
L.tileLayer.yandex({
    layer: "sat"
}).addTo(map);
```
