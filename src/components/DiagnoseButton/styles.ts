import { StyleSheet } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    button: {
        width: '48%',
        height: '100%',
        backgroundColor: '#c7cdd1',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonBigger: {
        width: '48%',
        height: '120%',
        backgroundColor: '#c7cdd1',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonPressed: {
        width: '48%',
        height: '100%',
        backgroundColor: '#00c4fc',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonBiggerPressed: {
        width: '48%',
        height: '120%',
        backgroundColor: '#00c4fc',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#8f9ba3',
        marginLeft: wp('4%'),
    },
    buttonTextPressed: {
        fontFamily: 'Archivo_700Bold',
        color: '#ffff',
        marginLeft: wp('4%'),
    },
});

export default styles;