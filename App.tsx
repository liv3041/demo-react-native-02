import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import FlatCards from './components/FlatCards'

const App = () =>{
  return(
    <SafeAreaView>
      <ScrollView>
      <FlatCards></FlatCards>
      </ScrollView>
      
    </SafeAreaView>
  )
}
export default App;

