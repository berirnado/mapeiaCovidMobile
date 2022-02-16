import { StatusBar } from 'expo-status-bar';
import React from 'react'

import { Image, Text, View, ScrollView } from 'react-native';

import logo from '../../assets/logo.png';
import stayhome from '../../assets/stayhome.png';
import washhands from '../../assets/washhands.png';
import usemask from '../../assets/usemask.png';
import socialdistancing from '../../assets/socialdistancing.png'

import styles from './styles';

function PreventionTips() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}></Image>
            </View>
            <View style={styles.content}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>Prevenção da COVID-19</Text>
                </View>
                <ScrollView style={styles.scrollViewContainer}>
                        <View style={styles.tipItem}>
                            <Image source={washhands}  style={styles.tipItemImage} />
                            <Text style={styles.tipItemText}>Lavar constantemente as mãos com água e sabão ou higienizar com álcool gel</Text>
                        </View>
                        <View style={styles.tipItem2}>
                            <Text style={styles.tipItemText}>Usar máscara toda vez que sair de casa.</Text>
                            <Image source={usemask}  style={styles.tipItemImage} />
                        </View>
                        <View style={styles.tipItem}>
                            <Image source={stayhome}  style={styles.tipItemImage} />
                            <Text style={styles.tipItemText}>Sair de casa somente quando necessário</Text>
                        </View>
                        <View style={styles.tipItem2}>
                            <Text style={styles.tipItemText}>Manter o distanciamento social e evitar aglomerações</Text>
                            <Image source={socialdistancing}  style={styles.tipItemImage} />
                        </View>
                        <View style={styles.tipItem}>
                            <Image source={stayhome}  style={styles.tipItemImage} />
                            <Text style={styles.tipItemText}>Realizar o esquema de imunização completo de acordo com a vacina tomada</Text>
                        </View>
                        <View style={styles.filler}></View>
                </ScrollView>
            </View>
        </View>
    );
}

export default PreventionTips;