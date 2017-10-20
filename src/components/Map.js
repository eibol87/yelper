import React from 'react'

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ShowMaps = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker
      position={{ lat: props.lat, lng: props.lng }}
    />
  </GoogleMap>
)

export default ShowMaps
