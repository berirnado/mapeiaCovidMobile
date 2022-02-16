import React from 'react'

import { Image, Text, View } from 'react-native';

import logo from '../../assets/logo.png';
import usemask from '../../assets/usemask.png';


import styles from './styles';

function MaskTips() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}></Image>
            </View>
            <View style={styles.content}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>Uso correto da máscara</Text>
                    <View style={styles.tipItem}>
                        <Image source={usemask}  style={styles.tipItemImage} />
                        <Text style={styles.tipItemText}>A máscara deve cobrir totalmente a boca e o nariz e estar bem ajustada para evitar a entrada do ar por frestas. Deve ser trocada regularmente ou quando estiver úmida.</Text>
                    </View>
                    <View style={styles.tipesContainer}>
                        <Text style={styles.titleText}>Tipos de máscara:</Text>
                        <View style={styles.tipesParagraph}>
                         <Text style={styles.textRegular}><Text style={styles.textBold}>Máscara de tecido: </Text>deve ser lavada logo após o uso e descartada quando houver algum dano no tecido. Troca a cada duas horas.</Text>
                        </View>
                        <View style={styles.tipesParagraph}>
                         <Text style={styles.textRegular}><Text style={styles.textBold}>Máscara descartável: </Text>pode ser usada uma única vez. Troca a cada quatro horas.</Text>
                        </View>
                        <View style={styles.tipesParagraph}>
                         <Text style={styles.textRegular}><Text style={styles.textBold}>Máscara PFF2 ou N95 (preferível sem válvula): </Text>possuem uma filtragem mínima de 94% de partículas. São as máscaras mais seguras. Podem ser usadas de cinco a 10 vezes. Não são laváveis, devem ficar em ambiente arejado por três a cinco dias após o uso para serem utilizadas novamente. Podem ser usadas até 8h continuamente.</Text>
                        </View>
                    </View>
                </View>
        </View>
        </View>
    );
}

export default MaskTips;