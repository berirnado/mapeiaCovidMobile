import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Landing from '../pages/Landing';
import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';
import MapScreen from '../pages/MapScreen'
import HomeTabs from './HomeTabs';
import SelfDiagnose from '../pages/SelfDiagnose';
import SelfDiagnosePositive from '../pages/SelfDiagnosePositive';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="SelfDiagnosePositive" component={SelfDiagnosePositive} />
                <Screen name="Landing" component={Landing} />
                <Screen name="LogIn" component={LogIn} />
                <Screen name="SignIn" component={SignIn} />
                <Screen name="HomeTabs" component={HomeTabs} />
                <Screen name="SelfDiagnose" component={SelfDiagnose} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;