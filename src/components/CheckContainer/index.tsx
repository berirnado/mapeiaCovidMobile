import { useLinkProps, useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';

import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import SmileIcon from '../../assets/icones/022-smile-1.svg';
import SadIcon from '../../assets/icones/023-sad-1.svg';

import styles from './styles';

function CheckContainer(){
    const [isShowing, setIsShowing] = useState(true)

    const { navigate } = useNavigation();

    const handleNavigateToDiagnose = () => {
        navigate('SelfDiagnose')
    }
    return(   
        <View style={styles.checkContainer}>
            <Text style={styles.checkContainerText}>Tem sintomas de febre?</Text>
            <View style={styles.checkContainerButtons}>
                <RectButton onPress={handleNavigateToDiagnose} style={styles.containerButton}>
                    <SmileIcon fill={'#ffff'} height={20} width={20}/>
                    <Text style={styles.buttonText}>Não</Text>
                </RectButton>
                <RectButton onPress={handleNavigateToDiagnose} style={styles.containerButtonRed}>
                    <SadIcon fill={'#ffff'} height={20} width={20}/>
                    <Text style={styles.buttonText}>Sim</Text>
                </RectButton>
            </View>
         </View>
    );
}

export default CheckContainer;