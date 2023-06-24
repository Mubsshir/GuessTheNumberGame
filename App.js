import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import Header from "./components/Header";
import StartScreen from "./Screens/StartScreen";
import GuessCard from "./components/GuessCard";
import { useCallback, useEffect, useState } from "react";
import GameOver from "./Screens/GameOver";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//will not change when component re-render
let thinkNumber = Math.floor(Math.random() * 20);
let guessLimit = 5;
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [guessCount, setGuessCount] = useState(0);
  const [helpMsg, setHelpMsg] = useState("");
  const [isGuessed, setIsGuessed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFonts = async () => {
    try {
      console.log("Loading fonts......")
      await Font.loadAsync({
        "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFonts();
  }, []);

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

  const onLayoutRootView = useCallback(async () => {
    if (!isLoading) {
      await SplashScreen.hideAsync();
      console.log("Font loaded");
    }
  }, [isLoading]);


  const resetCount = () => {
    setGuessCount(0);
    thinkNumber = Math.floor(Math.random() * 20);
    setHelpMsg("");
    setIsGuessed(false);
  };

  if (isLoading) {
    return null;
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView
        enabled={false}
        style={styles.container}
        onLayout={onLayoutRootView}
      >
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
  }
});
