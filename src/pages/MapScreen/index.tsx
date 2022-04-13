import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location';

import { Image, Text, View } from 'react-native';
import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';

import logoCortada from '../../assets/logoCortada.png';
import profileIcon from '../../assets/profile.png';
import CheckContainer from '../../components/CheckContainer';


import styles from './styles';


export default function MapScreen (){
    const [location, setLocation] = useState(Object);
    const [errorMsg, setErrorMsg] = useState(String);

    const [LatLngList, setLatLngList] = useState(Array)

    useEffect(() => {
        const fetchList = async () => {
        const reqOptions = {
            method: 'GET',
        };
        const response = await fetch('http://192.168.1.106:8080/crud/listLatLng', reqOptions)
        const json = await response.json();

        setLatLngList(JSON.parse(json));
        console.log(LatLngList);
    }
        fetchList().catch(console.error);
        
    
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

      let points = [{latitude: -31.32808230034181, longitude: -54.10882898195173, weight: 1},]

    return (
        
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <View>
                    <Image source={logoCortada} style={styles.logoCortada}></Image>
                </View>
                <View>
                    <Text style={styles.headerText}>     Bom dia     </Text>   
                </View>
            </View>
            <View style={styles.mapContainer}>
                <MapView
                    style={{ alignSelf: 'stretch', height: '100%' }}
                    region={mapRegion}
                    showsUserLocation={true}
                />
            </View>
            <CheckContainer />
        </View>
    );
}

module.exports = MapScreen