import React from 'react'

import { Image, Text, View } from 'react-native';

import logoCortada from '../../assets/logoCortada.png';
import profileIcon from '../../assets/profile.png';
import telaMapa from '../../assets/telaMapa.png';

import styles from './styles';

function NewsScreen() {
    return (
        <View style={styles.container}>
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
        </View>
    );
}

export default NewsScreen;