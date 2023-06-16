import React, { useRef, useState } from "react";
import { Button } from "react-native";
import { TextInput, Text, View, StyleSheet } from "react-native";
import Card from "../components/UI/Card";
const StartScreen = (props) => {
  const [number,setNumber]=useState();
  const guessRef=useRef();
  const onChangeHandler=(number)=>{
    if(!isNaN(number)){
      guessRef.current=number;
    }
  }

  const onConfirmHandler=()=>{
    if(guessRef.current!=''){
      props.onConfirm(guessRef.current);
    }
    return
  }
  const onResetHandler=()=>{
    props.onReset();
  }
  return (
    <Card style={styles.inputArea}>
      <Text style={styles.cardText}>What am I thinking</Text>
      <View style={styles.interactiveArea}> 
        <TextInput style={styles.input}
          numeric
          keyboardType="numeric"
          placeholder="Guess a number b/w 0 and 20"
          onChangeText={onChangeHandler}
        />
        <View style={styles.btn}>
          <Button title="Reset" color={"red"} onPress={onResetHandler}/>
          <Button title="Confirm" color={"green"}  onPress={onConfirmHandler}/>
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
    fontSize:14,
    fontWeight:'600',
    width:'70%',
    textAlign:'center',
    marginBottom:15,
    borderColor:'#aca4a47d',
    padding:5,
    borderWidth:1,
    borderRadius:5,
    textAlign:'center'
  },
  btn:{
    flexDirection:'row',
    width:'70%',
    justifyContent:'space-around'
  }
});
export default StartScreen;