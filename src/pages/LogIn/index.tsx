import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, Image, Keyboard, KeyboardAvoidingView, Platform, Alert } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import UserIcon from '../../assets/icones/003-user.svg'
import PassIcon from '../../assets/icones/031-privacy.svg'

import styles from './styles';
import { TextInput, RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';


function LogIn(){
    const {navigate} = useNavigation();

    const [data, setData] = useState({
        phone: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        isSaveDataChecked: false,
    })

    const storeData = async (value: string) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
          // saving error
        }
      }


    const textInputChange = (val: string) => {
        if (val.length !== 0) {
            setData({
                ...data,
                phone: val,
                checkTextInputChange: true
            })
        } else {
            setData({
                ...data,
                phone: val,
                checkTextInputChange: false
            })
        }
    }

    const toggleSaveFormData = () => {
        let saveDataToggle = !data.isSaveDataChecked;

        setData({
            ...data,
            isSaveDataChecked: saveDataToggle,
        })
    }

    function handleFetchLogin(){
        if(data.phone.length > 0) {
            const reqOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            fetch('http://192.168.1.106:8080/auth/login', reqOptions)
            .then(res => {
                if(res.status == 200) {
                    res.json()
                        .then(data => {
                            storeData(data.token)
                            handleNavigateToLoginSuccess()
                        })
                        .catch(err => console.log(err)) 
                }
                else{
                    alert('Problema na hora de logar')
                }
            })
        }

    }
    
    function handleNavigateToLoginSuccess(){
        navigate('HomeTabs');
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.header}>
                    <RectButton style={styles.goBackButton}>
                        <AntDesign name="arrowleft" size={14} color="#a8a8a8" />
                        <Text style={styles.textGoBack}> Voltar</Text>
                    </RectButton>
                </View>
                <Image style={styles.logo} source={logoImg} />
                <View style={styles.loginContainer}>
                    <Text style={styles.formTitle}>Entre na sua conta</Text>
                            <View style={data.checkTextInputChange ? styles.inputBlockChecked : styles.inputBlock}>
                                <UserIcon height={20} width={20} fill={'black'}/>
                                <TextInput 
                                    placeholder="Número do celular" 
                                    placeholderTextColor="#2b2b2b"
                                    onChangeText={(val) =>textInputChange(val)} 
                                    style={styles.textInput}
                                />
                                {data.checkTextInputChange ?
                                <AntDesign name="checkcircleo" size={18} color="#00f09f"/>
                                : null}
                            </View>
                            <View style={styles.saveData}>
                            <TouchableWithoutFeedback onPress={toggleSaveFormData}>
                                {data.isSaveDataChecked ?
                                    <AntDesign name="checkcircleo" size={28} color="#3ff4c9"/>
                                :
                                <Entypo name="circle" size={28} color="#3ff4c9"/>}
                            </TouchableWithoutFeedback>
                            <Text style={styles.saveDataText}>Salvar dados de login</Text>
                            </View>
                    <RectButton style={styles.formButton} onPress={() => handleFetchLogin()}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </RectButton>
                </View>
            </TouchableWithoutFeedback>
            <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
                <View style={styles.linkContainerSecondary}>
                    <Text style={styles.textSecondary}>Não tem uma conta?</Text>
                    <Text style={styles.textLink}>Cadastre-se</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default LogIn;