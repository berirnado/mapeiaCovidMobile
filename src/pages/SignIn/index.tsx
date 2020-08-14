import React from 'react';

import { View, Text, Image, ScrollView } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import UserIcon from '../../assets/icones/003-user.svg';
import PassIcon from '../../assets/icones/031-privacy.svg';
import PhoneIcon from '../../assets/icones/032-phone-call.svg';
import CalendarIcon from '../../assets/icones/037-calendar.svg';

import styles from './styles';
import { TextInput, RectButton } from 'react-native-gesture-handler';


function SignIn(){

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <RectButton style={styles.goBackButton}>
                    <AntDesign name="arrowleft" size={14} color="#a8a8a8" />
                    <Text style={styles.textGoBack}> Voltar</Text>
                </RectButton>
            </View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logoImg} />
                <Text style={styles.pageTitle}>Cadastre-se</Text>
            </View>
            <ScrollView>
                <View style={styles.loginContainer}>
                    <Text style={styles.formTitle}>Dados Pessoais</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputBlock}>
                            <UserIcon height={20} width={20} fill={'black'} style={styles.formIcons}/>
                            <TextInput placeholder="Nome Completo" placeholderTextColor="#9a9a9a" style={styles.textInput}></TextInput>
                        </View>
                        <View style={[styles.inputBlock, styles.passInputBlock]}>
                            <PassIcon height={20} width={20} fill={'black'} style={styles.formIcons} />
                            <TextInput placeholder="Email" placeholderTextColor="#9a9a9a" style={styles.textInput}></TextInput>
                        </View>
                        <View style={[styles.inputBlock, styles.passInputBlock]}>
                            <PhoneIcon height={20} width={20} fill={'black'} style={styles.formIcons} />
                            <TextInput placeholder="Celular" placeholderTextColor="#9a9a9a" style={styles.textInput}></TextInput>
                        </View>
                        <View style={[styles.inputBlock, styles.passInputBlock]}>
                            <CalendarIcon height={20} width={20} fill={'black'} style={styles.formIcons} />
                            <TextInput placeholder="Data de Nascimento" placeholderTextColor="#9a9a9a" style={styles.textInput}></TextInput>
                        </View>
                        <View style={styles.circlesContainer}>
                            <View style={styles.circle}>
                                <Text style={styles.circleText}>Masculino</Text>
                                <RectButton>
                                    <Entypo name="circle" size={23} color="black"/>
                                </RectButton>
                            </View>
                            <View style={styles.circle}>
                                <Text style={styles.circleText}>Feminino</Text>
                                <RectButton>
                                    <Entypo name="circle" size={23} color="black"/>
                                </RectButton>
                            </View>
                            <View style={styles.circle}>
                                <Text style={styles.circleText}>Outro</Text>
                                <RectButton>
                                    <Entypo name="circle" size={23} color="black"/>
                                </RectButton>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.submitForm}>
                <RectButton style={styles.formButton}>
                    <Text style={styles.buttonText}>PROSSEGUIR</Text>
                </RectButton>
            </View>
            <View style={styles.linkContainerSecondary}>
                <Text style={styles.textSecondary}>Já tem uma conta?</Text>
                <Text style={styles.textLink}>Faça Login</Text>
            </View>
        </View>
    );
}

export default SignIn;