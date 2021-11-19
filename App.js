import React, {Component} from 'react';
import {Button, Text, Image, TextInput, View} from 'react-native';

const App = () => {
  return <HackerComponent />;
};

const HackerComponent = () => {
  return (
    <View
      style={{
        backgroundColor: '#1c1c1c',
        flex: 1,
      }}>
      <Background />
      <Profile />
      <Field />
      <View style={{marginTop: 100}}>
        <Button title="Sign In" style={{height: 100}} color="#FF3D00" />
      </View>
    </View>
  );
};

class Field extends Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <Text style={{color: 'grey', textTransform: 'uppercase'}}>
          Username :
        </Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#9a0101',
          }}></TextInput>
        <Text style={{color: 'grey', textTransform: 'uppercase'}}>
          Password :
        </Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#9a0101',
          }}></TextInput>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
          }}
          style={{
            alignSelf: 'center',
            width: 100,
            height: 100,
            borderRadius: 50,
            borderColor: 'red',
            borderWidth: 5,
            marginTop: -50,
          }}
        />
      </View>
    );
  }
}

class Background extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          }}
          style={{left: 0, right: 0, height: 250}}
        />
      </View>
    );
  }
}

export default App;
