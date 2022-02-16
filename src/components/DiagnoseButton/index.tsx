import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react';

import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface DiagnoseButtonProps {
    text: String;
}

import styles from './styles';

const DiagnoseButton: React.FC<DiagnoseButtonProps> = ({text}) =>{
    const [isButtonPressed, setIsButtonPressed] = useState(false)

    function handleToggleButton() {
        setIsButtonPressed(!isButtonPressed);
    } 
    return(
        <RectButton onPress={handleToggleButton} style={[isButtonPressed ? styles.buttonPressed : styles.button]}>
            <Text style={[isButtonPressed ? styles.buttonTextPressed : styles.buttonText]}>{text}</Text>
        </RectButton>
    );
}

export default DiagnoseButton;