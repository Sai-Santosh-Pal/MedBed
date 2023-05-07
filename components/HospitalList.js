import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Linking } from 'react-native';
// import { Linking } from 'expo';

const HospitalList = () => {
  const [data, setData] = useState([]);

  const handleOpenOnMap = (link) => {
    const url = link;
    Linking.openURL(url);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.openMapButton} onPress={() => handleOpenOnMap(item.url)}>
      <View style={styles.item}>
        <Image style={styles.icon} source={{ uri: item.icon }} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <View>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.location}>Booking No.: {item.phone}</Text>
            <Text style={[styles.bedsAvailable, item.bedsAvailable < 200 && styles.red]}>
              Beds Available: {item.bedsAvailable}
            </Text>
          </View>
             
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://saisantoshpal123.pythonanywhere.com/hospitals')
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error(error);
        });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  details: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    marginTop: 5,
  },
  bedsAvailable: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'green'
  },
  red: {
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default HospitalList
