import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import logoImg from '../../assets/logo.png';

import styles from './styles'

function ThirdScreen() {
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
                <Text style = {styles.negrito}>Equipe desenvolvedora do sistema web</Text>
                <View style={styles.equipeItem}>
                    <Text style = {styles.negrito}>Coordenação:</Text>
                    <Text style = {styles.paragraph}>Aline Jaime Leal (Professora de Biologia)</Text>
                </View>
                <Text style = {styles.negrito}>Colaboração</Text>
                <Text style = {styles.paragraph}>Diego de Abreu Porcellis (Professor de Informática)</Text>
                <Text style = {styles.paragraph}>Marcelo da Silveira Siedler (Professor de Informática)</Text>
                <Text style = {styles.negrito}>Design Gráfico</Text>
                <Text style = {styles.paragraph}>Camila Sena de Borba (Aluna do Técnico Integrado em Informática)</Text>
                <Text style = {styles.negrito}>Design de Interface</Text>
                <Text style = {styles.paragraph}>Empresa Tierdesignco e Vinicius Mello Balhefo (Aluno da Tecnologia em Alimentos)</Text>
                <Text style = {styles.negrito}>Programação</Text>
                <Text style = {styles.paragraph}>Bernardo Simões Pires Robaina (Aluno do Técnico Integrado em Informática)</Text>
            </View>
        </View>
    );
}

export default ThirdScreen;