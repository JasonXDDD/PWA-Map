var map = L.map('map', {zoomControl:true}).setView([25.023387, 121.5431559], 17);

L.tileLayer.provider('Esri.WorldTopoMap').addTo(map);