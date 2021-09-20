import mapboxgl from 'mapbox-gl';
import spotterIcon from '../images/spotter_icon.png';

const initMapbox = () => {

	const fitMapToMarkers = (map, markers) => {
		const bounds = new mapboxgl.LngLatBounds();
		markers.forEach(marker => bounds.extend([ marker.lon, marker.lat ]));
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
		const almirantado_extData = JSON.parse(mapElement.dataset.almirantadoext);
		const inpeData = JSON.parse(mapElement.dataset.inpe);

		markers.forEach((marker) => {
			if (marker.name === 'almirantado_int') {
				var almirantado_int = document.createElement('div');
				almirantado_int.className = 'marker';
				almirantado_int.style.backgroundImage = `url('${spotterIcon}')`;
				almirantado_int.style.backgroundSize = 'contain';
				almirantado_int.style.width = '50px';
				almirantado_int.style.height = '38px';
				new mapboxgl.Marker(almirantado_int)
				.setLngLat([ marker.lon, marker.lat ])
				.setPopup(new mapboxgl.Popup().setHTML(`<h2>RJ-4</h2><p>LAT: ${Math.round(marker.lon*100)/100}, LON: ${Math.round(marker.lat*100)/100}</p>
					<p>DATA-HORA: ${almirantado_intData.date_time[almirantado_intData.date_time.length -1].slice(0,16)}</p>
					<p>Hsig: ${almirantado_intData.swvht[almirantado_intData.date_time.length -1]}</p>
					<p>Vel. Vento: ${almirantado_intData.wspd[almirantado_intData.date_time.length -1]}</p>`))
				.addTo(map);
			} else if (marker.name === 'almirantado_ext'){
				var almirantado_ext = document.createElement('div');
				almirantado_ext.className = 'marker';
				almirantado_ext.style.backgroundImage = `url('${spotterIcon}')`;
				almirantado_ext.style.backgroundSize = 'contain';
				almirantado_ext.style.width = '50px';
				almirantado_ext.style.height = '38px';
				new mapboxgl.Marker(almirantado_ext)
				.setLngLat([ marker.lon, marker.lat ])
				.setPopup(new mapboxgl.Popup().setHTML(`<h2>RJ-3</h2><p>LAT: ${Math.round(marker.lon*100)/100}, LON: ${Math.round(marker.lat*100)/100}</p>
					<p>DATA-HORA: ${almirantado_extData.date_time[almirantado_extData.date_time.length -1].slice(0,16)}</p>
					<p>Hsig: ${almirantado_extData.swvht[almirantado_extData.date_time.length -1]}</p>
					<p>Vel. Vento: ${almirantado_extData.wspd[almirantado_extData.date_time.length -1]}</p>`))
				.addTo(map);
			} else {
				var inpe = document.createElement('div');
				inpe.className = 'marker';
				inpe.style.backgroundImage = `url('${spotterIcon}')`;
				inpe.style.backgroundSize = 'contain';
				inpe.style.width = '50px';
				inpe.style.height = '38px';
				new mapboxgl.Marker(inpe)
				.setLngLat([ marker.lon, marker.lat ])
				.setPopup(new mapboxgl.Popup().setHTML(`<h2>inpe</h2><p>LAT: ${Math.round(marker.lon*100)/100}, LON: ${Math.round(marker.lat*100)/100}</p>
					<p>DATA-HORA: ${inpeData.date_time[inpeData.date_time.length -1].slice(0,16)}</p>
					<p>Hsig: ${inpeData.swvht[inpeData.date_time.length -1]}</p>
					<p>Vel. Vento: ${inpeData.wspd[inpeData.date_time.length -1]}</p>`))
				.addTo(map);
			}
		});

		fitMapToMarkers(map, markers);

	}
};

export { initMapbox };