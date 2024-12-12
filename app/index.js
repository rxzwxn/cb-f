import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {

  const navigateToCarListing = () => {
    navigation.navigate('CarListingScreen'); // Replace with your correct route
  };

  const navigateToViewCars = () => {
    navigation.navigate('ViewCarsScreen'); // Replace with your correct route
  };

  const navigateToNotifications = () => {
    navigation.navigate('NotificationsScreen'); // Replace with your correct route
  };

  const navigateToHome = () => {
    navigation.navigate('IndexScreen'); // Replace with your correct route
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>

          {/* Profile Icon (Left) */}
          <TouchableOpacity onPress={() => console.log('Go to Profile')}>
            <Ionicons name="person-circle" size={40} color="#808080" />
          </TouchableOpacity>

          {/* Logo */}
          <Image
            source={{ uri: 'https://via.placeholder.com/150x50' }} // Replace with your logo URL
            style={styles.logo}
          />
          {/* Hamburger Icon (Right) */}
          <TouchableOpacity onPress={() => console.log('Open Hamburger Menu')}>
            <Ionicons name="menu" size={40} color="#808080" />
          </TouchableOpacity>
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesRow}>
            {['Audi', 'BMW', 'Porsche', 'Tesla'].map((category, index) => (
              <View key={index} style={styles.categoryIconContainer}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your category icons
                  style={styles.categoryIcon}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Recent Searches Section */}
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <Text style={styles.noSearchText}>No searches found</Text>
        </View>

        {/* Favourites Section */}
        <View style={styles.favouritesContainer}>
          <Text style={styles.sectionTitle}>Your Favourites</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2].map((item, index) => (
              <View key={index} style={styles.favouriteCard}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/150x100' }} // Replace with your car images
                  style={styles.favouriteImage}
                />
                <Text style={styles.carTitle}>Toyota Fortuner 14 2.8L</Text>
                <Text style={styles.carPrice}>Rs 1,19,000</Text>
                <Text style={styles.carDetails}>2023 • 16,500 km</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Search by Body Type Section */}
        <View style={styles.bodyTypeContainer}>
          <Text style={styles.sectionTitle}>Search by Body Type</Text>
          <View style={styles.categoriesRow}>
            {['SUV', 'Sedan', 'Hatchback', 'Coupe'].map((type, index) => (
              <View key={index} style={styles.categoryIconContainer}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/50' }} // Replace with body type icons
                  style={styles.categoryIcon}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Search by Budget Section */}
        <View style={styles.bodyTypeContainer}>
          <Text style={styles.sectionTitle}>Search by Budget</Text>
          <View style={styles.categoriesRow}>
            {['Less than 25L', '25L - 40L', '40L+'].map((budget, index) => (
              <View key={index} style={styles.categoryIconContainer}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/50' }} // Replace with budget icons
                  style={styles.categoryIcon}
                />
                <Text style={styles.budgetText}>{budget}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Search by Ad Type Section */}
        <View style={styles.bodyTypeContainer}>
          <Text style={styles.sectionTitle}>Search by Ad Type</Text>
          <View style={styles.categoriesRow}>
            {['Price Drop', 'Negotiable'].map((adType, index) => (
              <View key={index} style={styles.categoryIconContainer}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/50' }} // Replace with ad type icons
                  style={styles.categoryIcon}
                />
                <Text style={styles.adTypeText}>{adType}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerButton} onPress={navigateToHome}>
          <Ionicons name="home" size={24} color="#007BFF" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToCarListing}>
          <Ionicons name="car" size={24} color="#007BFF" />
          <Text style={styles.footerText}>Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToViewCars}>
          <Ionicons name="add-circle" size={24} color="#007BFF" />
          <Text style={styles.footerText}>Sell</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToNotifications}>
          <Ionicons name="notifications" size={24} color="#007BFF" />
          <Text style={styles.footerText}>Notifications</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#292929',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 50,
  },
  categoriesContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryIconContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  budgetText: {
    fontSize: 12,
    color: '#333333',
    marginTop: 5,
  },
  adTypeText: {
    fontSize: 12,
    color: '#333333',
    marginTop: 5,
  },
  recentSearchesContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  noSearchText: {
    fontSize: 16,
    color: '#8A8A8A',
  },
  favouritesContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  favouriteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  favouriteImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 5,
  },
  carPrice: {
    fontSize: 14,
    color: '#007BFF',
  },
  carDetails: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  bodyTypeContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#007BFF',
  },
});

export default IndexScreen;
