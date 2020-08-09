import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        padding: 40,
    },
    logoContainer: {
        marginBottom: 0
    },
    logo: {
        width:'100%',
        resizeMode: 'contain',
    },
    title: {
        fontFamily: 'Archivo_400Regular',
        marginTop: -20,
        fontSize: 13,
        color: '#9c9c9c',
        maxWidth: 240,
        textAlign: 'center',
    },

    buttonContainer: {
        flexDirection: 'column',
        marginTop: 30,
        justifyContent: 'space-between',
    },

    button: {
        height: 40,
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'center',
    },

    buttonPrimary: {
        backgroundColor: '#22daa5'
    },

    buttonSecondary: {
        backgroundColor: '#00c4fc'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    }
})

export default styles;