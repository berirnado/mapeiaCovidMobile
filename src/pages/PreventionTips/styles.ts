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
        fontSize: hp('3.4%'),
        marginTop: hp('5%')
    },
    titleTextContainer: {
        alignItems: 'center',
        width: '100%',
        height: hp('15%'),
    },
    scrollViewContainer: {
        height: hp('80%'),
    },
    tipsContainer: {
        height: '80%',
        width: '75%',
        alignSelf: 'center',
        flexDirection: 'column',
        // justifyContent: 'space-around',
    },
    tipItem: {
        width: '100%',
        height: hp('20%'),
        marginLeft: wp('5%'),
        flexDirection: 'row',
    },
    tipItem2: {
        width: '100%',
        height: hp('20%'),
        marginLeft: wp('12%'),
        flexDirection: 'row',
    },
    tipItemImage: {
      resizeMode: 'contain',
      height: hp('20%'),
      width: wp('30%'),
    },
    tipItemText: {
        width: wp('50%'),
        marginTop: hp('6%'),
        fontSize: hp('2.4%'),
    },
    filler: {
        height: hp('20%'),
    }

})

export default styles;