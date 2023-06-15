import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/UI/Header';
import StartScreen from './Screens/StartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <StartScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
});
