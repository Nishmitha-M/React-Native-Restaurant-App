export function getAddress(placesList, currentRestaurant) {
  const data = placesList.find(
    (place) =>
      place.geocodes.main.latitude === currentRestaurant.latitude &&
      place.geocodes.main.longitude === currentRestaurant.longitude
  );
  return data;
}
