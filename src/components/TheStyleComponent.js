import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import Banner from "../assets/banner.png";

const TheStyleComponent = props => {
  return (
    <View>
      <Text style={styles.text}>Hellow World</Text>
      <View
        style={{
          padding: 12,
          backgroundColor: "#f2f2f2",
          width: 212,
          borderRadius: 8
        }}
      >
        <Image
          source={Banner}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 12 }}>
          Promo Atozgo November
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "300", marginTop: 12 }}>
          Khusus Jakarta Pusat
        </Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View
            style={{
              marginTop: 10,
              paddingVertical: 5,
              borderRadius: 25,
              backgroundColor: "orange"
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "white",
                textAlign: "center"
              }}
            >
              Beli
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "tomato",
    marginLeft: 20,
    marginTop: 40
  }
});

export default TheStyleComponent;
