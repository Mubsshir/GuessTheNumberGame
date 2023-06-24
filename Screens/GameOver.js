import React from "react";
import {Text, Button, Image, StyleSheet } from "react-native";
import Card from "../components/UI/Card";
let imgUrl='https://t4.ftcdn.net/jpg/02/11/54/33/360_F_211543376_kv7x0SwdITkWbqajGzglhcvZV25AsPsS.jpg'
const GameOver = (props) => {
  return (
    <Card style={styles.imgBox}>
      <Image style={{width:'100%' ,height:100,marginBottom:20 ,borderRadius:20}}
        src={imgUrl} resizeMode="cover"
      />
      <Text style={styles.msg}>You Exceed the guess Limit</Text>
      <Button title="Replay" color={'green'} onPress={props.resetGame}/>
    </Card>
  );
};

const styles=StyleSheet.create({
  imgBox:{
    width:'90%',
    alignItems:'center',
    padding: 10,
  },msg:{
    fontSize:15,
    fontWeight:600,
    marginVertical:10,
    color:'red'
  }
})
export default GameOver;
