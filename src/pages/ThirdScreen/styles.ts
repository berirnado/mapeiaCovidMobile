import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 30,
    },
    logoContainer: {
        marginBottom: 0
    },
    logo: {
        width:'100%',
        resizeMode: 'contain',
    },
    paragraphContainer: {
        width: wp('90%'),
    },

    paragraph: {
        marginLeft: wp('-5%'),
        marginBottom: hp('5%'),
        textAlign: 'center',
    },
    negrito: {
        marginLeft: wp('-5%'),
        fontWeight: 'bold',
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
    },

    equipeItem: {
        width: '90%',
        alignItems: 'center',
    },
})

export default styles;