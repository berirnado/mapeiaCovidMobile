import React from 'react'

import { Image, Text, View } from 'react-native';

import logo from '../../assets/logo.png';
import usemask from '../../assets/usemask.png';


import styles from './styles';

function CuidadosAeP() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}></Image>
            </View>
            <View style={styles.content}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>Cuidados anteriores e posteriores à vacinação:</Text>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>Deve ser tomada após 14 dias de imunização com vacina para outra doença, como a da gripe por exemplo.</Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>Quem teve recentemente COVID-19 precisa esperar em torno de quatro semanas após saída do isolamento para tomar vacina.</Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>Quem apresentou febre 24h antes da vacinação, não pode se vacinar.</Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>Evitar o uso de anti inflamatórios após tomar a vacina para não reduzir a resposta imunológica.</Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>Usar a máscara até que a maior parte da população seja vacinada, pois a pessoa imunizada ainda pode transmitir e contrair a doença</Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipItemText}>Continuar com higienização frequente das mãos e com o distanciamento social.</Text>
                    </View>
                </View>
        </View>
        </View>
    );
}

export default CuidadosAeP;