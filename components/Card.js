import { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { getRandomImages } from '../utils/getDummyImages';

function Card({ name, geocodes, location: { address }, cardClickHandler }) {
  const [image, setImage] = useState(
    'https://raw.githubusercontent.com/academind/react-native-practical-guide-code/04-deep-dive-real-app/extra-files/images/background.png'
  );

  const onPressHandler = () => {
    cardClickHandler(geocodes.main);
  };

  useEffect(() => {
    setImage(getRandomImages());
  }, []);

  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: `${image}`,
          }}
        />
        <View style={styles.cardContent}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 200,
    backgroundColor: '#FFFFFF',
    margin: 5,
  },
  cardImage: {
    height: '60%',
    width: 200,
  },
  cardContent: {
    alignItems: 'center',
    marginVertical: 2,
  },
  text: {
    fontSize: 14,
  },
});

export default Card;
