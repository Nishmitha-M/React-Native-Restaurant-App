import { StyleSheet, Text, View } from 'react-native';

function AddressCard({ addressInfo }) {
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.text}>{addressInfo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    height: 200,
    backgroundColor: '#6D9886',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    marginHorizontal: 5,
  },
});

export default AddressCard;
