import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import logoImg from '../../assets/logo.png';
import ifsulLogo from '../../assets/ifsul.png';
import tierdesignLogo from '../../assets/tierdesign.png';
import bageLogo from '../../assets/bage.png';

import styles from './styles'

function SecondScreen() {
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
            </View>
            <View style = {styles.paragraphContainer}>
                <Text style = {styles.paragraph}>O <Text style = {styles.negrito}>MapeiaCovid</Text> é um sistema web que tem como objetivo auxiliar a Scretaria de Saúde Atenção à Pessoa com Deficiê;ncia do município de Bagé (RS) a monitorar os pacientes com sintomas gripais de forma remota.</Text>
                <Text style = {styles.paragraph}> Este aplicativo foi desenvolvido por um grupo multidisciplinar de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSul) câmpus Bagé, com apoio da Secretaria de Saúde Atenção à Pessoa com Deficiência de Bagé e da empresa Tierdesignco.</Text>
            </View>
            <View style = {styles.footerLogos}>
                <Image source={bageLogo} style={styles.bageLogo}/>
                <Image source={tierdesignLogo} style={styles.tierdesignLogo}/>
                <Image source={ifsulLogo} style={styles.ifsulLogo}/>
            </View>
        </View>
    );
}

export default SecondScreen;