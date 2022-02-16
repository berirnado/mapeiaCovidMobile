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
        height: hp('15%'),
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
    headerText: {
        marginTop: hp('2%'),
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('3.4%'),
        color: '#757070',
        marginLeft: wp('15%'),
    },
    profileIcon: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginTop: hp('2%'),
        marginLeft: wp('15%'),
        borderRadius: 1000,
        borderColor: '#03fc73',
        borderWidth: 1,
    },
    content: {
        resizeMode: 'contain',
        height: hp('90%'),
        width: wp('100%'),
        marginTop: hp('0%'),
    },
    titleText: {
        justifyContent: 'center',
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('3.4%'),
        marginTop: hp('5%')
    },
    titleTextContainer: {
        alignItems: 'center',
        width: '100%',
        height: hp('15%'),
    },
    tipsContainer: {
        height: '80%',
        width: '75%',
        alignSelf: 'center',
        flexDirection: 'column',
        // justifyContent: 'space-around',
    },
    tipsButton: {
        borderWidth: 3,
        width: '100%',
        height: hp('9%'),
    },
    tipsButtonText: {
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('2.4%'),
    }
})

export default styles;