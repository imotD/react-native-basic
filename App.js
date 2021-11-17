import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View
        style={{width: 100, height: 100, backgroundColor: '#FF5F7E'}}></View>
      <Text>Ini Adalah App Circle</Text>
      <Photo />
      <Homes />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Homes = () => {
  return <Text>Ini Adalah Text dari beda komponen</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://api.openpay.mx/barcode/185017437691737?width=1&height=100',
      }}
      style={{height: 100, width: 100}}
    />
  );
};

export default App;
