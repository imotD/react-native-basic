import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TheCart(props) {
  return (
    <View
      style={{
        backgroundColor: "orange",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {props.qty}
      </Text>
    </View>
  );
}
