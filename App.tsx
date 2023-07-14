import React from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import Themes from './src/themes';
import Routes from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider theme={Themes}>
      <StatusBar backgroundColor={Themes.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}
