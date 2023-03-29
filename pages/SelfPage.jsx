import { useState } from "react";
import { Button, Text, View } from "react-native";
import { BackButton, BasicButton, CustomButton } from "../components/Button";
import CustomInput from "../components/Input";
import CustomText from "../components/Text";

export default function SelfPage({ navigation }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.viewStyle}>
      <BackButton title={"<"} navigation={navigation} />
      <CustomText inputValue={inputValue} />
      <CustomInput inputValue={inputValue} setInputValue={setInputValue} />
      <CustomButton title="Test1" navigation={navigation} />
      <BasicButton title="Test2" navigation={navigation} />
    </View>
  );
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
