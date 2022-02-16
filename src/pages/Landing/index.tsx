import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import logoImg from '../../assets/logo.png';

import styles from './styles'

function Landing() {
    const { navigate } = useNavigation();

    const handleNavigateToLogin = () => {
        navigate('LogIn')
    }

    const handleNavigateToSignIn = () => {
        navigate('SignIn')
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logoImg} style={styles.logo}/>
                <Text style={styles.title}>Bem vindo ao serviço de mapeamento dos casos de coronavirus de Bagé!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <RectButton onPress={handleNavigateToLogin} style={[styles.button, styles.buttonPrimary]}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
                <RectButton onPress={handleNavigateToSignIn} style={[styles.button, styles.buttonSecondary]}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Landing;