import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
        alignContent: 'center'
    },

    header: {
        height: 50,
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop: 10,
        marginLeft: -10,
    },

    goBackButton: {
        flexDirection: 'row',
    },

    textGoBack: {
        color: '#a8a8a8',
    },

    textSecondary:{
        textAlign: 'center',
        color: '#a8a8a8',
    },

    textLink: {
        textAlign: 'center',
        color: '#00c4fc',
    },

    logoContainer: {
        marginTop: -50,
        flexDirection: 'column',
        alignItems: 'center',
    },

    logo: {
        width: '80%',
        resizeMode: 'contain',
    },

    pageTitle: {
        fontSize: 23,
        marginBottom: 10,
        marginTop: -35,
    },

    loginContainer: {
        marginTop: 0,
        alignSelf: 'center',
        width: '95%',
        height: '55%',
    },

    formTitle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
    },

    inputContainer: {
        padding: 0,
        flexDirection: 'column',
    },

    inputBlock: {
        flexDirection: 'row',
        marginTop: 5,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2e1e2',
        width: '100%',
        paddingLeft: 10,
    },

    passInputBlock: {
        marginTop: 10,
    },

    formIcons: {
        marginTop: 15,
    },

    textInput: {
        marginLeft: 10,
        marginTop: 2,
    },

    circlesContainer: {
        width: '95%',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    circle: {
        flexDirection:'row-reverse',
        alignItems: 'center',
    },

    circleText: {
        
        color: '#2b2b2b',
    },

    submitForm: {
        marginTop: 10,
    },

    formButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#00c4fc',
        justifyContent: 'center',
        borderRadius: 8,
    },

    buttonText: {
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
    },

    terms: {
        marginTop: 60,
        alignContent: "center",
        alignItems: "center",
    },

    termsCircle: {
        marginTop: -7,
    },

    termsConfirmation: {
        marginTop: 20,
        flexDirection: 'row',
    }

})

export default styles;