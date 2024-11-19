import React from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity, StatusBar } from 'react-native';

const carData = [
  {
    carClass: 'Muscle',
    color: 'red',
    data: [
      { name: 'Ford Mustang', price: '$250,000', imageUrl: 'https://static.overfuel.com/dealers/trust-auto/image/2020-ford-mustang-shelby-gt350-heritage-edition-3-1024x640.jpg' },
      { name: 'Dodge Charger', price: '$250,000', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHT3vMpCQEbMzEB_7ktr85OrDisxtqpY7chg&s' },
    ],
  },
  {
    carClass: 'Sport',
    color: 'purple',
    data: [
      { name: 'Ferrari F8', price: '$450,000', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg/1200px-Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg' },
      { name: 'Lamborghini Huracan', price: '$550,000', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2017_Lamborghini_Huracan_LP610.jpg/1200px-2017_Lamborghini_Huracan_LP610.jpg' },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    marginBottom: 20,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardPrice: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    width: '80%',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>BUY NOW</Text>
      </TouchableOpacity>
    </View>
);

const renderSectionHeader = ({ section: { carClass, color } }) => (
    <View style={[styles.headerContainer, { backgroundColor: color }]}>
      <Text style={styles.headerText}>{carClass}</Text>
    </View>
);

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SectionList
            sections={carData}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
        />
      </View>
  );
};

export default App;
