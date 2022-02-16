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
    logoCortada: {
        resizeMode: 'contain',
        width: wp('15%'),
        height: hp('15%'),
        marginLeft: wp('3.5%'),
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
    mapContainer: {
        height: hp('90%'),
        backgroundColor: 'black',
    },
    telaMapa: {
        resizeMode: 'contain',
        height: hp('90%'),
        width: wp('100%'),
        marginTop: -hp('8%'),
    }
})

export default styles;