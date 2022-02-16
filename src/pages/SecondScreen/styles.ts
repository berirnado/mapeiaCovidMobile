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
        padding: 8,
    },

    paragraph: {
        marginLeft: wp('-5%'),
        marginBottom: hp('5%'),
        textAlign: 'center',
    },
    negrito: {
        fontWeight: 'bold',
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

    footerLogos: {
        marginTop: hp('-10%'),
        flexDirection: 'row',
    },

    bageLogo: {
        width: '20%',
        resizeMode: 'contain',
    },
    tierdesignLogo: {
        marginTop: hp('18%'),
        width: '60%',
        resizeMode: 'contain',
    },
    ifsulLogo: {
        marginTop: hp('10%'),
        width: '20%',
        resizeMode: 'contain',
    },
})

export default styles;