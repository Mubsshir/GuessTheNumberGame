import React from 'react'
import Card from './Card'
import { StyleSheet, Text } from 'react-native'

const GuessCard = (props) => {
  return (
    <Card style={styles.guessBox}>
      <Text style={{color:'red',textAlign:'center',fontWeight:500}}>{props.msg}</Text>
      <Text style={styles.text}>Total Guess :{props.guess} </Text>
    </Card>
  )
}

const styles=StyleSheet.create(
  {
    guessBox:{
      padding:10,
      width:'90%'
    },
    text:{
      fontSize:15,
      fontWeight:500,
      textAlign:'center'
      ,marginVertical:10
    }
  }
)

export default GuessCard