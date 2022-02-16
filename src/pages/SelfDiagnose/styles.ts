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
        height: hp('22%'),
        backgroundColor: '#009CFA',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        marginTop: hp('6.5%'),
        marginLeft: wp('-2.5%'),
        width: '55%',
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('5%'),
        color: '#ffff'
    },
    backButton: {
        marginTop: -hp('9%'),
        marginLeft: wp('3%')
    },
    contentContainer: {

    },
    buttonContainer: {
        marginTop: hp('2%'),
        marginHorizontal: wp('5%'),
        height: hp('90%'),
    },
    buttonContainerRow: {
        flexDirection: 'row',
        marginBottom: hp('1.5%'),
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
    },
    buttonContainerRowYesNo: {
        flexDirection: 'row',
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
    },
    normalText: {
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('2.5%'),
        color: '#818f98',
    },
    boldText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('2.5%'),
        color: '#818f98',
    },
    confirmButton: {
        width: '90%',
        height: '10%',
        borderRadius: 7,
        backgroundColor: '#009cfa',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: hp('2%'),
        marginBottom: hp('20%'),
    },
    confirmButtonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('2.5%'),
        color: '#ffff',
    },
    filler: {
        height: hp('15%')
    }
})

export default styles;