import React, {Component} from 'react';
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
      <Box />
      <Images />
    </View>
  );
};

const Homes = () => {
  return <Text>Ini Component dari Fungsional Component</Text>;
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
class Box extends Component {
  render() {
    return <Text>Ini Component dari Class Component</Text>;
  }
}

class Images extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text>Component Image</Text>
      </View>
    );
  }
}

export default App;
