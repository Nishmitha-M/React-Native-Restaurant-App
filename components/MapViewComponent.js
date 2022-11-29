import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

function MapViewComponent({ location }) {
  const [region, setRegion] = useState({
    latitude: 47.606,
    longitude: -122.349358,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    if (location && location.latitude) {
      setRegion((prevRegion) => ({
        ...prevRegion,
        latitude: location.latitude,
        longitude: location.longitude,
      }));
    }
  }, [location]);

  return (
    <MapView style={styles.map} region={region}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title="Restaurant location here"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapViewComponent;
