import React from 'react'
import { View,StyleSheet } from 'react-native';
const Card = (props) => {
  return (
    <View style={{...styles.card,...props.style}}>
      {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    paddingVertical:30,
    marginVertical: 10,
    marginHorizontal:2,
    shadowColor: "#000000",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    elevation: 8,
    shadowRadius:10,
    borderRadius:10,
    backgroundColor:'white'
  }
});
export default Card