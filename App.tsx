import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () =>{
  return(
    <SafeAreaView>
      <ScrollView>
      <FlatCards></FlatCards>
      <ElevatedCards></ElevatedCards>
      </ScrollView>
      
    </SafeAreaView>
  )
}
export default App;

