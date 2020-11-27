import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import WarningIcon from '../../assets/icones/005-warning.svg';

import { AntDesign } from '@expo/vector-icons';


import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';

function SelfDiagnosePositive() {
    const { navigate } = useNavigation();

    const handleNavigateBack = () => {
        navigate('HomeTabs')
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
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTextBold}>SEU ESTADO ATUAL É:</Text>
                    <Text style={styles.headerText}>Suspeito</Text>
                    <Text style={styles.headerTextBold2}>Leia com atenção</Text>
                    <Text style={styles.headerText2}>as orientações abaixo</Text>
                </View>
            </View>
            <ScrollView style={styles.contentContainer}>
                <View>
                    <Text style={styles.normalText}>Os sintomas que você sinalizou indicam que você <Text style={styles.boldText}>pode ter sido</Text> infectado pela COVID-19.</Text>
                </View>
                <View style={styles.textParagraph}>
                    <Text style={styles.normalText}>Entretanto, <Text style={styles.boldText}>você só deve se dirigir a uma unidade de saúde caso em falta de ar ou dificuldade para respirar!</Text></Text>
                </View>
                <View style={styles.orientations}>
                    <View style={styles.orientationRow}>
                        <View style={styles.iconCircle}>
                            <WarningIcon height={20} width={20} fill={'#fff'}/>
                        </View>
                        <View style={styles.orientationText}>
                            <Text style={styles.normalText}>Você deve permanecer em<Text style={styles.boldTextRed}> isolamento total </Text>pelo período de 14 dias.</Text>
                        </View>
                    </View>
                    <View style={styles.orientationRow}>
                        <View style={styles.iconCircle}>
                            <WarningIcon height={20} width={20} fill={'#fff'}/>
                        </View>
                        <View style={styles.orientationText}>
                            <Text style={styles.normalText}>Somente dirija-se a uma unidade de saúde <Text style={styles.boldTextRed}>em caso de falta de ar.</Text></Text>
                        </View>
                    </View>
                    <View style={styles.orientationRow}>
                        <View style={styles.iconCircle}>
                            <WarningIcon height={20} width={20} fill={'#fff'}/>
                        </View>
                        <View style={styles.orientationText}>
                            <Text style={styles.normalText}><Text style={styles.boldTextRed}>Não se automedique! </Text> não existem tratamentos comprovados para o virus. Mantenha-se hidratado e tenha uma alimentação saudável.</Text>
                        </View>
                    </View>
                    <View style={styles.orientationRowLast}>
                        <View style={styles.iconCircle}>
                            <WarningIcon height={20} width={20} fill={'#fff'}/>
                        </View>
                        <View style={styles.orientationText}>
                            <Text style={styles.normalText}>Você deve permanecer em<Text style={styles.boldTextRed}> isolamento total </Text>pelo período de 14 dias.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.textParagraph}>
                    <Text style={styles.normalText}>Respeite e siga todas as orientações.<Text style={styles.boldText}> Tem dúvidas? Utilize os canais abaixo:</Text></Text>
                </View>
                <View style={styles.filler}></View>
            </ScrollView>
        </View>
    );
}

export default SelfDiagnosePositive;