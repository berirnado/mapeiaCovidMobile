import React from 'react'

import { Image, Text, View } from 'react-native';

import logo from '../../assets/logo.png';
import usemask from '../../assets/usemask.png';


import styles from './styles';

function MedicalAttention() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}></Image>
            </View>
            <View style={styles.content}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>Quando devo buscar atendimento médico:</Text>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>Caso você esteja com sintomas gripais deverá procurar antendimento médico, mesmo quando os sintomas são leves</Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>é importante realizar o exame para saber se você realmente está com COVID-19 e ter a orientação médica sobre a medicação que deverá ser utilizada durante o isolamento domiciliar.</Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>A demora no diagnóstico e tratamento dos sintomas da doença podem agravar o quadro clínico do paciente.</Text>
                    </View>
                </View>
        </View>
        </View>
    );
}

export default MedicalAttention;