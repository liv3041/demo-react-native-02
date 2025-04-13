import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'

const App = () =>{
  return(
    <View>
    <Text style = {styles.headingText}>FlatCards</Text>
      <View style ={styles.container}>
        <View style = {[styles.card,styles.cardOne]}>
            <Text style = {styles.textOne}>Red</Text>
        </View>
        <View style = {[styles.card,styles.cardTwo]}>
            <Text style = {styles.textOne}>Green</Text>
        </View>
        <View style = {[styles.card,styles.cardThree]}>
            <Text style = {styles.textOne}>Blue</Text>
        </View>
   
      </View>
      
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
 headingText:{
  fontSize:24,
  fontWeight: 'bold',
  paddingHorizontal:8,
  textAlign: 'center',
  color: '#FFFFFF'
 },
 container:{
    flex:1,
    flexDirection:'row',
    padding:8
 },
 card:{
    flex:1,
    justifyContent: 'center',
    width:100,
    height:100,
    borderRadius:4,
    margin: 8
 },
 cardOne:{
    backgroundColor:'#EF5354'
 },
 cardTwo: {
    backgroundColor: '#50DBB4' // Green
  },
  cardThree: {
    backgroundColor: '#5DA3FA' // Blue
  },
  textOne:{
    fontSize:16,
  fontWeight: 'bold',
  paddingHorizontal:8,
  textAlign: 'center',
  }
  
})