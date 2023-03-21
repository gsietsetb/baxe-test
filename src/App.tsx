/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppWrapper from './AppWrapper';
import {extend} from 'consistencss';
import {fontsMap} from './ui/typography';
import palette from './ui/colors';

extend({
  fonts: fontsMap,
  sizing: {base: 4},
  colors: palette,
});

function App(): JSX.Element {
  return <AppWrapper />;
}

export default App;
