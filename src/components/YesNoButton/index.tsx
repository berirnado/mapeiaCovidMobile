import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react';

import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import DiagnoseButton from '../DiagnoseButton';

import styles from './styles';

function YesNoButton(){
    const [isButtonPressed, setIsButtonPressed] = useState(false)
    const [isButtonPressed2, setIsButtonPressed2] = useState(false)

    function handleToggleButton() {
        if(isButtonPressed){
            setIsButtonPressed(false)
        } else {
            setIsButtonPressed(true),
            setIsButtonPressed2(false)
        }
    } 
    function handleToggleButton2() {
        if(isButtonPressed2){
            setIsButtonPressed2(false)
        } else {
            setIsButtonPressed2(true),
            setIsButtonPressed(false)
        }
        
    } 
    return(
        <View style={styles.buttonContainerRowYesNo}>
            <RectButton onPress={handleToggleButton} style={[isButtonPressed ? styles.buttonPressed : styles.button]}>
                <Text style={[isButtonPressed ? styles.buttonTextPressed : styles.buttonText]}>Sim</Text>
            </RectButton>
            <RectButton onPress={handleToggleButton2} style={[isButtonPressed2 ? styles.buttonPressed : styles.button]}>
                <Text style={[isButtonPressed2 ? styles.buttonTextPressed : styles.buttonText]}>Não</Text>
            </RectButton>
        </View>
    );
}

export default YesNoButton;