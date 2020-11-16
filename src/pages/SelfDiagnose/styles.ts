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
        marginTop: hp('5%'),
        marginHorizontal: wp('5%'),
        height: hp('90%'),
    },
    button: {
        width: '45%',
        height: '30%',
        backgroundColor: '#00C4FC',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#ffff',
        marginLeft: wp('4%'),
    },
})

export default styles;