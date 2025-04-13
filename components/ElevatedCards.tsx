import React from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet
  } from 'react-native'

  export default function ElevatedCards(){
    return (
        <View>
            <Text style = {styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal = {true} style = {styles.container}>
                <View style = {[styles.card,styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style = {[styles.card,styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style = {[styles.card,styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style = {[styles.card,styles.cardElevated]}>
                    <Text>see</Text>
                </View>
                <View style = {[styles.card,styles.cardElevated]}>
                    <Text>more</Text>
                </View>
                <View style = {[styles.card,styles.cardElevated]}>
                    <Text>...</Text>
                </View>
                

            </ScrollView>
        </View>
    )
  }
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
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        alignItems:'center',
        justifyContent:'center',
        color:'#000000'
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333'
    },
  })