import React from 'react'

import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import logo from '../../assets/logo.png';

import { useNavigation } from '@react-navigation/native';


import styles from './styles';

function TipsScreen() {
    const {navigate} = useNavigation();

    function handleNavigateToPreventionTips(){
        navigate('PreventionTips');
    }

    function handleNavigateToMaskTips(){
        navigate('MaskTips');
    }

    function handleNavigateToCuidadosAeP(){
        navigate('CuidadosAeP');
    }

    function handleNavigateToMedicalAttentionTips(){
        navigate('MedicalAttention');
    }

    function handleNavigateToHomeIsolationTips(){
        navigate('HomeIsolation');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}></Image>
            </View>
            <View style={styles.content}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>Dicas sobre a COVID-19</Text>
                </View>
                <View style={styles.tipsContainer}>
                    <RectButton style={styles.tipsButton} onPress={handleNavigateToPreventionTips}>
                        <Text style={styles.tipsButtonText}>Prevenção da COVID-19</Text>
                    </RectButton>
                    <RectButton style={styles.tipsButton} onPress={handleNavigateToMaskTips}>
                        <Text style={styles.tipsButtonText}>Uso correto da máscara</Text>
                    </RectButton>
                    <RectButton style={styles.tipsButton} onPress={handleNavigateToCuidadosAeP}>
                        <Text style={styles.tipsButtonText}>Cuidados anteriores e posteriores à vacinação</Text>
                    </RectButton>
                    <RectButton style={styles.tipsButton} onPress={handleNavigateToMedicalAttentionTips}>
                        <Text style={styles.tipsButtonText}>Quando devo buscar atendimento médico?</Text>
                    </RectButton>
                    <RectButton style={styles.tipsButton} onPress={handleNavigateToHomeIsolationTips}>
                        <Text style={styles.tipsButtonText}>Como fazer fazer o isolamento domiciliar?</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TipsScreen;