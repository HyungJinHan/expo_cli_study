import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

// styled components로는 버튼 스타일링 불가

export function BasicButton({ title, navigation }) {
  return (
    <Button
      style={buttonStyles.mainButton}
      title={title}
      onPress={() => navigation.navigate(`${title}`)}
    />
  );
}

export function CustomButton({ title, navigation }) {
  return (
    <TouchableOpacity
      style={buttonStyles.mainTouchableOpacity}
      onPress={() => navigation.navigate(`${title}`)}
    >
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function BackButton({ title, navigation }) {
  return (
    <TouchableOpacity
      style={buttonStyles.backButton}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text style={buttonStyles.backButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  mainTouchableOpacity: {
    backgroundColor: "#37b3ed",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  mainButton: {
    color: "#37b3ed",
  },
  backButton: {
    backgroundColor: "#37b3ed",
    borderRadius: 100,
    bottom: 10,
    left: 10,
    alignSelf: "flex-start",
    width: 50,
    height: 50,
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
  },
  backButtonText: {
    fontSize: 50,
    padding: "auto",
    color: "white",
  },
});
