// general js for the project that wouldn't be a reuseable component




// michelin map style
// https://api.mapbox.com/styles/v1/hamishjgray/cjmkjea7r1apf2rrsneiy7sxa.html?fresh=true&title=true&access_token=pk.eyJ1IjoiaGFtaXNoamdyYXkiLCJhIjoiY2pkbjBmeGN6MDd1YzMzbXI3cWdpNThjayJ9.3YE8T1H2QUyqNIkxdKWxkg#11.6/50.543854/-4.066226/0


// 
// $('.js-open-map').on('click', function(e) {
//   e.preventDefault();
//   // disable scrolling on background content (doesn't work iOS)
//   $('body').addClass('map-disable-scroll');
//   // dont reload the map if its already open
//   // var mapFocusValue = $(e.currentTarget).data('map-focus');
//   // if ($('#map').children().length === 0) { map(mapFocusValue); }
//   $('.map__wrap').removeClass('is-closed').addClass('is-open');
// })
//
// function mapClose(e){
//   e.preventDefault();
//   // enable scrolling on background content
//   $('body').removeClass('map-disable-scroll');
//   $('.map__wrap').removeClass('is-open').addClass('is-closed');
// }
//
// $('.js-close-map').click(function(event){ mapClose(event); });
//
// // closes modal on escape key press
// $(document).keyup(function(event) {
//   if (event.keyCode == 27) {
//     mapClose(event);
//   }
// });
