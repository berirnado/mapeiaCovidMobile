import React from 'react';

import { AppLoading } from "expo";

import { Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo'

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
    return (
      <>
      <AppStack />
      </>
    );
}
