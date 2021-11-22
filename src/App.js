import React from 'react';
import {View, ScrollView} from 'react-native';
import TheHeckComponent from './components/TheHeckComponent';
import TheStyleComponent from './components/TheStyleComponent';
import TheFlexBox from './components/TheFlexBox';

const App = () => {
  return (
    <ScrollView>
      <View>
        {/* <TheHeckComponent /> */}
        <TheFlexBox />
        {/* <TheStyleComponent /> */}
      </View>
    </ScrollView>
  );
};

export default App;
