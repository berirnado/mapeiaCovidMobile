import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';


import styles from './styles';

function SelfDiagnose() {
    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <RectButton>
                        <AntDesign name="back" size={24} color="#ffff" />
                    </RectButton>
                </View>
                <View>
                    <Text style={styles.headerText}>Faça uma auto-avaliação do seu estado de saúde</Text>
                </View>
            </View>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    <View>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Cansaço</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SelfDiagnose;