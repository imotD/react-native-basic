import React from 'react';
import {View, ScrollView} from 'react-native';
import HackerComponent from './HackerComponent';
import StyleBeginsComponent from './StyleBeginsComponent';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
const App = () => {
  return (
    <ScrollView>
      <View>
        <StyleBeginsComponent />
        <HackerComponent />
      </View>
    </ScrollView>
  );
};

export default App;
