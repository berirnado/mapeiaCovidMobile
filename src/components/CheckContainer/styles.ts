import { StyleSheet } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
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
        fontFamily: 'Archivo_700Bold',
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
        fontFamily: 'Archivo_700Bold',
        color: '#ffff',
        marginLeft: wp('2%'),
    },
});

export default styles;