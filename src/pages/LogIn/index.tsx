import React from 'react';

import { View, Text, Image } from 'react-native';

import homeIcon from '../../assets/icones/009-home.svg'

import styles from './styles';

function LogIn(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={homeIcon} />
            </View>
        </View>
    );
}

export default LogIn;