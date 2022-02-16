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
    tipItem: {
        width: '100%',
        height: hp('10%'),
        justifyContent: 'center',
        flexDirection: 'row',
    },
    tipItemImage: {
        resizeMode: 'contain',
        height: hp('20%'),
        width: wp('30%'),
    },
    tipItemText: {
        width: wp('90%'),
        marginTop: hp('4%'),
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('2.0%'),
    },
    tipesContainer: {
        width: wp('90%'),
        alignItems: 'center',   
    },
    tipesParagraph: {
        marginLeft: wp('3%'),
        marginTop: hp('3%'),
    },
    textBold: {
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('2.0%'),
    },
    textRegular: {
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('2.0%'),
    }
})

export default styles;