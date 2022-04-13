import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { Image, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import logoCortada from '../../assets/logoCortada.png';
import profileIcon from '../../assets/profile.png';
import CheckContainer from '../../components/CheckContainer';


import styles from './styles';


export default function MapScreen (){
    const [location, setLocation] = useState(Object);
    const [errorMsg, setErrorMsg] = useState(String);

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location)
        })();
    }, []);

    const [mapRegion, setmapRegion] = useState({
        latitude: -31.330904930450046, 
        longitude: -54.10650297540736,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <View>
                    <Image source={logoCortada} style={styles.logoCortada}></Image>
                </View>
                <View>
                    <Text style={styles.headerText}>Olá, <Text>Bernardo</Text></Text>   
                </View>
                <View>
                    <Image source={profileIcon} style={styles.profileIcon}></Image>
                </View>
            </View>
            <View style={styles.mapContainer}>
                <MapView
                    style={{ alignSelf: 'stretch', height: '100%' }}
                    region={mapRegion}
                    showsUserLocation={true}
                />
                <Marker
                    coordinate={{latitude: -31.330904930450046, longitude: -54.10650297540736}}
                    pinColor="gold"
                    />
            </View>
            <CheckContainer />
        </View>
    );
}

module.exports = MapScreen