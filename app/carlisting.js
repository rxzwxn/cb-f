import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CarListingScreen = () => {
  // Sample data
  const cars = [
    { id: '1', title: 'Toyota Fortuner 2.8L', price: 'Rs 1,19,000', km: '16,500 km' },
    { id: '2', title: 'Audi Q5', price: 'Rs 1,50,000', km: '20,000 km' },
    // Add more cars as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Car Listings</Text>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.carCard}>
            <Text style={styles.carTitle}>{item.title}</Text>
            <Text style={styles.carPrice}>{item.price}</Text>
            <Text style={styles.carDetails}>{item.km}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carPrice: {
    fontSize: 16,
    color: '#007BFF',
  },
  carDetails: {
    fontSize: 14,
    color: '#8A8A8A',
  },
});

export default CarListingScreen;
