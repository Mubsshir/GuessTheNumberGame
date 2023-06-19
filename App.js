import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import Header from "./components/UI/Header";
import StartScreen from "./Screens/StartScreen";
import GuessCard from "./components/UI/GuessCard";
import { useState } from "react";
import GameOver from "./Screens/GameOver";
let thinkNumber = Math.floor(Math.random() * 20);
let guessLimit = 5;
export default function App() {
  const [guessCount, setGuessCount] = useState(0);
  const [helpMsg, setHelpMsg] = useState("");
  const [isGuessed, setIsGuessed] = useState(false);
  const addCountHandler = (number) => {
    if (!isGuessed) {
      console.log(thinkNumber);
      if (number < thinkNumber / 2 || number > thinkNumber * 2) {
        setHelpMsg("You are too far away");
      } else if (number > thinkNumber) {
        setHelpMsg("Your guess is greater than the target number.");
      } else if (number < thinkNumber) {
        setHelpMsg("Your guess is less than the target number.");
      } else {
        setHelpMsg("Congratulations! You guessed the correct number.");
        setGuessCount(0);
        setIsGuessed(true);
        setTimeout(() => {
          setHelpMsg("");
          resetCount();
        }, 5000);
      }
      setGuessCount(guessCount + 1);
    }
  };
  const resetCount = () => {
    setGuessCount(0);
    thinkNumber = Math.floor(Math.random() * 20);
    setHelpMsg("");
    setIsGuessed(false);
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView enabled={false} style={styles.container}>
        <Header />
        {(guessCount <= guessLimit || isGuessed) && (
          <>
            <StartScreen onConfirm={addCountHandler} onReset={resetCount} />
            <GuessCard msg={helpMsg} guess={guessCount} />
          </>
        )}
        {guessCount > guessLimit && !isGuessed && (
          <GameOver resetGame={resetCount} />
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
