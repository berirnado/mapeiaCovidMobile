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
        height: hp('27%'),
        backgroundColor: '#f30145',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        marginLeft: wp('13.5%'),
        width: '60%',
        justifyContent: 'center',

    },
    headerText: {
        marginLeft: wp('15%'),
        width: '100%',
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('4%'),
        color: '#ffff'
    },
    headerText2: {
        marginLeft: wp('-2%'),
        width: '100%',
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('4%'),
        color: '#ffff'
    },
    headerTextBold: {
        marginTop: hp('2%'),
        width: '100%',
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('3.5%'),
        color: '#ffff'
    },
    headerTextBold2: {
        marginLeft: wp('2%'),
        marginTop: hp('2%'),
        width: '100%',
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('4%'),
        color: '#ffff'
    },
    backButton: {
        marginTop: -hp('9%'),
        marginLeft: wp('3%')
    },
    contentContainer: {
        marginLeft: wp('5%'),
        paddingTop: hp('3%'),
        width: wp('90%'),
        height: hp('70%'),
    },
    textParagraph: {
        marginTop: hp('4%'),
    },
    normalText: {
        fontFamily: 'Archivo_400Regular',
        fontSize: hp('3.1%'),
        color: '#737373',
    },
    boldText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('3.1%'),
        color: '#595959',
    },
    orientations: {
        marginTop: hp('6%'),
        marginBottom: hp('-5%'),
    },
    orientationRow: {
        marginTop: hp('-2%'),
        flexDirection: 'row',
    },
    iconCircle: {
        backgroundColor: '#f30145',
        height: '45%',
        width: '10%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orientationText: {
        width: '90%',
        marginLeft: wp('4%'),
    },
    orientationRowLast: {
        marginTop: hp('2%'),
        flexDirection: 'row',
    },
    boldTextRed: {
        fontFamily: 'Archivo_700Bold',
        fontSize: hp('3.1%'),
        color: '#f30145',
    },
    filler: {
        height: hp('10%'),
    }
})

export default styles;