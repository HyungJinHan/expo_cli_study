import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BackButton } from "../components/Button";

export default function TestPage2({ navigation }) {
  return (
    <View style={styles.mainView}>
      <BackButton title={"<"} navigation={navigation} />
      <Text>TestPage2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
  },
});
