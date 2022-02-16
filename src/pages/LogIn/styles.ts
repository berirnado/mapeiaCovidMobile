import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
        alignContent: 'center',
        justifyContent: 'flex-end'
    },

    header: {
        height: 50,
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop: 10,
    },

    goBackButton: {
        flexDirection: 'row',
    },

    textGoBack: {
        fontFamily: 'Archivo_400Regular',
        color: '#a8a8a8',
    },

    textSecondary:{
        fontFamily: 'Archivo_400Regular',
        textAlign: 'center',
        color: '#a8a8a8',
    },

    textLink: {
        fontFamily: 'Archivo_400Regular',
        textAlign: 'center',
        color: '#00c4fc',
    },

    logo: {
        marginTop: -50,
        marginLeft: 25,
        width: '80%',
        resizeMode: 'contain',
    },

    loginContainer: {
        marginTop: -10,
        alignSelf: 'center',
        width: '95%',
        height: 270,
    },

    formTitle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 22,
        textAlign: 'center'
    },

    inputContainer: {
        padding: 0,
        flexDirection: 'column',
    },

    inputBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2e1e2',
        width: '100%',
        paddingLeft: 10,
    },

    inputBlockChecked: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#00f09f',
        width: '100%',
        paddingLeft: 10,
    },

    passInputBlock: {
        marginTop: 10,
    },

    textInput: {
        width: '75%',
        marginLeft: 10,
        marginTop: 2,
    },

    saveData: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },

    saveDataText: {
        marginLeft: 5,
        fontFamily: 'Archivo_400Regular',
        fontSize: 14,
        color: '#2b2b2b'
    },

    formButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#00c4fc',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 60,
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },

    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },

    linkContainerSecondary: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    }

})

export default styles;