import React, {Component} from 'react';
import {View} from 'react-native';


class TheFlexBox extends Component {
  render() {    
    return (
      <View>kyk
        <View style={{backgroundColor: 'blue', flex: 1, height: 50}}></View>
        <View style={{backgroundColor: 'green', flex: 1, height: 50}}></View>
      </View>
    );
  }
}

export default TheFlexBox;
