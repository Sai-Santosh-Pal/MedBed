import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HospitalList from './components/HospitalList';
import { useFonts } from 'expo-font'
export default function App() {
  const [loaded] = useFonts({
    'sf-pro-medium': require('./assets/sf-pro-med.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <View style={{ flexDirection: 'column', marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 23,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{ height: 45, width: 45, marginRight: 15 }}
            source={{ uri: 'https://static.toiimg.com/thumb/msid-51767839,imgsize-17046,width-400,resizemode-4/51767839.jpg' }}
          />
          <View>
            <Text style={{ fontSize: 35,fontWeight: '700', fontFamily: 'sf-pro-medium' }}>
              MedBed
            </Text>
            <Text style={{ fontSize: 10, fontFamily: 'sf-pro-medium', color: 'grey' }}>
              Made By Sai Santosh Pal and Siddhant Suresh
            </Text>
          </View>
        </View>
       </View>
       <HospitalList />
    </>
  );
}
