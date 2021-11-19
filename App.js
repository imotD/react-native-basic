import React, {Component} from 'react';
import {StyleSheet, Button, Text, Image, TextInput, View} from 'react-native';
import Banner from './assets/banner.png';

const App = () => {
  return <StyleBeginsComponent />;
};

const StyleBeginsComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Hellow World</Text>
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={Banner}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 12}}>
          Promo Atozgo November
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Khusus Jakarta Pusat
        </Text>
        <View
          style={{
            marginTop: 10,
            paddingVertical: 5,
            borderRadius: 25,
            backgroundColor: 'orange',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'white',
              textAlign: 'center',
            }}>
            Pakai Vocher
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'tomato',
    marginLeft: 20,
    marginTop: 40,
  },
});

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
