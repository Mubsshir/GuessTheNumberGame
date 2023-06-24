import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View
        style={{
          ...styles.btn,
          backgroundColor: props.color ? props.color : "#2db4dd",
        }}
      >
        <Text
          style={{ ...styles.btnText, color: props.text ? props.text : "#000" }}
        >
          {props.title ? props.title : "Button"}
        </Text>{props.icon}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    flexDirection:'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  btnText: {
    fontWeight: 500,
    padding: 2,
    fontSize: 16,
    margin: 0,
  },
});

export default MainButton;
