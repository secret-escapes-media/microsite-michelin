////////////////////////////////////////////////////////////////////////////////
//                               OPEN MAP
////////////////////////////////////////////////////////////////////////////////

$('.js-open-map').on('click', function(e) {
  e.preventDefault();
  // get id for specific map data
  var selectedMapData = $(e.currentTarget).data('map-data');
  // disable scrolling on background content (doesn't work iOS)
  $('body').addClass('map-disable-scroll');
  // dont reload the map if its already open
  if ($('#map').children().length === 0) { map(selectedMapData); }
  $('.map__wrap').removeClass('is-closed').addClass('is-open');
});

function mapClose(e){
  e.preventDefault();
  // enable scrolling on background content
  $('body').removeClass('map-disable-scroll');
  $('.map__wrap').removeClass('is-open').addClass('is-closed');
}

$('.js-close-map').click(function(event){ mapClose(event); });

// closes modal on escape key press
$(document).keyup(function(event) {
  if (event.keyCode == 27) {
    mapClose(event);
  }
});


////////////////////////////////////////////////////////////////////////////////
//                          INTERACTIVE MAP
////////////////////////////////////////////////////////////////////////////////

function map(selectedMapData){

  // take id string from button and reference object containing specific map data
  var mapData = eval(selectedMapData);

  // launch map with settings
  mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaXNoamdyYXkiLCJhIjoiY2pkbjBmeGN6MDd1YzMzbXI3cWdpNThjayJ9.3YE8T1H2QUyqNIkxdKWxkg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hamishjgray/cjmkjea7r1apf2rrsneiy7sxa',
    logoPosition: 'bottom-right',
    zoom: 5.64,
    minZoom: 4.5,
    center: [-4.002956, 54.452665]
  });

  // disable map rotation using right click + drag
  map.dragRotate.disable();

  // disable map rotation using touch rotation gesture
  map.touchZoomRotate.disableRotation();

  // builds map with custom functionality
  map.on('load', function() {

    // get the stops for the route into one string
    var coordString = [];
    var coord;
    var total = mapData.route.features.length;
    for(var i in mapData.route.features){
      if( i == (total - 1) ){
        coord = mapData.route.features[i].geometry.coordinates;
      }else{
        coord = mapData.route.features[i].geometry.coordinates + ';';
      }
      coordString += coord;
    }

    // get the URL request to get all of the live route data from mapbox
    var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + coordString + '?overview=full&geometries=geojson&access_token=' + mapboxgl.accessToken;

    // print the route on the map after getting the data from the URL request
    $.ajax({
      method: 'GET',
      url: directionsRequest,
    }).done(function(data) {

      // coordinates for entire route at a high detail
      var route = data.routes[0].geometry;
      var routeStart = route.coordinates[0];
      var routeEnd = route.coordinates.pop();

      // draw route on map
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: route
          }
        },
        paint: {
          'line-width': 1.33,
          'line-color': '#27509b'
        }
      }, 'road-label'); // this is the name of the layer that this new layer is getting added before
      // // this lets you to see all of the layers in order in the console
      // console.log(map.getStyle().layers);

      map.addLayer({
        id: 'route-start-and-end',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: routeStart
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: routeEnd
                }
              }
            ]
          }
        },
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#27509b'
        }
      });

    });



    // center the map on the route
    var bounds = new mapboxgl.LngLatBounds();
    mapData.route.features.forEach(function(feature) {
      bounds.extend(feature.geometry.coordinates);
    });
    // set different padding depending on original viewport width
    // not super precise but should catch mobile phones and reduce the padding
    var iconPadding = { 'padding': 100 };
    map.fitBounds(bounds, iconPadding); // adds padding so markers aren't on edge





    //////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////  RESTURANT MARKERS
    //////////////////////////////////////////////////////////////////////////

    // markers
    map.addLayer({
      id: 'restaurants',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: mapData.restaurants
      },
      layout: {
        'icon-image': 'pin-michelin-star',
        'icon-size': .7,
        'icon-anchor': 'bottom',
        'icon-allow-overlap': true
      }
    });

    // launch modal when restaurant marker is clicked
    map.on('click', 'restaurants', function (e) {
      var clickedOfferId = e.features[0].properties.id;
      modalOpen(null, clickedOfferId);
    });

  });
}