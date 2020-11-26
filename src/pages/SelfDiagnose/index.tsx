import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import DiagnoseButton from '../../components/DiagnoseButton';

import { AntDesign } from '@expo/vector-icons';


import styles from './styles';
import YesNoButton from '../../components/YesNoButton';
import { useNavigation } from '@react-navigation/native';

function SelfDiagnose() {
    const { navigate } = useNavigation();

    const handleNavigateBack = () => {
        navigate('MapScreen')
    }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <RectButton onPress={handleNavigateBack}>
                        <AntDesign name="back" size={24} color="#ffff" />
                    </RectButton>
                </View>
                <View>
                    <Text style={styles.headerText}>Faça uma auto-avaliação do seu estado de saúde</Text>
                </View>
            </View>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonContainerRow}>
                        <DiagnoseButton text={"Cansaço"}/>
                        <DiagnoseButton text={"Congestão nasal"}/>
                    </View>
                    <View style={styles.buttonContainerRow}>
                        <DiagnoseButton text={"Corrimento nasal (coriza)"}/>
                        <DiagnoseButton text={"Dificuldade para respirar"}/>
                    </View>
                    <View style={styles.buttonContainerRow}>
                        <DiagnoseButton text={"Dor de cabeça"}/>
                        <DiagnoseButton text={"Dor de garganta"}/>
                    </View>
                    <View style={styles.buttonContainerRow}>
                        <DiagnoseButton text={"Dores pelo corpo"}/>
                        <DiagnoseButton text={"Febre (acima de 39°)"}/>
                    </View>
                    <View style={styles.buttonContainerRow}>
                        <DiagnoseButton text={"Mal estar geral"}/>
                        <DiagnoseButton text={"Tosse"}/>
                    </View>
                    <Text style={styles.normalText}>Teve contato próximo com <Text style={styles.boldText}>caso suspeito</Text> de COVID-19 nos últimos 14 dias?</Text>
                    <YesNoButton />
                    <Text style={styles.normalText}>Teve contato próximo com <Text style={styles.boldText}>caso confirmado</Text> de COVID-19 nos últimos 14 dias?</Text>
                    <YesNoButton />
                    <RectButton style={styles.confirmButton}>
                        <Text style={styles.confirmButtonText}>Confimar</Text>
                    </RectButton>
                </View>
                <View style={styles.filler}>
                </View>
            </ScrollView>
        </View>
    );
}

export default SelfDiagnose;