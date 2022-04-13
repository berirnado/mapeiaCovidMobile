import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import { View, Text, Image, ScrollView } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import EnderecoIcon from '../../assets/icones/035-maps-and-flags.svg';
import PhoneIcon from '../../assets/icones/032-phone-call.svg';
import CalendarIcon from '../../assets/icones/037-calendar.svg';

import styles from './styles';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';


function SignIn(){
    const { navigate } = useNavigation();

    const [coords, setCoords] = useState({
        latitude: '',
        longitude: '',
    })
    const [longitude, setLongitude] = useState(String)
    const [errorMsg, setErrorMsg] = useState(String);

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(JSON.stringify(location.coords.latitude))
        console.log(JSON.stringify(location.coords.longitude))
        setCoords({
            ...coords,
            latitude: JSON.stringify(location.coords.latitude),
            longitude: JSON.stringify(location.coords.longitude),
        })
        })();
    }, []);

    const [radioValue, setRadioValue] = React.useState('');

    const [data, setData] = useState({
        phone: '',
        birthday: '',
        latitude: '',
        longitude: '',
        genderValue: '',
        termsConfirm: false, 
    })

    const termsConfirmToggle = () => {
        let termsStateToggle  = !data.termsConfirm
    
        setData({
            ...data,
            termsConfirm: termsStateToggle,
            latitude: coords.latitude,
            longitude: coords.longitude
        })
    }

    const celularInputChange = (val: string) => {
        if (val.length !== 0) {
            setData({
                ...data,
                phone: val,
            })
        } else {
            setData({
                ...data,
                phone: val,
            })
        }
    }

    const birthdayInputChange = (val: string) => {
        setData({
            ...data,
            birthday: val,
        })
    }

    const signUpFetch = () => {
        data.genderValue = radioValue
        let errorCounter = 0
        if(data.termsConfirm == false) {
            alert("Leia e aceite os termos e condições")
            errorCounter++
        }
        if(data.phone.length <= 0){
            alert("Preencha o celular antes de continuar")
            errorCounter++
        }
        if(data.birthday.length <= 0){
            alert("Preencha a data de nascimento antes de continuar")
            errorCounter++
        }
        if(data.birthday.length <= 0){
            alert("Preencha a data de nascimento antes de continuar")
            errorCounter++
        }
        if(data.genderValue == ''){
            alert("Selecione o gênero antes de continuar")
            errorCounter++
        }

        if(errorCounter == 0) {
            const reqOptions = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            console.log(data)
            console.log(data.longitude)
            console.log(data.latitude)
            fetch('http://192.168.1.106:8080/auth/signup', reqOptions)
            .then(res => {
                if(res.status == 201) {
                    console.log(JSON.stringify(res))
                    handleNavigateToSignUpSuccess()
                }
                else{
                    alert('Problema na hora de criar usuário')
                }
            })
        }
    }

    function handleNavigateToSignUpSuccess(){
        navigate('HomeTabs');
    }



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
                        <View style={[styles.inputBlock, styles.passInputBlock]}>
                            <PhoneIcon height={20} width={20} fill={'black'} style={styles.formIcons} />
                            <TextInput 
                                placeholder="Celular" 
                                placeholderTextColor="#9a9a9a"
                                onChangeText={(val) =>celularInputChange(val)} 
                                style={styles.textInput}
                            />
                        </View>
                        <View style={[styles.inputBlock, styles.passInputBlock]}>
                            <CalendarIcon height={20} width={20} fill={'black'} style={styles.formIcons} />
                            <TextInput 
                                placeholder="Data de Nascimento" 
                                placeholderTextColor="#9a9a9a"
                                onChangeText={(val) =>birthdayInputChange(val)} 
                                style={styles.textInput}
                            />
                        </View>
                        <RadioButton.Group onValueChange={newValue => setRadioValue(newValue)} value={radioValue}>
                            <View style={styles.circlesContainer}>
                                <View style={styles.circle}>
                                    <Text style={styles.circleText}>Masculino</Text>
                                    <RadioButton value="Masculino" color="#00f09a"/>
                                </View>
                                <View style={styles.circle}>
                                    <Text style={styles.circleText}>Feminino</Text>
                                    <RadioButton value="Feminino" />
                                </View>
                                <View style={styles.circle}>
                                    <Text style={styles.circleText}>Outro</Text>
                                    <RadioButton value="Outro"/>
                                </View>
                            </View>
                        </RadioButton.Group>
                        <View style={styles.terms}>
                            <Text>Termos de consentimento livre e esclarecido</Text>
                            <View style={styles.termsConfirmation}>
                                <Text>Li e concordo com os termos</Text>
                                <View style={styles.termsCircle}>
                                    <RadioButton.Android value='terms' onPress={termsConfirmToggle} status={data.termsConfirm === true ? 'checked' : 'unchecked'} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.submitForm}>
                <RectButton style={styles.formButton} onPress={signUpFetch}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
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