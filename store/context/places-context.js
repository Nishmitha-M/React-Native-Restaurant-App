import { createContext, useEffect, useState } from 'react';
import { axiosInstance } from '../../utils/axiosBaseUrl';

export const PlacesContext = createContext({
  placesDataList: [],
});

function PlacesContextProvider({ children }) {
  const [placesList, setPlacesList] = useState([]);

  const getPlacesList = async () => {
    const res = await axiosInstance.get();
    const { data } = res;
    return data;
  };

  useEffect(() => {
    (async () => {
      const placesData = await getPlacesList();
      if (placesData && placesData.results.length) {
        setPlacesList(placesData.results);
      }
    })();
  }, []);

  return (
    <PlacesContext.Provider value={{ placesDataList: placesList }}>
      {children}
    </PlacesContext.Provider>
  );
}

export default PlacesContextProvider;
