import { useContext, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AddressCard from '../components/AddressCard';
import Card from '../components/Card';
import MapViewComponent from '../components/MapViewComponent';
import { INITIAL_LOCATION } from '../constants/initialLocation';
import { PlacesContext } from '../store/context/places-context';
import { getAddress } from '../utils/getAddress';

function MapScreen() {
  const { placesDataList } = useContext(PlacesContext);

  const [location, setLocation] = useState({
    latitude: INITIAL_LOCATION.lat,
    longitude: INITIAL_LOCATION.lon,
  });
  const [addressInfo, setAddressInfo] = useState('');

  function cardClickHandler(selectedPlace) {
    setLocation(selectedPlace);
    const {
      location: { formatted_address },
    } = getAddress(placesDataList, selectedPlace);
    setAddressInfo(formatted_address);
  }

  function renderCard(card) {
    return (
      <Card
        cardData={card.item}
        {...card.item}
        cardClickHandler={cardClickHandler}
      />
    );
  }

  return (
    <View style={styles.mapScreen}>
      {addressInfo && <AddressCard addressInfo={addressInfo}></AddressCard>}
      <MapViewComponent location={location}></MapViewComponent>
      <View style={styles.cardsList}>
        <FlatList
          horizontal
          data={placesDataList}
          renderItem={renderCard}
          keyExtractor={(place) => `${place['fsq_id']}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapScreen: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  cardsList: {
    position: 'absolute',
    bottom: 0,
  },
});
export default MapScreen;
