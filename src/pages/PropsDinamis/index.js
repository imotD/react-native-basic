import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: 'https://instagram.fcgk29-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.372.720.720a/s150x150/120332206_783245725552178_8439453237431714389_n.jpg?_nc_ht=instagram.fcgk29-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=c82PI4LCDkwAX-Aly1L&edm=ALbqBD0BAAAA&ccb=7-4&oh=b45b0371799a8701f31b4f6fb9f8831c&oe=619D8613&_nc_sid=9a90d6',
        }}
        style={{width: 70, height: 70, borderRadius: 50}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

export default function index() {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story title="Makan Channel" />
          <Story title="Minum Channel" />
          <Story title="Cookes Channel" />
          <Story title="Thanks Channel" />
          <Story title="Story Channel" />
          <Story title="IG Channel" />
          <Story title="EDU Channel" />
        </View>
      </ScrollView>
    </View>
  );
}
