import React from "react";
import { View, ScrollView } from "react-native";
import TheHeckComponent from "./components/TheHeckComponent";
import TheStyleComponent from "./components/TheStyleComponent";
import TheFlexBox from "./components/TheFlexBox";
import PropsDinamis from "./pages/PropsDinamis";
import StateDinamis from "./pages/StateDinamis";
import Communication from "./pages/Communication";
import TheCart from "./components/TheCart";

const App = () => {
  return (
    <ScrollView>
      <View>
        {/* <TheHeckComponent /> */}
        {/* <TheFlexBox /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <TheCart /> */}
        {/* <TheStyleComponent /> */}
        <Communication />
      </View>
    </ScrollView>
  );
};

export default App;
