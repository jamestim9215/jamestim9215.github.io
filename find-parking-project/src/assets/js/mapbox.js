const mapStyle = [
    "mapbox://styles/mapbox/streets-v11",           //Mapbox Streets
    "mapbox://styles/mapbox/outdoors-v11",          //Mapbox Outdoors
    "mapbox://styles/mapbox/light-v10",             //Mapbox Light
    "mapbox://styles/mapbox/dark-v10",              //Mapbox Dark
    "mapbox://styles/mapbox/satellite-v9",          //Mapbox Satellite
    "mapbox://styles/mapbox/satellite-streets-v11", //Mapbox Satellite Streets
    "mapbox://styles/mapbox/navigation-day-v1",     //Mapbox Navigation Day
    "mapbox://styles/mapbox/navigation-night-v1",   //Mapbox Navigation Night
]

const geojson = {
    'type': '',
    'features': [
        {
            'type': 'Feature',
            'imgUrl': 'https://lh5.googleusercontent.com/p/AF1QipMbSLBYN2j5OS5p3RmwDI9JAtNcovW9DQMEzhar=s434-k-no',
            'properties': {
                'info': '市民大道停車場-公中段 公園-中山',
                'times': '24hr',
                'address': '號, No. 209市民大道一段大同區台北市103',
                'iconSize': [50, 50],
                'supercar': {
                    'status': true,
                    'halfAnHour': '15',
                    'anhour': '30',
                    'dayMax' : '200',
                },
                'car': {
                    'status': true,
                    'halfAnHour': '15',
                    'anhour': '30',
                    'dayMax' : '200',
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [121.51922586721074 , 25.048216969418476]
            },
            'isShow': false
        },
        {
            'type': 'Feature',
            'imgUrl': 'https://lh5.googleusercontent.com/p/AF1QipM8xZ1UG-FG3pG9agSm5C6lWVR5Q5GgE1PKNwit=w203-h152-k-no',
            'properties': {
                'info': '京站 汽車停車場',
                'times': '24hr',
                'address': '103台北市大同區承德路一段3號B4樓',
                'iconSize': [50, 50],
                'supercar': {
                    'status': true,
                    'halfAnHour': '-',
                    'anhour': '80',
                    'dayMax' : '-',
                },
                'car': {
                    'status': true,
                    'halfAnHour': '-',
                    'anhour': '80',
                    'dayMax' : '-',
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [121.51816809633854 , 25.048818668976068]
            },
            'isShow': false
        },
    ]
};



function mapBoxInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXN0aW05MjE1IiwiYSI6ImNrdmo2Y2I4aDVmejEzMm1zbThsdGdoajAifQ.UfBJAI7fFsv2wcAEBo6WUA';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: mapStyle[0], // style URL
        center: [121.5173399,25.0475613], // starting position [lng, lat]
        // center: [121.54339, 24.978672],
        zoom: 16, // starting zoom 
        // bearing: 0,
        // pitch: 60,
        trackResize: true
    });

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );

    // Add markers to the map.
    for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = 'marker';
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        // el.style.visibility = '';

        const tag = document.createElement('div');
        tag.className = 'tag';
        el.append(tag);
        const img = document.createElement('img');
        img.className = 'img';
        img.src = `${marker.imgUrl}`;
        el.append(img);



        el.addEventListener('click', () => {

            map.flyTo({
                // These options control the ending camera position: centered at
                // the target, at zoom level 9, and north up.
                center: marker.geometry.coordinates,
                zoom: 18,
                bearing: 0,
                 
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.8, // make the flying slow
                curve: 1, // change the speed at which it zooms out
                 
                // This can be any easing function: it takes a number between
                // 0 and 1 and returns another number between 0 and 1.
                easing: (t) => t,
                 
                // this animation is considered essential with respect to prefers-reduced-motion
                essential: true
            });
            // window.alert(marker.properties.info);

        });

        // Add markers to the map.
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    }

}


//initial map
mapBoxInit();