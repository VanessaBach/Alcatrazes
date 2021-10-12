import mapboxgl from 'mapbox-gl';
import spotterIconYellow from '../images/spotter_icon_yellow.png';
import spotterIconGreen from '../images/spotter_icon_green.png';
import spotterIconBlue from '../images/spotter_icon_blue.png';

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

		const inpeCard = document.getElementById('inpe');
		const almirantadoIntCard = document.getElementById('almirantado_int');
		const almirantadoExtCard = document.getElementById('almirantado_ext');

		markers.forEach((marker) => {
			if (marker.name === 'almirantado_int') {
				var almirantado_int = document.createElement('div');
				almirantado_int.className = 'marker';
				almirantado_int.style.backgroundImage = `url('${spotterIconBlue}')`;
				almirantado_int.style.backgroundSize = 'contain';
				almirantado_int.style.width = '50px';
				almirantado_int.style.height = '38px';
				const markerAlmirantadoInt = new mapboxgl.Marker(almirantado_int)
				.setLngLat([ marker.lon, marker.lat ])
        .setPopup(new mapboxgl.Popup().setHTML(`<div class='pop-up'>
          <h3 class='m-0 p-0'><strong>OPERATIVA</strong></h3>
          <p class='m-0 p-0'><strong>LAT:</strong> ${Math.round(marker.lon*100)/100}, <strong>LON:</strong> ${Math.round(marker.lat*100)/100}</p>
          <p class='m-0 p-0'><strong>DATA:</strong> ${almirantado_intData.date_time[almirantado_intData.date_time.length -1].slice(0,10)}</p>
          <p class='m-0 p-0'><strong>HORA:</strong> ${almirantado_intData.date_time[almirantado_intData.date_time.length -1].slice(11,16)}</p>
          <p class='m-0 p-0'><strong>Altura Onda:</strong> ${almirantado_intData.swvht[almirantado_intData.date_time.length -1]} m</p>
          <p class='m-0 p-0'><strong>Vel. Vento:</strong> ${almirantado_intData.wspd[almirantado_intData.date_time.length -1]} nós</p></div>`))
				.addTo(map);
				markerAlmirantadoInt.getElement().addEventListener('click', () => {
					almirantadoIntCard.classList.remove('card-animation');
					void 	almirantadoIntCard.offsetWidth; // trigger reflow
					almirantadoIntCard.classList.add('card-animation');
        });
			} else if (marker.name === 'almirantado_ext'){
				var almirantado_ext = document.createElement('div');
				almirantado_ext.className = 'marker';
				almirantado_ext.style.backgroundImage = `url('${spotterIconYellow}')`;
				almirantado_ext.style.backgroundSize = 'contain';
				almirantado_ext.style.width = '50px';
				almirantado_ext.style.height = '38px';
				const markerAlmirantadoExt = new mapboxgl.Marker(almirantado_ext)
				.setLngLat([ marker.lon, marker.lat ])
        .setPopup(new mapboxgl.Popup().setHTML(`<div class='pop-up'>
          <h3 class='m-0 p-0'><strong>OPERATIVA</strong></h3>
          <p class='m-0 p-0'><strong>LAT:</strong> ${Math.round(marker.lon*100)/100}, <strong>LON:</strong> ${Math.round(marker.lat*100)/100}</p>
          <p class='m-0 p-0'><strong>DATA:</strong> ${almirantado_extData.date_time[almirantado_extData.date_time.length -1].slice(0,10)}</p>
          <p class='m-0 p-0'><strong>HORA:</strong> ${almirantado_extData.date_time[almirantado_extData.date_time.length -1].slice(11,16)}</p>
          <p class='m-0 p-0'><strong>Altura Onda:</strong> ${almirantado_extData.swvht[almirantado_extData.date_time.length -1]} m</p>
          <p class='m-0 p-0'><strong>Vel. Vento:</strong> ${almirantado_extData.wspd[almirantado_extData.date_time.length -1]} nós</p></div>`))
				.addTo(map);
				markerAlmirantadoExt.getElement().addEventListener('click', () => {
					almirantadoExtCard.classList.remove('card-animation');
					void 	almirantadoExtCard.offsetWidth; // trigger reflow
					almirantadoExtCard.classList.add('card-animation');
        });
			} else {
				var inpe = document.createElement('div');
				inpe.className = 'marker';
				inpe.style.backgroundImage = `url('${spotterIconGreen}')`;
				inpe.style.backgroundSize = 'contain';
				inpe.style.width = '50px';
				inpe.style.height = '38px';
				const markerInpe = new mapboxgl.Marker(inpe)
				.setLngLat([ marker.lon, marker.lat ])
				.setPopup(new mapboxgl.Popup().setHTML(`<div class='pop-up'>
          <h3 class='m-0 p-0'><strong>OPERATIVA</strong></h3>
          <p class='m-0 p-0'><strong>LAT:</strong> ${Math.round(marker.lon*100)/100}, <strong>LON:</strong> ${Math.round(marker.lat*100)/100}</p>
					<p class='m-0 p-0'><strong>DATA:</strong> ${inpeData.date_time[inpeData.date_time.length -1].slice(0,10)}</p>
          <p class='m-0 p-0'><strong>HORA:</strong> ${inpeData.date_time[inpeData.date_time.length -1].slice(11,16)}</p>
					<p class='m-0 p-0'><strong>Altura Onda:</strong> ${inpeData.swvht[inpeData.date_time.length -1]} m</p>
					<p class='m-0 p-0'><strong>Vel. Vento:</strong> ${inpeData.wspd[inpeData.date_time.length -1]} nós</p></div>`))
				.addTo(map);
				markerInpe.getElement().addEventListener('click', () => {
					inpeCard.classList.remove('card-animation');
					void 	inpeCard.offsetWidth; // trigger reflow
					inpeCard.classList.add('card-animation');
        });

			}
		});

		fitMapToMarkers(map, markers);

	}
};

export { initMapbox };
