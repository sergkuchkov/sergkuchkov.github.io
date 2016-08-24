// external js: isotope.pkgd.js
// init Isotope
var $grid = $('.grid').isotope({
itemSelector: '.element-item',
layoutMode: 'fitRows'
});
// bind filter button click
var filterFns = 
$('.filters-button-group').on( 'click', 'button', function() {
var filterValue = $( this ).attr('data-filter');
// use filterFn if matches value
filterValue = filterFns[ filterValue ] || filterValue;
$grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
var $buttonGroup = $( buttonGroup );
$buttonGroup.on( 'click', 'button', function() {
$buttonGroup.find('.is-checked').removeClass('is-checked');
$( this ).addClass('is-checked');
});
// carusel
$(document).ready(function(){
$('.bxslider').bxSlider({
controls:false,
minSlides: 1,
maxSlides: 3,
slideWidth: 360,
slideMargin: 10,
speed:1000,
});
});

// mobile-menu
$('.show-nav').click(
function(){
$('.nav').slideToggle({
duration:500, 
});
});
$(function(){
$('.show-nav').click(function(event){
$(this).toggleClass('show-nav-1',500);
event.preventDefault();
});     
});
  
// nav-page
$(function(){
$('.nav a').click(function(e){
e.preventDefault();
console.log(
$(this).attr('href') 
);
var x=$($(this).attr('href'))
.offset()
.top;
$('html, body').animate({'scrollTop':x},500)
});
});
//map
google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(38.925118, -77.399548),
            zoom: 16,
            zoomControl: false,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: true,
            panControl: false,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [ { "featureType": "landscape", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },{ "stylers": [ { "hue": "#00aaff" }, { "saturation": -100 }, { "gamma": 2.15 }, { "lightness": 12 } ] },{ "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "lightness": 24 } ] },{ "featureType": "road", "elementType": "geometry", "stylers": [ { "lightness": 57 } ] } ],
        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Brandly,2345 Setwant natrer, 1234, Washington. United States', 'undefined', 'undefined', 'undefined', 'undefined', 38.92507, -77.406723, 'undefined']
        ];
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
        var icon1 = "images/map-mark.png";
        var icon2 = "images/map-mark-1.png";
            marker = new google.maps.Marker({
               icon: icon1,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
            google.maps.event.addListener(marker, 'mouseover', function() {
    marker.setIcon(icon2);
});
google.maps.event.addListener(marker, 'mouseout', function() {
    marker.setIcon(icon1);
});
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }
}
})