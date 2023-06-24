import React from 'react'
import { StyleSheet,View ,Text} from 'react-native'


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Guess a Number</Text>
    </View>
  )
}
const styles=StyleSheet.create(
  {
    header:{
      backgroundColor:'green',
      width:'100%',
      alignItems:'center',
      height:75,
      justifyContent:'flex-end',
      paddingVertical:10,
      marginBottom:10
    },
    title:{
      fontSize:21,
      fontWeight:600,
      color:'white'
    }
  }
)

export default Header