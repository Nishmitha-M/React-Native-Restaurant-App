import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './screens/MapScreen';
import PlacesContextProvider from './store/context/places-context';

export default function App() {
  return (
    <PlacesContextProvider>
      <View style={styles.container}>
        <MapScreen />
      </View>
    </PlacesContextProvider>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
