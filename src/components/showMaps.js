import React, {Component} from 'react'
import GoogleMap from "react-google-map"
import './ShowMaps.css'

class ShowMaps extends Component {

<!DOCTYPE html>
<html>
  <head>
    <style>
      #map {
        height: 400px;
        width: 400px;
       }
    </style>
  </head>
  <body>
    <h3>My Google Maps Demo</h3>
    <div id="map"></div>
    <script>
      function initMap() {
        var uluru = {lat: 41.3789978027344, lng: 2.18771433830261};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlxR6HdRdBNeXImyEAn3VkSWZFiOooESk&callback=initMap">
    </script>
  </body>
</html>

}

export default ShowMaps