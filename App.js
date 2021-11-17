import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 100, backgroundColor: 'red'}}></View>
      <Text>Ini Adalah App 1</Text>
      <Text>Ini Adalah App 2</Text>
      <Homes />
    </View>
  );
};

const Homes = () => {
  return <Text>Ini Adalah Homes</Text>;
};

export default App;
