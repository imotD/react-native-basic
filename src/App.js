import React from 'react';
import {View, ScrollView} from 'react-native';
import TheHeckComponent from './components/TheHeckComponent';
import TheStyleComponent from './components/TheStyleComponent';
import TheFlexBox from './components/TheFlexBox';
import PropsDinamis from './pages/PropsDinamis';

const App = () => {
  return (
    <ScrollView>
      <View>
        {/* <TheHeckComponent /> */}
        {/* <TheFlexBox /> */}
        <PropsDinamis />
        {/* <TheStyleComponent /> */}
      </View>
    </ScrollView>
  );
};

export default App;
