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
    },
    telaMapa: {
        resizeMode: 'contain',
        height: hp('90%'),
        width: wp('100%'),
        marginTop: -hp('8%'),
    },
    checkContainer: {
        marginTop: -hp('30%'),
        height: hp('20%'),
        width: wp('100%'),
        backgroundColor: '#ffff',
        borderRadius: 22,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        alignItems: 'center',
    },
    checkContainerText: {
        marginTop: hp('2%'),
        fontSize: hp('3.2%'),
    },
    checkContainerButtons: {
        flexDirection: 'row',
        width: '90%',
        height: '28%',
        marginTop: hp('1.5%'),
        justifyContent: 'space-between',
    },
    containerButton: {
        width: '45%',
        height: '100%',
        backgroundColor: '#00D780',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        flexDirection: 'row',
    },
    containerButtonRed: {
        width: '45%',
        height: '100%',
        backgroundColor: '#F30145',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        flexDirection: 'row',
    },
    buttonText: {
        color: '#ffff',
        marginLeft: wp('2%'),
    },
})

export default styles;