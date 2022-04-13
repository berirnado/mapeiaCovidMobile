import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../pages/MapScreen';
import TipsScreen from '../pages/TipsScreen';
import BoletinsScreen from '../pages/BoletinsScreen';
import NewsScreen from '../pages/NewsScreen';

import HomeIcon from '../assets/icones/009-home.svg';
import DicasIcon from '../assets/icones/013-menu.svg';
import BoletinsIcon from '../assets/icones/024-pie-chart.svg';
import NewsIcon from '../assets/icones/012-copy.svg';

import { Platform }  from 'react-native';


const { Navigator, Screen } = createBottomTabNavigator();

function HomeTabs() {
    return(
        <Navigator
            tabBarOptions={{
                style: {
                    shadowOpacity: 0.5,
                    height: 64,
                    position: 'absolute',
                    borderWidth: 1,
                    borderColor: '#e6e6e6',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                safeAreaInsets: {
                    bottom: 0,
                },
                tabStyle: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 0,
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: Platform.OS === 'ios' ? 24 : 20,
                },
                labelStyle: {
                    fontSize: 13,
                    marginTop: 4,
                },
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#07A7FF'
            }}
        >
            <Screen 
                name="MapScreen" 
                component={MapScreen} 
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <HomeIcon fill={focused ? '#07A7FF' : color} />
                        );
                    }
                }}
            />
            <Screen 
                name="TipsScreen" 
                component={TipsScreen}
                options={{
                    tabBarLabel: 'Dicas',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <DicasIcon fill={focused ? '#07A7FF' : color} />
                        );
                    }
                }} 
            />
            <Screen 
                name="BoletinsScreen" 
                component={BoletinsScreen}
                options={{
                    tabBarLabel: 'Boletins',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <BoletinsIcon fill={focused ? '#07A7FF' : color} />
                        );
                    }
                }} 
            />
            <Screen 
                name="NewsScreen" 
                component={NewsScreen}
                options={{
                    tabBarLabel: 'Notícias',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <NewsIcon fill={focused ? '#07A7FF' : color} />
                        );
                    }
                }} 
            />
        </Navigator>
    );
}

export default HomeTabs;