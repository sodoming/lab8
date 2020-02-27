function initMap() {
	L.mapquest.key = 'WaY2n1yLpWZqCH8jiNadRL4f0EgzGF6V';

	var map = L.mapquest.map('map',{
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 15,
		zoomControl: false
	});

	L.marker([32.879003,-117.236027]).addTo(map);
}