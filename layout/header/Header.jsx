import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import styles from "./header.style";

export default function Header() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headerText}>Header</Text>
    </View>

    // SafeAreaView : 노치 부분에 가려지지 않도록 하기 위함
  );
}
