import mapboxgl from 'mapbox-gl';
import spotterIconBlue from '../images/spotter_icon_blue.png';

const initMapbox = () => {

	const fitMapToMarkers = (map, markers) => {
		const bounds = new mapboxgl.LngLatBounds();
		bounds.extend([ markers.lon, markers.lat ]);
		map.fitBounds(bounds, { padding: 70, maxZoom: 11, duration: 0 });
	};
  
	const mapElement = document.getElementById('map');

	if (mapElement) { // only build a map if there's a div#map to inject into
		mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/outdoors-v11'
		});

		const markers = JSON.parse(mapElement.dataset.markers);
		const almirantado_intData = JSON.parse(mapElement.dataset.almirantadoint);
				
		const almirantadoIntCard = document.getElementById('almirantado_int');
	
				var almirantado_int = document.createElement('div');
				almirantado_int.className = 'marker';
				almirantado_int.style.backgroundImage = `url('${spotterIconBlue}')`;
				almirantado_int.style.backgroundSize = 'contain';
				almirantado_int.style.width = '50px';
				almirantado_int.style.height = '38px';
				if (JSON.stringify(almirantado_intData) === '{}' || almirantado_intData.date_time.length === 0) {
					const markerAlmirantadoInt = new mapboxgl.Marker(almirantado_int)
					.setLngLat([ markers.lon, markers.lat ])
			        .setPopup(new mapboxgl.Popup().setHTML(`<div class='pop-up'>
			          <h3 class='m-0 p-0'><strong>A SER LANÇADA</strong></h3></div>`))
					.addTo(map);
					markerAlmirantadoInt.getElement().addEventListener('click', () => {
						almirantadoIntCard.classList.remove('card-animation');
						void 	almirantadoIntCard.offsetWidth; // trigger reflow
						almirantadoIntCard.classList.add('card-animation');
			        });
				} else {
					const markerAlmirantadoInt = new mapboxgl.Marker(almirantado_int)
					.setLngLat([ markers.lon, markers.lat ])
			        .setPopup(new mapboxgl.Popup().setHTML(`<div class='pop-up'>
			          <h3 class='m-0 p-0'><strong>OPERATIVA</strong></h3>
			          <p class='m-0 p-0'><strong>LAT:</strong> ${Math.round(markers.lat*100)/100}, <strong>LON:</strong> ${Math.round(markers.lon*100)/100}</p>
			          <p class='m-0 p-0'><strong>DATA:</strong> ${almirantado_intData.date_time[0].slice(0,10)}</p>
			          <p class='m-0 p-0'><strong>HORA:</strong> ${almirantado_intData.date_time[0].slice(11,16)}</p>
			          <p class='m-0 p-0'><strong>Altura Onda:</strong> ${almirantado_intData.swvht[0]} m</p>
			          <p class='m-0 p-0'><strong>Vel. Vento:</strong> ${almirantado_intData.wspd[0]} m/s</p></div>`))
					.addTo(map);
					markerAlmirantadoInt.getElement().addEventListener('click', () => {
						almirantadoIntCard.classList.remove('card-animation');
						void 	almirantadoIntCard.offsetWidth; // trigger reflow
						almirantadoIntCard.classList.add('card-animation');
			        });
				}
		

		fitMapToMarkers(map, markers);

	}
};

const initMapboxDrifter = () => {

	const fitMapToMarkers = (map, markers) => {
		const bounds = new mapboxgl.LngLatBounds();
		markers.forEach(marker => bounds.extend([ marker.lon, marker.lat ]));
		map.fitBounds(bounds, { padding: 70, maxZoom: 8, duration: 0 });
	};
  
	const mapElement = document.getElementById('map_drifter');

	if (mapElement) { // only build a map if there's a div#map to inject into
		mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
		const map = new mapboxgl.Map({
			container: 'map_drifter',
			style: 'mapbox://styles/mapbox/outdoors-v11'
		});

		const markers = JSON.parse(mapElement.dataset.markers);

		console.log(markers)
		
	}
};

export { initMapbox, initMapboxDrifter };
