import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TheFlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('==> constructor ');
    this.state = {
      color: 500,
    };
  }

  componentDidMount() {
    console.log('==> componentDidMount');
    setTimeout(() => {
      this.setState({
        color: 550,
      });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('==> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('==> componentWillUnmount');
  }

  render() {
    console.log('==> render');
    return (
      <View>
        <View style={{backgroundColor: 'blue', flex: 1, height: 50}}></View>
        <View style={{backgroundColor: 'green', flex: 1, height: 50}}></View>
        <View style={{backgroundColor: 'tomato', flex: 1, height: 50}}></View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
          {this.state.color} Color
        </Text>
      </View>
    );
  }
}

export default TheFlexBox;
