import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Landing from '../pages/Landing';
import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';
import MapScreen from '../pages/MapScreen'
import MaskTips from '../pages/MaskTips'
import HomeTabs from './HomeTabs';
import SelfDiagnose from '../pages/SelfDiagnose';
import SelfDiagnosePositive from '../pages/SelfDiagnosePositive';
import TipsScreen from '../pages/TipsScreen';
import PreventionTips from '../pages/PreventionTips';
import HomeIsolation from '../pages/HomeIsolation';
import CuidadosAeP from '../pages/CuidadosAeP';
import MedicalAttention from '../pages/MedicalAttention';
import SecondScreen from '../pages/SecondScreen';
import ThirdScreen from '../pages/ThirdScreen';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="SignIn" component={SignIn} />
                <Screen name="MapScreen" component={MapScreen} />
                <Screen name="Landing" component={Landing} />
                <Screen name="LogIn" component={LogIn} />
                <Screen name="HomeTabs" component={HomeTabs} />
                <Screen name="TipsScreen" component={TipsScreen} />
                <Screen name="MaskTips" component={MaskTips} />
                <Screen name="SelfDiagnose" component={SelfDiagnose} />
                <Screen name="SelfDiagnosePositive" component={SelfDiagnosePositive} />
                <Screen name="PreventionTips" component={PreventionTips} />
                <Screen name="HomeIsolation" component={HomeIsolation} />
                <Screen name="CuidadosAeP" component={CuidadosAeP} />
                <Screen name="MedicalAttention" component={MedicalAttention} />
                <Screen name="SecondScreen" component={SecondScreen} />
                <Screen name="ThirdScreen" component={ThirdScreen} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;