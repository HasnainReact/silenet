import { View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
const Map = () => {
  const [currentlocation, setCurrentLocation] = useState(0)
  Geolocation.getCurrentPosition(data => {
    setCurrentLocation(data.coords)
  })

  return (
    <View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: currentlocation.latitude,
          longitude: currentlocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker coordinate={{
          latitude: currentlocation.latitude, longitude: currentlocation.longitude, latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
          // pinColor={"blue"} // any color
          title={"Location"}
          description={"Current Location"} />
      </MapView>

    </View>
  )
}
const styles = StyleSheet.create({

  map: {
    width: '100%',
    height: '90%'

  },
});

export default Map