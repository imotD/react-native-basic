import React from 'react';
import {View, ScrollView} from 'react-native';
import TheHeckComponent from './components/TheHeckComponent';
// import StyleBeginsComponent from './StyleBeginsComponent';
// import MateriFlexBox from './components/TheFlexBox';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
const App = () => {
  return (
    <ScrollView>
      <View>
        <TheHeckComponent />
      </View>
    </ScrollView>
  );
};

export default App;
