import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { css } from '../../assets/css/Css';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import config from '../../components/config';
import marcador from '../../assets/marcador.png';


export default function App() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const mapEl = useRef(null);
  const [distance, setDistance] = useState(null);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        throw new Error('Localização não encontrada!');
      }
    })();
  }, []);

  return (
    <View style={css.container}>
      <View>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => navigation.push('Caminhoneiros')}
        >
          <Ionicons name="md-arrow-back-circle-outline" size={35} color="#484a4d" />
        </TouchableOpacity>
      </View>

      <MapView
        style={css.map}
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={false}
        loadingEnabled={true}
        ref={mapEl}
      >
        <Marker
          coordinate={{ latitude: -24.495, longitude: -47.8456 }}
          title={'Marcador Origem'}
          description={'Local de Origem'}
        >
          <View style={css.marcador}>
            <Image source={marcador} style={css.marcadorImage}></Image>
            <Text style={{ color: 'white', fontSize: 13 }}>Meu Local</Text>
          </View>
        </Marker>

        {destination && (
          <Marker
            coordinate={destination}
            title={'Marcador Destino'}
            description={'Local de Destino'}
          >
            <View style={css.marcador}>
              <Image source={marcador} style={css.marcadorImage}></Image>
              <Text style={{ color: 'white', fontSize: 13 }}>Meu Local</Text>
            </View>
          </Marker>
        )}

        {destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={config.googleApi}
            strokeWidth={5}
            strokeColor='#288222'
            onReady={(result) => {
              setDistance(result.distance);
              mapEl.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  top: 50,
                  bottom: 50,
                  left: 50,
                  right: 50,
                },
              });
            }}
          />
        )}
      </MapView>

      <View style={css.search}>
        <GooglePlacesAutocomplete
          placeholder='Para onde vamos?'
          onPress={(data, details = null) => {
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            });
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{ listView: { height: 100 } }}
        />
      </View>

      {distance && <Text style={css.distancia}> Distância: {distance}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackButton: {
    backgroundColor: '#f0f0',
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    top: -3,
  },

  marcadorImage:{
    width: 40,
  }
});
