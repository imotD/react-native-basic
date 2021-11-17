import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Images />
      <Homes />
      <Box />
    </View>
  );
};

const Homes = () => {
  return <Text>This is a Component of a Functional Component</Text>;
};

class Box extends Component {
  render() {
    return <Text>This is a Component of a Class Component</Text>;
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
        <Text>Hello Zenal !</Text>
      </View>
    );
  }
}

export default App;
