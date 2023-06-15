import React from "react";
import { Button } from "react-native";
import { TextInput, Text, View, StyleSheet } from "react-native";
import Card from "../components/UI/Card";
const StartScreen = () => {
  return (
    <Card style={styles.inputArea}>
      <Text style={styles.cardText}>Start a New Game</Text>
      <View style={styles.interactiveArea}> 
        <TextInput style={styles.input}
          numeric
          keyboardType="numeric"
          placeholder="Enter a Number"
        />
        <View style={styles.btn}>
          <Button title="Reset" color={"red"} />
          <Button title="Confirm" color={"green"} />
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
  cardText:{
    textAlign:'center',
    fontWeight:500,
    fontSize:18,
    color:'green'
  },
  interactiveArea:{
    marginVertical:10,
    width:'100%',
    alignItems:'center'
  },
  input:{
    fontSize:15,
    fontWeight:'600',
    width:'70%',
    textAlign:'center',
    marginBottom:15,
    borderColor:'#aca4a47d',
    padding:5,
    borderWidth:1,
    borderRadius:5
  },
  btn:{
    flexDirection:'row',
    width:'70%',
    justifyContent:'space-around'
  }
});
export default StartScreen;
