import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomButton } from "../components/Button";

export default function MainPage({ navigation }) {
  return (
    <View style={styles.mainView}>
      <Text>MainPage</Text>
      <CustomButton title="Self" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
  },
});
