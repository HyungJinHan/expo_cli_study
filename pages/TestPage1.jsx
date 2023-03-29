import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { BackButton } from "../components/Button";

export default function TestPage1({ navigation }) {
  return (
    <View style={styles.mainView}>
      {/* <StatusBar style="auto" /> */}
      <BackButton title={"<"} navigation={navigation} />
      <Text>TestPage1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
  },
});
