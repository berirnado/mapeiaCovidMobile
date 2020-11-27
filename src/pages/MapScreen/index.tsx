import { StatusBar } from 'expo-status-bar';
import React from 'react'

import { Image, Text, View } from 'react-native';

import logoCortada from '../../assets/logoCortada.png';
import profileIcon from '../../assets/profile.png';
import telaMapa from '../../assets/telaMapa.png';
import CheckContainer from '../../components/CheckContainer';


import styles from './styles';

function MapScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <View>
                    <Image source={logoCortada} style={styles.logoCortada}></Image>
                </View>
                <View>
                    <Text style={styles.headerText}>Olá, <Text style={{fontFamily: 'Archivo_700Bold'}}>Bernardo</Text></Text>   
                </View>
                <View>
                    <Image source={profileIcon} style={styles.profileIcon}></Image>
                </View>
            </View>
            <View style={styles.mapContainer}>
                <Image source={telaMapa} style={styles.telaMapa}></Image>
            </View>
            <CheckContainer />
        </View>
    );
}

export default MapScreen;