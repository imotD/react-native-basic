import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TheCart from "../../components/TheCart";
import TheStyleComponent from "../../components/TheStyleComponent";

export default function Communication() {
  const [total, setTotal] = useState(0);
  return (
    <View>
      <Text>Communication</Text>
      <TheCart qty={total} />
      <TheStyleComponent onButtonPress={() => setTotal(total + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({});
