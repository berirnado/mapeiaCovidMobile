import { StyleSheet } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        margin: 0,
    },
    header: {
        width: '100%',
        backgroundColor: '#FFFEFF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: wp('45%'),
        height: hp('25%'),
        marginLeft: wp('25%'),
        marginTop: hp('2%'),
    },
    content: {
        resizeMode: 'contain',
        alignItems: 'center',
        height: hp('90%'),
        width: wp('100%'),
        marginTop: hp('0%'),
    },
    titleText: {
        justifyContent: 'center',
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('3.4%'),
        marginTop: hp('5%'),
        textAlign: 'center',
        width: wp('70%'),
        marginBottom: hp('3%'),
    },
    iconRow: {
        flexDirection: 'row',
        marginTop: hp('3%'),
    },
    stayhome: {
        resizeMode: 'contain',
        width: wp('35%'),
        height: hp('25%'),
        marginTop: hp('-7%'),
    },
    paragraphText: {
        width: wp('60%'),
    },
    cuidadosContent: {
        marginTop: hp('-5%'),
    },
    paragraphTextCuidados: {
        textAlign: 'center',
        marginTop: hp('3%'),
    },
    filler: {
        height: hp('90%'),
    }

})

export default styles;