import React from 'react'

import { Image, Text, View } from 'react-native';

import logoCortada from '../../assets/logoCortada.png';
import profileIcon from '../../assets/profile.png';
import telaMapa from '../../assets/telaMapa.png';

import SmileIcon from '../../assets/icones/022-smile-1.svg';
import SadIcon from '../../assets/icones/023-sad-1.svg';

import styles from './styles';

function MapScreen() {
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
            <View style={styles.mapContainer}>
                <Image source={telaMapa} style={styles.telaMapa}></Image>
            </View>
            <View style={styles.checkContainer}>
                <Text style={styles.checkContainerText}>Tem sintomas de febre?</Text>
                <View style={styles.checkContainerButtons}>
                    <View style={styles.containerButton}>
                        <SmileIcon fill={'#ffff'} height={20} width={20}/>
                        <Text style={styles.buttonText}>Sim</Text>
                    </View>
                    <View style={styles.containerButtonRed}>
                        <SadIcon fill={'#ffff'} height={20} width={20}/>
                        <Text style={styles.buttonText}>Não</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default MapScreen;