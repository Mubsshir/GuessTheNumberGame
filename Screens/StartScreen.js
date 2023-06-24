import React, { useRef, useState } from "react";
import { Alert, Button } from "react-native";
import { TextInput, Text, View, StyleSheet } from "react-native";
import Card from "../components/UI/Card";
import BoldText from "../components/UI/BoldText";
import MainButton from "../components/UI/MainButton";
import { MaterialIcons as MI } from "@expo/vector-icons";

const StartScreen = (props) => {
  const [guessNumber, setGuessNumber] = useState();
  const onChangeHandler = (number) => {
    if (!isNaN(number) && number.length < 3) {
      setGuessNumber(number);
    }
  };

  const onConfirmHandler = () => {
    if (!(guessNumber <= 20 && guessNumber >= 0)) {
      Alert.alert("Wrong Input", "Input should be b/w 0 and 20", [
        {
          text: "Ok",
          style: "destructive",
          onPress: () => {
            setGuessNumber("");
          },
        },
      ]);
      return;
    }
    if (!guessNumber) {
      Alert.alert("No Input found", "Please guess the number", [
        {
          text: "Ok",
          style: "destructive",
          onPress: () => {
            setGuessNumber("");
          },
        },
      ]);
      return;
    }
    props.onConfirm(guessNumber);
    return;
  };
  const onResetHandler = () => {
    setGuessNumber("");
    props.onReset();
  };

  return (
    <Card style={styles.inputArea}>
      <BoldText style={styles.cardText}>What am I thinking</BoldText>
      <View style={styles.interactiveArea}>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          placeholder="Guess a number b/w 0 and 20"
          onChangeText={onChangeHandler}
          value={guessNumber}
        />
        <View style={styles.btn}>
          <MainButton
            title="Reset"
            color="red"
            text="white"
            onPress={onResetHandler}
            icon={<MI name="replay" size={18} color={"white"} />}
          />
          <MainButton
            title="Confirm"
            color="green"
            text="white"
            onPress={onConfirmHandler}
            icon={<MI name="check" size={18} color={"white"} />}
          />
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  inputArea: {
    width: "90%",
    alignItems: "center",
    padding: 10,
  },
  cardText: {
    color: "green",
  },
  interactiveArea: {
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    fontWeight: "600",
    width: "70%",
    textAlign: "center",
    marginBottom: 15,
    borderColor: "#aca4a47d",
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
  btn: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-around",
  },
});
export default StartScreen;
