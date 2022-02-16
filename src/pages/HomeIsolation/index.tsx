import React from 'react'

import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import logo from '../../assets/logo.png';

import StayHome from '../../assets/stayhome.png'


import styles from './styles';

function HomeIsolation() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}></Image>
            </View>
            <View style={styles.content}>
                <Text style={styles.titleText}>Funcionamento do isolamento domiciliar:</Text>
                <View style={styles.iconRow}>
                    <Image source={StayHome} style={styles.stayhome}></Image>
                    <Text style={styles.paragraphText}>Deve ser realizado por caso suspeito ou confirmado de COVID-19 e pelas pessoas que residem com o mesmo</Text>
                </View>
                <View style={styles.cuidadosContent}>
                    <Text style={styles.titleText}>Cuidados importantes:</Text>
                    <Text style={styles.paragraphTextCuidados}>- Separação de indivíduos em cômodos separados da casa;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Quando possível, destinar um banheiro para uso exclusivo da pessoa que está se isolando. Caso contrário, o siolado deverá higienizar todo o banheiro após o uso, usando álcool 70% nas superfícies e água sanitária no vaso, pia e piso.</Text>
                    <Text style={styles.paragraphTextCuidados}>- Manutenção das lixeiras com as tampas fechadas;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Uso da máscara pelo siolado o tempo todo nos espaços compartilhados;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Não dividir itens pessoais;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Manutenção da porta fechada do quarto onde está o isolado, sendo importante a abertura das janelas para entrada de ar e luz solar;</Text>
                    <Text style={styles.paragraphTextCuidados}>- O isolado deverá trocar a sua própria roupa de cama e colocar um saco plástico fechado para depois levar até o local para lavagem;</Text>
                    <Text style={styles.paragraphTextCuidados}>- É importante que tenha saco plástico para colocar o lixo no cômodo onde está o isolado. Esse saco plástico com lixo deverá ser bem fechado para depois ser descartado;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Se a casa tiver apenas um cômodo, não deverá ser compartilhado o mesmo sofá, cadeira ou colchão e deve ser mantido o distanciamento de dois metros da pessoa isolada;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Não compartilhar copos, talheres e pratos;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Limpeza das maçanetas com frequência;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Uso de sabão líquido para evitar o compartilhamento de sabonete para higienização das mãos;</Text>
                    <Text style={styles.paragraphTextCuidados}>- Limpeza constante de superfícies de móveis e objetos;</Text>
                    <Text style={styles.paragraphTextCuidados}>- É recomendado que a pessoa responsável pela limpeza da casa use óculos, avental, luva e máscara;</Text>
                    <Text style={styles.paragraphTextCuidados}>Obs: Isolado refere-se a pessoa com suspeita ou com COVID-19;</Text>
                </View>
            </View>
            <View style={styles.filler}>
                <Text>.</Text>
            </View>
        </ScrollView>
    );
}

export default HomeIsolation;